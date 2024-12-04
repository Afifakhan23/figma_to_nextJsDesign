import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const heebo=Heebo({subsets:['latin']})

const Feature = () => {
    return (
            <div className={`${heebo.className} my-20 min-w-[300px] flex flex-col items-center justify-start md:items-start md:w-[919px] h-auto md:h-[934.2px] ml-0 md:ml-[237px]`}>
                <div className='font-medium text-[22px] w-[153px] h-[32px] mb-5'>Feaured Works</div>
                <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start'>
                    <Image src={'/assets/feature1.png'} alt='img' width={246} height={180}/>
                    <div className='w-[300px] md:w-[663.46px] h-[272.1px] px-4'>
                        <h2 className='w-[305px] h-[44px] font-bold text-[25px] md:text-[30px] pb-5'>Designing Dashboards</h2>
                        <div className='flex justify-between items-center w-[200px] h-[37px]'>
                            <p className='w-[68px] h-[24px] bg-mypink text-white rounded-full text-center'>2020</p>
                            <p className='w-[97px] h-[29px] text-[20px] font-normal text-black/62'>Dashboard</p>
                        </div>
                        <p className='font-light text-[15px] md:text-[18px] pt-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start'>
                    <Image src={'/assets/feature2.png'} alt='img' width={246} height={180}/>
                    <div className='w-[300px] md:w-[663.46px] h-[272.1px] px-4'>
                        <h2 className='w-[305px] h-[44px] font-bold text-[25px] md:text-[30px] pb-5'>Designing Dashboards</h2>
                        <div className='flex justify-between items-center w-[200px] h-[37px]'>
                            <p className='w-[68px] h-[24px] bg-mypink text-white rounded-full text-center'>2020</p>
                            <p className='w-[97px] h-[29px] text-[20px] font-normal text-black/62'>Dashboard</p>
                        </div>
                        <p className='font-light text-[15px] md:text-[18px] pt-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start'>
                    <Image src={'/assets/feature3.png'} alt='img' width={246} height={180}/>
                    <div className='w-[300px] md:w-[663.46px] h-[272.1px] px-4'>
                        <h2 className='w-[305px] h-[44px] font-bold text-[25px] md:text-[30px] pb-5'>Designing Dashboards</h2>
                        <div className='flex justify-between items-center w-[200px] h-[37px]'>
                            <p className='w-[68px] h-[24px] bg-mypink text-white rounded-full text-center'>2020</p>
                            <p className='w-[97px] h-[29px] text-[20px] font-normal text-black/62'>Dashboard</p>
                        </div>
                        <p className='font-light md:text-[18px] pt-5 text-[15px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
    )
}

export default Feature