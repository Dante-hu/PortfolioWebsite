"use client";
import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  /**creating an array of links that is used */
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
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    //Mobile section
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-100 bg-gray/30 backdrop-blur-sm">
      <div className="4xl:max-w-screen-xl mx-auto flex flex-wrap items-center justify-end px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
          {/* Non-Mobile Section */}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 justify-end md:p-0 md:flex-row md:space-x-8 mt-5 mx-auto">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};
export default Navbar;
