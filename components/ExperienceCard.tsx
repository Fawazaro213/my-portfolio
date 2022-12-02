import { motion } from 'framer-motion'
import React from 'react'

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center
    space-y-7 flex-shrink-0 h-30 w-[400px] md:w-[600px] 
    lg:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden
    '>
        <motion.img
        initial ={{
            y: -100,
            opacity: 0
        }}
        transition ={{
            duration: 1.2
        }}
        whileInView = {{
            opacity: 1,
            y: 0
        }}
        viewport = {{
            once: true
        }}
        className='w-20 h-20 m-0
        xl:w-[200px] xl:h-[200px] object-cover object-top
        ' src="\static\gbodo.jpg" alt="" 
        />

        <div className='px-5 md:px-10'>
            <h4 className='text-4xl font-light'>Gbodo Cares</h4>
            <p className='font-bold text-2xl mt-1'>Web Instructor</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className="h-10 rounded-full"
                src= "\static\html-5.png"
                />
                <img 
                className="h-10 rounded-full"
                src= "\static\css.png"
                />
                <img 
                className="h-10 rounded-full"
                src= "\static\java-script.png"
                />
            </div>
            <p className='uppercase py-3 text-gray-300'>
                {
                new Date(20/1/2020).toDateString()} - {" "} {new Date(1/7/2022).toDateString()}
                </p>
            <ul className='list-disc space-y-4 ml-5 text-lg h-30 overflow-y-scroll
            scrollbar-thin scrollbar-track-black scrollbar-thumb-[#2d858b]'>
                    <li>Developed and implemented engaging curriculum aligned with student learning objectives and in adherence with state and district requirements.Developed and implemented engaging curriculum aligned with student learning objectives and in adherence to state and district requirements.</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard