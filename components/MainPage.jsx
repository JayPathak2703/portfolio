import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const MainPage= () =>
{
    return (
        <div className ='w-full h-screen text-center'>
            <div className = 'max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text:sm tracking-widest text-grey-600 text-bold '>Getting To Know Me !</p>
                    <h1 className='py-4 text-gray-700'>Greetings, I&apos;m 
                    <span className='text-[#5651e5]'> Jay Pathak</span>
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&apos;m a passionate and dedicated web developer with a keen interest in creating innovative and interactive websites.
                    I love exploring new technologies and frameworks to enhance my skills and stay updated with the latest trends in the industry.
                    </p>

                        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer  p-4 hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer  p-4 hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer  p-4 hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursonr-pointer  p-4 hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
