"use client";
import useCounterStore from "@/store/useCounterStore";
import Link from "next/link";
import { useState } from "react";
import { signInWithGoogle } from "../../firebase";

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
        <h1>Logo</h1>

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

     <button className='border px-4 py-2 rounded cursor-pointer' onClick={signInWithGoogle}>sign in with Google</button>
    
       </div>
    
    )
}
export default Header;