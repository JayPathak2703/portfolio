"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/CrescentAcademy" ||
      router.asPath === "/LegoStore"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2947");
    }
  }, [router]);

  const handleNav = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? " fixed w-full h-20 shadow-xl z-[100]  "
          : " fixed w-full h-20  z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <a href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-black">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-black">
                About
              </li>
            </a>
            <a href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-black">
                Skills
              </li>
            </a>
            <a href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-black">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-black">
                Contact
              </li>
            </a>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer ease-in duration-300"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 ${navVisible ? "block" : "hidden"}`}
      >
        <div className="fixed left-0 top-0 sm:w-[45%] md:w-[30%] h-screen p-10 bg-[#ecf0f3] ease-in duration-300">
          <div onClick={handleNav} className="flex  cursor-pointer">
            <AiOutlineClose />
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Hey There! Welcome to my portfolio
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li
                  onClick={() => setNavVisible(false)}
                  className="py-4 text-sm hover:border-b hover:border-black"
                >
                  Home
                </li>
              </a>

              <a href="#about">
                <li
                  onClick={() => setNavVisible(false)}
                  className="py-4 text-sm hover:border-b hover:border-black"
                >
                  About
                </li>
              </a>

              <a href="#skills">
                <li
                  onClick={() => setNavVisible(false)}
                  className="py-4 text-sm hover:border-b hover:border-black"
                >
                  Skills
                </li>
              </a>

              <a href="#projects">
                <li
                  onClick={() => setNavVisible(false)}
                  className="py-4 text-sm hover:border-b hover:border-black"
                >
                  Projects
                </li>
              </a>

              <a href="#contact">
                <li
                  onClick={() => setNavVisible(false)}
                  className="py-4 text-sm hover:border-b hover:border-black"
                >
                  Contact
                </li>
              </a>
            </ul>
            <div className="pt-4 border-b border-black">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Stay In Touch!
              </p>
            </div>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  href="https://www.linkedin.com/in/jay-pathak-01b5302b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  href="https://github.com/JayPathak2703"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  href="mailto:pathakjay2703@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
