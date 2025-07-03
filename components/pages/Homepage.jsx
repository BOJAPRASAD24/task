"use client";
import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

const Homepage = () => {

const [user, setUser] = useState(null);

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
    return () => unsubscribe();
}, [])

const handleLogout = async()=>{
    await signOut(auth);
}
    return (
        <div className='m-4'>
            <Header/>
            <div className='m-8'>
{
    user && (
       <div>
        <h1>Welcome, {user.displayName}</h1>
<button className='bg-red-600 text-white rounded px-4 py-2 ' onClick={handleLogout}>Logout</button>
       </div>
    )
}
        </div>

       </div>
    )
}

export default Homepage