import React from 'react'
import banner3 from '../../assets/Banner3.avif'
import {motion} from "framer-motion"
import { SlideLeft, SlideUp } from '../Animation/animate'

const Banner3 = () => {
  return (
    <div className='container'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* image section */}
      <div className='flex justify-center items-center'>
        <motion.img 
        variants={SlideLeft(0.8)}
        initial= {{x:100, opacity:0}}
        animate={{x:100, opacity:0}}
          src={banner3} 
          alt="Banner" 
          className='w-[90%] md:w-[320px] xl:w-full' 
        />
      </div>
      {/* text section */}
      <div className='space-y-4 flex justify-center flex-col'>
        <motion.h1
       variants={SlideUp(0.4)}
       initial="initial"
       whileInView= "animate"
         className='text-3xl font-bold'>
        Designs that make an impact, professionally delivered
        </motion.h1>
        <motion.p
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView= "animate"
         className='text-gray-500 text-sm leading-7'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eligendi mollitia possimus nostrum repellat, earum, quisquam fuga quidem ex ipsa error sint.
        </motion.p>
        <div className='flex gap-3 justify-center'>
          <div className='max-w-[80px] space-y-2'>
            <p className='text-3xl font-bold font-serif'>15</p>
            <p className='text-gray-500 text-sm'>Year of Experience</p>
          </div>
          <div className='max-w-[80px] space-y-2'>
            <p className='text-3xl font-bold font-serif'>500+</p>
            <p className='text-gray-500 text-sm'>Happy Clients</p>
          </div>
          <div className='max-w-[80px] space-y-2'>
            <p className='text-3xl font-bold font-serif'>34</p>
            <p className='text-gray-500 text-sm'>Award Gained</p>
            <div className='space-y-4 flex justify-center w-10'>
          <motion.button
          variants={SlideUp(0.8)}
          initial="initial"
          whileInView="animate"
           className='primary-btn uppercase bg-black text-white hover:shadow-[5px_5px_0px_0px_#6c6c6c] '>
            Contact us
          </motion.button>
          
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner3