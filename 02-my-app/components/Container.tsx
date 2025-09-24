import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={cn("max-w-4xl mx-auto px-4 md:py-8 bg-amber-200")}>
      {children}
    </div>
  );
};
