import React from "react";

export const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },

    {
      title: "Pricing",
      href: "#",
    },

    {
      title: "Login",
      href: "#",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">Finnance</div>
      <div>
        {links.map((link) => (
          <a key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};
