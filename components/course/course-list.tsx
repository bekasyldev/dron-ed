import { CourseCard } from "@/components/course/course-card";

type Items = {
  id: string;
  title: string;
  chapters: string[];
  imageUrl: string;
  price: number;
  progress: number | null;
};

// test cases
const items = [
  {
    id: "2",
    title: "Drone Photography Basics",
    chapters: ["Camera Settings", "Composition Techniques", "Editing Tips"],
    imageUrl: "drone.jpg",
    price: 29.99,
    progress: null,
  },
  {
    id: "3",
    title: "Advanced Drone Maneuvers",
    chapters: ["Precision Flying", "Acrobatics", "Obstacle Avoidance"],
    imageUrl: "drone-env.jpeg",
    price: 39.99,
    progress: 50,
  },
];

export const CoursesList = async () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={`${item.imageUrl}`}
            chaptersLength={item.chapters.length}
            price={item.price!}
            progress={item.progress}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses found
        </div>
      )}
    </div>
  );
};
