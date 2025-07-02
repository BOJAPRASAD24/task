"use client";
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import useCounterStore from '@/store/useCounterStore';

const Homepage = () => {
    const name = "bob";

 const{count, increase} = useCounterStore();

    return (
        <div className='m-4'>
            <Header/>
            <div className='m-8'>

              <h1 className='text-4xl font-semibold'>
                 {count}
                 </h1>

            <button onClick={increase} className='bg-blue-500 text-white py-2 px-4 rounded-2xl'>+</button>
        </div>

       </div>
    )
}

export default Homepage