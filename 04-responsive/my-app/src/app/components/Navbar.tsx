"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";

export const Navbar = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="realtive flex rounded-full border-neutral-200 justify-between items-center mt-4 py-4 max-w-6xl mx-auto px-2 shadow-aceternity">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={30}
          className="px-4"
        />
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-500 mr-10 ">
          {links.map((link, index) => (
            <Link
              className="hover:text-neutral-700"
              href={link.href}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden pr-4">
          <IconMenu2 />
        </button>
        {open && (
          <div className="absolute md:hidden inset-x-0 top-15 bg-white rounded-md shadow-aceternity max-w-[95%] mx-auto">
            <div className="flex flex-col items-start gap-6 text-sm text-neutral-500 p-4">
              {links.map((link, index) => (
                <Link
                  className="hover:text-neutral-700"
                  href={link.href}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
