import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            services

            <Link href={'/services/web-dev'}>Web dev</Link>
        </div>
    )
}

export default page