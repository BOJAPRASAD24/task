"use client";
import React from 'react'
import Header from '../common/Header';
import Link from 'next/link';

const Homepage = () => {
  const name = "Bob";

  const handleClick = () =>{
    alert("Hello World!");
  }

    return (
      <div className='m-4 '>
        <Header username={name}/>
<Link href={'/about'}>About</Link>
        <div>
           <h1>Hi,{name}</h1>
        </div>

        <button onClick={handleClick}className='bg-blue-600 text-white px-4 py-2 rounded cursor-pointer' >Click /</button>
      </div>
    )
  }

export default Homepage