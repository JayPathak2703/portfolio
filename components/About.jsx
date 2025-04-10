"use client";
import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/AboutSection.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Welcome Visitor !</h2>
          <p className="py-2 text-gray-600 text-sm">
            Hi, I’m Jay Pathak, a passionate and versatile web developer with a
            strong foundation in computer engineering and programming. I hold a
            Diploma in Computer Engineering from Maharaja Sayajirao University,
            where I graduated with First Class with Distinction. Currently, I am
            further honing my skills by pursuing a Diploma in Computer
            Programming at Seneca Polytechnic. I have always been fascinated by
            technology and how it shapes the digital world. My expertise lies in
            building dynamic and interactive front-end applications using HTML,
            CSS, JavaScript, and React. However, I don’t just stop at one
            stack—I thrive on continuous learning and believe that the best
            developers are those who adapt and choose the right tools for the
            job. Whether it’s exploring new frameworks, working with databases,
            or diving into full-stack development, I am always eager to expand
            my knowledge and take on new challenges. Beyond coding, I enjoy
            problem-solving, collaborating on innovative projects, and bringing
            creative ideas to life through technology. My approach to
            development is not just about writing code—it's about crafting
            seamless user experiences and building efficient, scalable, and
            impactful applications. I am excited about the endless possibilities
            in the tech industry and look forward to contributing my skills to
            meaningful projects. Let’s build something amazing together!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-l shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
