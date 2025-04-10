import Image from "next/image";
import React from "react";
import CrescentImg from "../public/assets/projects/Crescent-Academy/ca-coverphoto.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const LegoStore = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={CrescentImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crescent Academy</h2>
          <h3>NextJS / React / TailwindCSS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Crescent Academy Web Application is an interactive platform
            designed to simplify the management of student registrations,
            courses, and schedules. Built with React and Next.js, the
            application features dynamic content rendering, a responsive layout,
            and user role management for students, teachers, and administrators.
            The platform aims to enhance the educational experience by
            streamlining administrative tasks and providing a user-friendly
            interface.
            <br></br>
            <br></br>Key Features:
          </p>
          <ul>
            <li>
              <b>Course and student management</b>
            </li>
            <br></br>
            <li>
              <b>Real-time notifications</b>
            </li>
            <br></br>
            <li>
              <b>Role-based access control</b>
            </li>
            <br></br>
            <li>
              <b>Responsive design</b>
            </li>
          </ul>
          <a
            href="https://github.com/JayPathak2703/Crescent-Academy.git"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-black">Code</button>
          </a>
          <a
            href="https://cresent-academy-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 text-black">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default LegoStore;
