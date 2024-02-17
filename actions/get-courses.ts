import { db } from "@/lib/db";
import { Course } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithProgressWithChapter = Course & {
    chapters: { id: string }[];
    progress: number | null;
  };

type GetCourses = {
    userId: string;
    title?: string;
};

export const getCourses = async ({
    userId,
    title,
}: GetCourses): Promise<CourseWithProgressWithChapter[]> => {
    try {
        const courses = await db.course.findMany({
            where: {
                userId,
                title: {
                    contains: title
                },
                isPublished: true
            },
            include: {
                chapters: {
                    where: {
                        isPublished: true
                    },
                    select: {
                        id: true
                    }
                },
                purchases: {
                    where: {
                        userId
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        const CourseWithProgressWithChapter: CourseWithProgressWithChapter[] = await Promise.all(
            courses.map(async course => {
                if (course.purchases.length === 0){
                    return {
                        ...course,
                        progress: null
                    }
                }

                const progressPercentage = await getProgress(userId, course.id);

                return {
                    ...course,
                    progress: progressPercentage
                }
            })
        )
        return CourseWithProgressWithChapter
    } catch (error) {
        console.log("[GET_COURSES]", error);
        return [];
    }
}