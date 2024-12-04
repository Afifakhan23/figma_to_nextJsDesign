import React from 'react'
import {Inter} from "next/font/google"
import Link from 'next/link'
//use google fonts
const inter=Inter({subsets:['latin']})

const Navbar = () => {
    const navLink=[
        {
            name:"Works",
            link:"#"
        },
        {
            name:"Blog",
            link:"#"
        },
        {
            name:"Contact",
            link:"#"
        },
    ]
    return (
            <ul className={`${inter.className} h-[24px] flex justify-end items-center m-[66px] text-[20px] font-medium space-x-6`}>
            {
                navLink.map((items,i)=>{
                    return <li key={i}>
                        <Link className='hover:text-mypink' href={items.link}>{items.name}</Link>
                    </li>
                })
            }
        </ul>
    )
}

export default Navbar