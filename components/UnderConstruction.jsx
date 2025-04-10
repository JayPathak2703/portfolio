'use client'
import React from 'react';
import Image from 'next/image';
import UnderConstructionImg from '../public/assets/underConstruction.png';
const UnderConstruction = () => {
    return (
        <div className='w-full h-full mx-auto p-2 flex justify-center items-center '>
            <Image src={UnderConstructionImg} className='rounded-xl' alt='/' />
        </div>
    );
};

export default UnderConstruction;