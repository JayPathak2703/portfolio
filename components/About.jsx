'use client'
import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/aboutMe.jpeg';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
              About
            </p>
            <h2 className='py-4'>Greetings Visitor !</h2>
            <p className='py-2 text-gray-600 text-sm'>
              I am a Computer Engineering Diploma pass out from Maharaja Sayajirao University,
              with First Class with Distinction. I am also currently enrolled in 
              Computer Programming Diploma, Seneca Polytechnic.
              I’m passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using HTML, CSS, Javascript, and
              React, I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job.
            </p>
          </div>
          <div className='w-full h-auto m-auto shadow-l shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        </div>
      </div>
    );
};

export default About;
