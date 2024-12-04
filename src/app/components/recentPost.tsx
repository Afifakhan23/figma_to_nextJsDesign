import { Heebo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const heebo = Heebo({ subsets: ['latin'] })
const RecentPost = () => {
    return (
        <div className={`bg-mylightPink h-[850px] md:h-[502px] flex flex-col justify-center items-center ${heebo.className}`}>
            <div className='w-[300px] md:w-[1030px] flex justify-between items-center mx-auto mb-5'>
                <h2 className='text-[22px] font-semibold'>Recent Post</h2>
                <Link href={'#'} className='text-[22px] font-medium border-transparent border-b-2 text-mypink hover:border-mypink'>View all</Link>
            </div>
            <div className=' w-[330px] h-[700px] md:w-[1030px] md:h-[356px] flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center mx-auto'>
                <div className="w-[320px] md:w-[483px] h-[330px] md:h-[356px] bg-white flex justify-center items-center">
                    <div className='w-[300px] md:w-[391px] h-[286px] flex flex-col justify-between items-start'>
                    <h2 className='font-bold text-[20px] md:text-[26px]'>Making a design system from scratch</h2>
                    <div className='w-[250px] md:w-[308.28px] h-[42.12px] flex justify-between items-center text-[18px] font-normal text-black/70'>
                        <p>12 Feb 2020</p>
                        <p className='text-blak/67'>|</p>
                        <p>Design , Pattern</p>
                    </div>
                    <p className='text-myblack text-[14px] md:text-[18px] '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="w-[320px] md:w-[483px] h-[330px] md:h-[356px] bg-white flex justify-center items-center">
                    <div className='w-[300px] md:w-[391px] h-[286px] flex flex-col justify-between items-start'>
                    <h2 className='font-bold text-[20px] md:text-[26px]'>Making a design system from scratch</h2>
                    <div className='w-[250px] md:w-[308.28px] h-[42.12px] flex justify-between items-center text-[18px] font-normal text-black/70'>
                        <p>12 Feb 2020</p>
                        <p className='text-blak/67'>|</p>
                        <p>Design , Pattern</p>
                    </div>
                    <p className='text-myblack text-[14px] md:text-[18px] '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentPost