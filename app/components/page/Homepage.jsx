"use client";
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';

const Homepage = () => {
  const name = "Bob";

  // let count = 0;
  const [count,setCount] = useState(0);
  const [count1,setCount1] = useState(10);

const handleIncreament = ()=>{
  setCount(count + 1);

}

const handleIncreament1 = ()=>{
  setCount(count1 + 10);

}


// useEffect(() => {
//   console.log("Render!")
// })

// useEffect(()=>{
//   console.log("Render!");
// },[]);

// useEffect(()=>{
//   console.log("Render!");
// },[count1]);

    return (
      <div className='m-4 '>
        <Header username={name}/>
        <div className='m-8'>

          <h1 className='text-4xl font-semibold '>
            {count}
          </h1>

        <button onClick={handleIncreament}className='bg-green-500 text-white py-2 px-4 rounded'>+</button>
       </div>

      <div className='m-8'>

        <h1 className='text-4xl font-semibold '>
         {count1}
       </h1>

       <button onClick={handleIncreament1}className='bg-green-500 text-white py-2 px-4 rounded'>+</button>
      </div>
    </div>
    )
  }

export default Homepage