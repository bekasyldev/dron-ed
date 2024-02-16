import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href={"/teacher/create"}>
        <Button className="bg-green-600">Create a cousre</Button>
      </Link>
    </div>
  );
};

export default TeacherPage;
