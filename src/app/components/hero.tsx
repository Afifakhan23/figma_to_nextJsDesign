import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
//use google fonts
const heebo=Heebo({subsets:['latin']})
const Hero = () => {
  return (
    <div className='my-32 p-4 md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between mx-auto'>
        {/* text */}
        <div className={`w-[300px] md:w-[521px] md:h-[305px] h-[380px] text-myblack ${heebo.className} flex flex-col justify-evenly md:justify-between md:items-start items-center`}>
            <h1 className={`text-[30px] md:text-[48px] font-extrabold`}>Hi, I am John,<br/>Creative Technologist</h1>
            <p className='text-[14px] md:text-[16px] font-medium'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className='w-[205px] h-[50px] bg-mypink text-white rounded-sm shadow-md shadow-gray-500'>Download Resume</button>
        </div>
        {/* img */}
        <div className='w-[292px] h-[299px] relative'>
            <Image className='z-50' src={'/assets/image.png'} width={292} height={299} alt='hero_img'/>
            <div className='w-[292px] h-[299px] -z-10 bg-ellipse rounded-full absolute top-2 right-2'/>
        </div>
    </div>
  )
}

export default Hero