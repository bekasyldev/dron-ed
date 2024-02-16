import WrapperPages from "@/components/WrapperPages";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import ChapterPage from "./chapters/[chapterId]/page";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CourseEnrollButton from "./chapters/[chapterId]/_components/course-enroll-button";

const CourseIdPagge = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
  });

  if (!course) {
    redirect("/courses");
  }

  return (
    <div className="bg-white h-screen">
      <div className="mt-10 ml-10">
        <CourseEnrollButton courseId={params.courseId} price={course.price} />
      </div>
    </div>
  );
};

export default CourseIdPagge;
