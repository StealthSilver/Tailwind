import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex rounded-full border-neutral-200 justify-between items-center mt-4 py-4 max-w-6xl mx-auto px-2 shadow-aceternity">
      <Image
        src="https://ui.aceternity.com/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full"
      ></Image>
    </div>
  );
};
