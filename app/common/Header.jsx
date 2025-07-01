"use client";
import link from "next/link";
import { useState } from "react";

const Header = ({username})=> {

    const [isLoggedin,setLoggedin] = useState
    (false);

    const navItems =[
        {href:'/', label:'Home'},
        {href:'/about', label: 'About'},
        {href:'/blog', label:'Blog'}
    ];

    return(
        <div className="flex justify-between">
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

   isLoggedin ? <button className ="bg-red-500 text-white px-4 py-2 rounded" onClick={()=>{
    setIsLoggedIn(isLoggedin)
}} >Logout</button> : <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={()=>{
        setIsLoggedIn(isLoggedin)
}} >Login</button>
    

    </div>
 )

}

export default Header