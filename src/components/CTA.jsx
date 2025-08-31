import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className='w-full p-20'>
            <div className='flex justify-center items-center flex-col'>
                <Link to="/contact">
                <button id='button' className='green-pink-gradient p-[1px] rounded-full cursor-pointer'>
                    <h2 className='bg-[#040414] rounded-full text-zinc-200 p-8 text-7xl orbitron-semibold'>Let's get started</h2>
                </button>
                </Link>
            </div>
        </section>
    )
}

export default CTA