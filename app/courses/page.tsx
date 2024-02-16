import Navbar from "@/components/Navbar";
import WrapperPages from "@/components/WrapperPages";
import { CoursesList } from "@/components/course/course-list";
import React from "react";
import CourseBanner from "./_components/course-banner";
import SearchCourses from "./_components/search-courses";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <WrapperPages>
        <CourseBanner />
        <SearchCourses />
        <CoursesList />
      </WrapperPages>
    </>
  );
};

export default CoursePage;
