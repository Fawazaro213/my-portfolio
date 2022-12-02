import { motion } from 'framer-motion'
import Link from 'next/link'
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
        overflow-y-hidden snap-x snap-mandatory z-20 pt-[10%]
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
                    className='w-70 h-60 sm:h-40'
                     src="\static\youtube.png" alt="youtube web" />

                    <div className='space-y-5 px-0 md:px-10'>
                        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                      <Link href={'https://github.com/Fawazaro213/youtube-clone'}>
                          <span className='underline decoration-[#2d858b]/50'>Case Study 1 of 5:</span> 
                      </Link>
                          Youtube Clone</h4>

                          <div className='flex flex-row space-x-1'>
                         <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\html-5.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\css.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\java-script.png" alt="" />

        </div>
                         </div>

                          <p className='text-lg text-center md:text-left'>
                          made a clone of YouTube with html ,CSS and JavaScript  </p>
                    </div>
            </div>
          
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
                    className='w-70 h-40'
                    src="\static\anime-nft.png" alt="AnimeNFT Market-place" />

                    <div className='space-y-5 px-0 md:px-10'>
                        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                      <Link href={'https://ebay-clone-p7nltqqwe-fawazaro213.vercel.app/'}>
                          <span className='underline decoration-[#2d858b]/50'>Case Study 2 of 5:</span> 
                    </Link>
                          AnimeNFT Market-place</h4>

                          <div className='flex flex-row space-x-1'>
                         <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\react.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\tailwind.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\typescript.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\java-script.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\css.png" alt="" />

        </div>
                         </div>

                          <p className='text-lg text-center md:text-left'>
                          made an AnimeNFT Market-place with Typescript, thrid-web, tailwind-css, JavaScript, Next-js, React</p>
                    </div>
            </div>


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
                    className='w-70 h-60 sm:40'
                     src="\static\quote.png" alt="Quote Web" />

                    <div className='space-y-5 px-0 md:px-10'>
                        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                          <Link href={'https://github.com/Fawazaro213/quote'}>
                          <span className='underline decoration-[#2d858b]/50'>Case Study 3 of 5:</span> 
                          </Link>
                          Quote Generator</h4>

                          <div className='flex flex-row space-x-1'>
                         <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\html-5.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\css.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\java-script.png" alt="" />

        </div>
                         </div>

                          <p className='text-lg text-center md:text-left'>
                          made a Quote Website with html ,CSS and JavaScript  </p>
                    </div>
            </div>

            <div
            className="flex-shrink-0 snap-center
            flex flex-col space-y-5 items-center justify-center p-44
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
                    className='max-w-40 h-60 sm:h-40'
                     src="\static\landing-page.png" alt="Product Landing Page" />

                    <div className='space-y-5 px-0 md:px-10'>
                        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                          <Link href={'https://github.com/Fawazaro213/project-landing-page-'}>
                          <span className='underline decoration-[#2d858b]/50'>Case Study 4 of 5:</span><br /> 
                          </Link>
                          Product Landing Page</h4>
                          <div className='flex flex-row space-x-1'>
                         <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\html-5.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\css.png" alt="" />

        </div>
                         </div>

                          <p className='text-lg text-center md:text-left'>
                          made a Product Landing Page with html and CSS</p>
                    </div>
            </div>

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
                     src="\static\nft.png" alt="NFT preview card" />

                    <div className='space-y-5 px-0 md:px-10 '>
                        <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                          <Link href={'https://github.com/Fawazaro213/NFT-preview-card'}>
                          <span className='underline decoration-[#2d858b]/50'>Case Study 5 of 5:</span> 
                          </Link>
                          NFT preview card</h4>

                         <div className='flex flex-row space-x-1'>
                         <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\html-5.png" alt="" />

        </div>
                          <div className='flex items-center space-x-2 justify-center'>
                            <img
                            className='h-10 w-10'
                            src="\static\css.png" alt="" />

        </div>
                         </div>

                          <p className='text-lg text-center md:text-left'>
                          made an NFT preview card with html and CSS</p>
                    </div>
            </div>
            </div>


        <div className='w-full absolute 
        top-[30%] bg-[#2d858b]/10 left-0 h-[300px] -skew-y-12'>
        </div>
    </motion.div>
)}

export default Projects