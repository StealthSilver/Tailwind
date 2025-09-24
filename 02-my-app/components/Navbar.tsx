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
            className="text-neutral-800 text-lg font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
