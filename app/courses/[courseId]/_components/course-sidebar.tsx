import { CourseProgress } from "@/components/course/course-progress";
import { CourseSidebarItem } from "./course-sidebar-item";

const sampleChapters = [
  {
    id: "oijsadofij",
    title: "Introduction to Programming",
    userProgress: [{ isCompleted: true }],
    isFree: true,
  },
  {
    id: "oijsadofij",
    title: "Variables and Data Types",
    userProgress: [],
    isFree: true,
  },
  {
    id: "oijsadofij",
    title: "Conditional Statements",
    userProgress: [{ isCompleted: true }],
    isFree: true,
  },
];

export const CourseSidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">Course Titile</h1>
        {/* purchase */}
        {true && (
          <div className="mt-10">
            <CourseProgress variant="success" value={20} />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {sampleChapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={"oijsadofij"}
            // !chapter
            isLocked={!chapter.isFree && true}
          />
        ))}
      </div>
    </div>
  );
};
