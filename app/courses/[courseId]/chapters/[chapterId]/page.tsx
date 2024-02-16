import React from "react";
import CourseEnrollButton from "./_components/course-enroll-button";
import { Course } from "@prisma/client";

interface ChapterPageInteface {
  courseId: string;
  price: number | null;
}

const ChapterPage = ({ price, courseId }: ChapterPageInteface) => {
  return (
    <div>
      ChapterPage
      <CourseEnrollButton courseId={courseId} price={price} />
    </div>
  );
};

export default ChapterPage;
