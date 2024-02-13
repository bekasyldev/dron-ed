import WrapperPages from "@/components/WrapperPages";
import { CoursesList } from "@/components/course/course-list";
import React from "react";

const CoursePage = () => {
  return (
    <WrapperPages>
      <CoursesList />
    </WrapperPages>
  );
};

export default CoursePage;
