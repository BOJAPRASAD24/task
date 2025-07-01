import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='m-6'>
            <h1 className='text-xl font-semibold'>About us</h1>

            <Link href={'/'}><House></House></Link>
        </div>
    )
}

    export default page