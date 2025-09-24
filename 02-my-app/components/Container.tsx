import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div>{children}</div>;
};
