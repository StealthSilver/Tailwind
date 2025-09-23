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
      <div className="links">
        {links.map((link) => (
          <a className="link-items" key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
        <button className="btn">Start free trial</button>
      </div>
    </div>
  );
};
