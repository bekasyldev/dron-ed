import { db } from "@/lib/db"

export const getProgress = async (
    userId: string,
    courseId: string
): Promise<number> => {
    try {
        const publishedChapters = await db.chapter.findMany({
            where: {
                courseId,
                isPublished: true
            },
            select: {
                id: true
            }
        });

        const publishedChaptersIds = publishedChapters.map((chapter) => chapter.id);

        const validateChapters = await db.userProgress.count({
            where: {
                userId,
                chapterId: {
                    in: publishedChaptersIds
                },
                isCompleted: true
            }
        });

        const progeressPercentage = (validateChapters / publishedChaptersIds.length ) * 100;

        return progeressPercentage
    } catch (error) {
        console.log("[GET_PROGRESS]", error);
        return 0;   
    }
}