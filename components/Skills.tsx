import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {
  directionLeft?: boolean;
}

function Skills( {directionLeft} : Props) {
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
    className='h-screen flex relative flex-col text-center 
    md:text-left xl:flex-row  max-w-[700px] xl:px-10 min-h-screen
    justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24
        uppercase tracking-[20px]
        text-gray-500 text-2xl'>Skills</h3>

        <h3 className='uppercase absolute top-36 text-gray-500 text-sm tracking-[3px]'>
            Hover over a skill for current proficiency</h3>

            <div className='grid grid-cols-3 md:grid-cols-4 gap-5'>
               <Skill />

               <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-20 h-20 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\html-5.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>95%</p>
            </div>
        </div>
    </div>

    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\java-script.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>70%</p>
            </div>
        </div>
    </div>

    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\nodejs.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>50%</p>
            </div>
        </div>
    </div>


    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\react.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>50%</p>
            </div>
        </div>
    </div>
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\typescript.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>60%</p>
            </div>
        </div>
    </div>

    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\git.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>80%</p>
            </div>
        </div>
    </div>

    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\tailwind.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>75%</p>
            </div>
        </div>
    </div>
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\phython.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>65%</p>
            </div>
        </div>
    </div>
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\mongo-db.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>54%</p>
            </div>
        </div>
    </div>
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\postman.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>40%</p>
            </div>
        </div>
    </div>

    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\vs-code.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>85%</p>
            </div>
        </div>
    </div>

    {/* <div className='group relative flex cursor-pointer '>
        <motion.img
        initial ={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition ={{
                duration: 1
        }}
        whileInView ={{
            x: 0,
            opacity: 1
        }}
        className='rounded-full border
         border-gray-500 object-cover w-24 h-24 
         md:w-28 md:h-28 xl:w-32 xl:h-32 filter
         group-hover:grayscale transition duration-300
         ease-in-out'
        src="\static\css.png" alt="" />
        <div className='absolute opacity-0 group-hover:opacity-80
        transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl 
                items-center font-bold text-black opacity-100'>70%</p>
            </div>
        </div>
    </div> */}
            </div>
    </motion.div>
  )
}

export default Skills