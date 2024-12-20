import React from 'react'
import Banner1 from '../../assets/Banner1.jpg'
import {motion} from "framer-motion"
import { SlideUp , SlideLeft } from '../Animation/animate'

const Banner = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* image section */}
        <div className='flex justify-center items-center'>
          <motion.img 
          initial={{x:100, opacity:0}}
          animate= {{x:0, opacity:100}}
          transition={{duration:0.2, delay:0.2}}
          whileInView="animate"
            src={Banner1} 
            alt="Banner" 
            className='w-[90%] md:w-[320px] xl:w-full' 
          />
        </div>
        {/* text section */}
        <div className='space-y-4 flex justify-center flex-col'>
          <motion.h1
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
           className='text-3xl font-bold'>
            When you have a client that has a good budget as their expectations, then consider yourself a blessed architect.
          </motion.h1>
          <motion.p
           variants={SlideUp(0.6)}
           initial="initial"
           whileInView="animate" 
          className='text-gray-500 text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eligendi mollitia possimus nostrum repellat, earum, quisquam fuga quidem ex ipsa error sint.
          </motion.p>
          <div>
            <motion.button
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
             className='primary-btn'>Discover Now</motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
