import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  //navbar state
  const [isActive, setActive] = useState(false)
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false)
    })
  })

  return (
    <header >
      <div className={`${isActive ? "shadow-md" : ""} fixed px-4 w-full h-[70px] justify-between bg-white flex md:px-10 items-center z-10 `}>
        {/*logo header*/}
        <h1>G/N</h1>

        {/*nav-links*/}
        <ul className="hidden gap-10 md:flex">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="https://hashnode.com/@GaneshNarwade" target="_blank">
            <li>Blogs</li>
          </NavLink>
          <NavLink to="/contacts">
            <li>Contacts</li>
          </NavLink>
        </ul>

        {/*side-menu icon*/}
        <div className="z-20 text-black cursor-pointer md:hidden" onClick={handleClick}>
          <Hamburger toggle={setOpen} toggled={isOpen} direction="left" size={25} color={`${isOpen ? "white" : "black"}`} duration={0.3} rounded />
        </div>
        {/*blurred bg*/}
        <div
          className={
            !isOpen
              ? "hidden"
              : "fixed top-0 right-0 h-screen w-full bg-white/10 backdrop-blur-sm"
          }
        />
        {/*side-menu*/}
        <div className={`absolute top-0 right-0 h-screen bg-v flex flex-col gap-10 p-4  ${!isOpen ? "translate-x-full" : "translate-x-0"} ease-in-out duration-200`} style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)' }}>
          <ul className="flex flex-col text-3xl font-semibold text-white gap-7 pt-[60px]">
            <hr className="border-2 rounded-lg border-slate-200" />
            <Link to="/" onClick={handleClick}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={handleClick}>
              <li>About</li>
            </Link>
            <Link to="/portfolio" onClick={handleClick}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contacts" onClick={handleClick}>
              <li>Contacts</li>
            </Link>
          </ul>
          <div className="flex gap-5 text-slate-200">
            <a href="https://github.com/ganeshnarwade">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/ganeshnarwade/">
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/__g_n7/">
              <FaInstagram size={25} />
            </a>
            <a href="https://www.x.com/__g_n7/">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

