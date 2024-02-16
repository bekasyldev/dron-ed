import { CourseProgress } from "@/components/course/course-progress";
import { CourseSidebarItem } from "./course-sidebar-item";
import { Chapter, Course, UserProgress } from "@prisma/client";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  // progress count
}

export const CourseSidebar = async ({ course }: CourseSidebarProps) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold text-primary">{course.title}</h1>
        {/* purchase */}
        {true && (
          <div className="mt-10">
            <CourseProgress variant="success" value={20} />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        <h3 className="font-semibold text-primary/80 pl-8 p-4 border-b">
          Content
        </h3>
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !chapter}
          />
        ))}
      </div>
    </div>
  );
};
