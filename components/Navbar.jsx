'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false);

    const handleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <div className='w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='hidden md:flex '>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-black'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-black'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-black'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:border-black'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer ease-in duration-300'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={`fixed left-0 top-0 w-full h-screen bg-black/70 ${navVisible ? 'block' : 'hidden'}`}>
                <div className='fixed left-0 top-0 sm:w-[45%] md:w-[30%] h-screen p-10 bg-[#ecf0f3] ease-in duration-300'>
                    <div onClick={handleNav} className='flex  cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Hey There! Welcome to my portfolio</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:border-black'>Home</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:border-black'>About</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:border-black'>Skills</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:border-black'>Projects</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b hover:border-black'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-4 border-b border-black'>
                           <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Stay In Touch!</p>
                        </div>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer - p-3 hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>

                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer - p-3 hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>

                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer - p-3 hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>

                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer - p-3 hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
