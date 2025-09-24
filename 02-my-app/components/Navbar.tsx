import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const links = [
    {
      href: "/founders",
      title: "Founders",
    },
    ,
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
    </div>
  );
};
