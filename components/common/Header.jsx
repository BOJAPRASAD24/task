"use client";
import useCounterStore from "@/store/useCounterStore";
import Link from "next/link";
import { useState } from "react";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {count} = useCounterStore()

    const navItems = [
        {href:'/', label:'Home'},
        {href:'/about', label:'About'},
        {href:'/blog', label:'Blog'}
    ];

    return(
       <div className='flex justify-between'>
        <h1>Logo {count} </h1>

<ul className="flex gap-4">
    {
        navItems.map((item, index)=>(
            <li key={index}>
                <Link href={item.href}>
                {item.label}
                </Link>
            </li>
        ))
    }
</ul>

     <button onClick={decreases} className='bg-red-500 text-white px-4 py-2 rounded-2xl' >+</button>
    
       </div>
    
    )
}
export default Header;