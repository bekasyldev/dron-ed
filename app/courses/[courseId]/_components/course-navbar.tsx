import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export const CourseNavbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center  shadow-sm justify-end">
      <div className="space-x-2">
        <Button variant={"outline"}>Previous</Button>
        <Button>Complete and Continue</Button>
      </div>
    </div>
  );
};
