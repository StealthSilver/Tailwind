import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const links = [
    {
      href: "/founders",
      title: "Founders",
    },

    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },

    {
      href: "/login",
      title: "Login",
    },
  ];

  return (
    <div className="flex items-center justify-between ">
      <Link href="/">
        <Image
          loading="lazy"
          draggable={false}
          src="/logo.svg"
          height={80}
          width={80}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-neutral-800 text-lg font-medium hover:text-neutral-500 transition duration-200 cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
        {/* Anything in the square braces in the tailwind classes are arbritary values */}
        <button className="bg-[#2579F4] px-4 py-3 text-white font-bold rounded-lg shadow-lg text-shadow-sm hover:bg-[#253df4] transition duration-200 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};
