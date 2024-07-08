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
<<<<<<< HEAD
    <ul className="flex md:hidden mx-auto items-center justify-between px-10 backdrop-blur-sm bg-opacity-100">
=======
    <ul className="flex md:hidden mx-auto items-center justify-between px-10 backdrop-blur-sm bg-opacity-100 ">
>>>>>>> 3991dd291434b42ee978fd7c24a6b44ed6bf53ff
      {navlinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
