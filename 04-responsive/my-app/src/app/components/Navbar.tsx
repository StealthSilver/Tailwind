import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="flex rounded-full border-neutral-200 justify-between items-center mt-4 py-4 max-w-6xl mx-auto px-2 shadow-aceternity">
      <Image
        src="/logo.svg"
        alt="logo"
        width={100}
        height={30}
        className="px-4"
      />
      <div className="flex items-center gap-6 text-sm text-neutral-500 mr-10 ">
        {links.map((link, index) => (
          <Link className="hover:text-neutral-700" href={link.href} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
