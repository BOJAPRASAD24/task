"use client";
import {db} from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react'

const Hero = () => {
const[reviews, setReviews] = useState([]);
const[newReview, setNewReview] = useState({title:"",author:"", rating:0, review:""});

const fetchReview = async()=>{
    const querysnapshot = await getDocs(collection(db,"review"));

    const reviewDate = querysnapshort.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }))

    setReviews(reviewData);
}
const handleAddReview = async()=>{
    await addDoc(collection(db,"review"),{
        title: newReview.title,
        author: newReview.author,
        rating: newReview.rating,
        review: newRevive.revive,
        createAt: new Date().toISOString(),
    })

    setNewReview({title:"", author:"", rating:0, review:""})

    fetchReview();
}

useEffect(()=>{
    fetchReview()
},[]);

console.log(reviews)
 
    return (
        <div className='m-6'>
            <div className=''>
                </div>

                <h1 className='text-2xl font-semibold mb-4'>AddReview</h1>
            <div className='max-w-md flex flex-col gap-4'>
                <input type="text" placeholder='Book title' className='p-2 border border-grey-300 rounded' value={newReview.title} onChange={(e)=>setNewReview({...newReview, title:e.target.value})} />
                <input type="text" placeholder='Author Name' className='p-2 border border-grey-300 rounded' value={newReview.author} onChange={(e)=>setNewReview({...newReview, author:e.target.value})} />
                <input type="number" placeholder='Book Rating' className= 'p-2 border border-grey-300 rounded' value={newReview.rating}  onChange={(e)=>setNewReview({...newReview, rating:e.target.value})}/>

            
                <textarea placeholder='Review' className='p-2 border border-grey-300 rounded' value={newReview.review} onChange={(e)=>setNewReview({...newReview, review:e.target.value})}></textarea>

                <button className='bg-green-500 flex items-center justify-center py-2 gap-2 text-white rounded cursor-pointer' onClick={handleAddReview}> <PlusCircle className='w-4'/> Add Review</button>
            </div>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
                reviews.map((review)=>(
                    <div key={review.id} className='flex flex-col gap-2 border m-4 p-4 rounded'>
                        <span>Title: {review.title}</span>
                        <span>Author: {review.author}</span>
                        <span>Rating: {review.rating}</span>
                        <span>Review: {review.review}</span>
                    </div>
                ))
}
    </div>
        </div>
)
}
    
        

export default Hero