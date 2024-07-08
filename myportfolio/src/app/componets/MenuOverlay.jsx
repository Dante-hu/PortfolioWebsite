import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  const navlinks = [
    {
      title: "About",
      href: "about",
    },
    {
      title: "Projects",
      href: "projects",
    },
    {
      title: "Contact",
      href: "contact",
    },
  ];
  return (
    <ul className="flex md:hidden mx-auto items-center justify-between px-10 backdrop-blur-sm border-b border-gray-200 bg-white/30">
      {navlinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
