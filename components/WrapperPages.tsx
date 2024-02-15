import { cn } from "@/lib/utils";
import React from "react";

interface WrapperPagesProps {
  children: React.ReactNode;
  className?: string;
}

const WrapperPages = ({ children, className }: WrapperPagesProps) => {
  return <div className={cn("px-20", className)}>{children}</div>;
};

export default WrapperPages;
