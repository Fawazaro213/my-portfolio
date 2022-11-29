import { motion } from 'framer-motion'
import React from 'react'

const Projects = () => {
  return (
    <motion.div 
    initial ={{
      opacity: 0
  }}
  whileInView ={{
      opacity: 1
  }}
  transition ={{
      duration: 1.5
  }}
    className='h-screen relative flex overflow-hidden
    text-left flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24
        uppercase tracking-[20px]
        text-gray-500 text-2xl'>Projects</h3>

        <div
        className='relative w-full flex overflow-x-scroll
        overflow-y-hidden snap-x snap-mandatory z-20 
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2d858b]/80'>
               
            <div
            className="w-screen flex-shrink-0 snap-center
            flex flex-col space-y-5 items-center justify-center p-20
            md:p-44 h-screen"
            >
                  <motion.img
                    initial ={{
                      y: -100,
                      opacity: 0
                    }}
                    transition ={{ duration: 1.2 }}
                    whileInView ={{ opacity: 1, y: 0, }}
                    viewport ={{ once: true }}
                    className='w-70 h-60'
                     src="\static\youtube.png" alt="youtube web" />

                    <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                          <span className='underline decoration-[#2d858b]/50'>Case Study 1 of 10:</span> 
                          Youtube Clone</h4>

                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\html-5.png" alt="" />

        </div>

                          <p className='text-lg text-center md:text-left'>
                          made a clone of YouTube with html ,CSS and JavaScript  </p>
                    </div>
            </div>
        </div>

        <div className='w-full absolute 
        top-[30%] bg-[#2d858b]/10 left-0 h-[300px] -skew-y-12'>
        </div>
    </motion.div>
)}

export default Projects