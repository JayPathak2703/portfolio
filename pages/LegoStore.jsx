import Image from "next/image";
import React from "react";
import LegoImg from "../public/assets/projects/Lego-Store/ls-coverphoto.png";
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
          src={LegoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Lego Store</h2>
          <h3>NodeJS / EJS / PostgreSQL </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Lego Store Web Application is a fully functional and interactive
            e-commerce platform designed for showcasing and selling various Lego
            sets. The application provides users with a seamless and engaging
            shopping experience by leveraging the power of Node.js, Express.js,
            PostgreSQL, and MongoDB.
            <br></br>
            <br></br>Key Features:
          </p>
          <ul>
            <li>
              <b>Lego Set Catalog:</b> Displays a wide range of Lego sets across
              various themes, with detailed descriptions and images.
            </li>
            <br></br>
            <li>
              <b>User-Friendly Interface:</b> The application is designed with a
              clean, intuitive user interface for easy navigation and browsing.
            </li>
            <br></br>
            <li>
              <b>Search and Filter Options:</b> Users can filter Lego sets based
              on themes, set numbers, and other attributes.
            </li>
            <br></br>
            <li>
              <b>Database Integration:</b> Uses PostgreSQL for structured data
              storage, and MongoDB for unstructured data, providing efficient
              and reliable data management.
            </li>
            <br></br>
            <li>
              <b>Shopping Cart:</b> A fully functional shopping cart that allows
              users to add and remove Lego sets, view prices, and proceed to
              checkout.
            </li>
            <br></br>
            <li>
              <b>Responsive Design:</b> The platform is mobile-friendly and
              responsive, ensuring a seamless experience across all devices.
            </li>
            <br></br>
            <li>
              <b>Admin Panel:</b> Admins can easily manage and update the Lego
              sets, ensuring the store stays up-to-date with the latest
              products.
            </li>
            <br></br>
          </ul>
          <a
            href="https://github.com/JayPathak2703/Lego-Store.git"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-black">Code</button>
          </a>
          <a
            href="https://property-finder-development.web.app/"
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
                <RiRadioButtonFill className="pr-1" /> NodeJS & EJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoSQL
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
