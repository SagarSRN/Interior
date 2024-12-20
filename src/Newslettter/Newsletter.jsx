import React from 'react'
import {motion} from "framer-motion"
import { SlideLeft, SlideUp } from '../components/Animation/animate'

const Newsletter = () => {
  return (
    <div className='container=max-w-[350px] mx-auto'>
        <motion.h1
        variants={SlideLeft(0.5)}
        initial="initial"
        whileInView ="animate"
         className='text-3xl font-bold font-serif text-center'>Subscribe to your Newsletter

        </motion.h1>
        <motion.p
         variants={SlideLeft(0.8)}
         initial="initial"
         whileInView ="animate" 
        className=' max-w-[300px] mx-auto py-4 text-gray-500 text-sm text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis iure modi voluptas consectetur e
        </motion.p>
        {/* form here */}
       <div className='mt-10 flex justify-center'>
        <input type="text" placeholder='Enter Your Email'className='px-4 py-4 ring-1 ring-gray-300' />
        <motion.button 
        variants={SlideUp(0.8)}
        initial="initial"
        whileInView = "animate"
        className='bg-black text-white px-6 py-4 uppercase'>
            Subscribe
        </motion.button>
       </div>

    </div>
  )
}

export default Newsletter