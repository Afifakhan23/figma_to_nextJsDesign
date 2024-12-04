import { Heebo } from 'next/font/google';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import React from 'react'
import Link from 'next/link';
const heebo=Heebo({subsets:["latin"]})
const Footer = () => {
  return (
    <div className={`h-[243px] ${heebo.className} flex flex-col justify-center items-center space-y-4 md:text-[22px] text-[16px] font-semibold`}>
        <div className="flex space-x-5">
            <Link href='/'><FaFacebookSquare className='w-[30px] h-[30px] hover:text-mypink' /></Link>
            <Link href='/'><FaInstagram className='w-[30px] h-[30px] hover:text-mypink'/></Link>
            <Link href='/'><FaTwitter className='w-[30px] h-[30px] hover:text-mypink'/></Link>
            <Link href='/'><FaLinkedin className='w-[30px] h-[30px] hover:text-mypink'/></Link>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
    </div>
  )
}

export default Footer