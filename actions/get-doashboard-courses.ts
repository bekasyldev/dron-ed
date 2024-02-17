import { Chapter, Course } from "@prisma/client"

import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";

type CourseWithProgressWithChapter = Course & {
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithChapter[];
  coursesInProgress: CourseWithProgressWithChapter[];
}

export const getDashboardCourse = async (userId: string): Promise<DashboardCourses> => {
    try {
        const purchasedCourses = await db.purchase.findMany({
            where: {
                userId
            },
            select: {
                course: {
                    include: {
                        chapters: {
                            where: {
                                isPublished: true
                            }
                        }
                    }
                }
            }
        })

        // array of purchased courses
        const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithChapter[];

        // get progress of each purchased course
        for (let course of courses) {
        const progress = await getProgress(userId, course.id);
        course["progress"] = progress;
        }
        // sorting courses
        const completedCourses = courses.filter((course) => course.progress === 100);
        const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

        return {
        completedCourses,
        coursesInProgress,
        }
    } catch (error) {
        console.log("[GET_DASHBOARD_COURSES]", error);
        return {
         completedCourses: [],
        coursesInProgress: [],
        }
    }
}