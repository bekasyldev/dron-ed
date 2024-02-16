"use client";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface CourseEnrollButtonProps {
  price: number | null;
  courseId: string;
}

const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      // to redirect to course you bought
      window.location.assign(response.data.url);
    } catch (error) {
      // toast.error
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      className="w-full md:w-auto"
      size={"sm"}
      disabled={isLoading}
      onClick={onClick}
    >
      Enroll for {price ? price : "free"}
    </Button>
  );
};

export default CourseEnrollButton;
