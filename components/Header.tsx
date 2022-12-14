import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Header() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
      setHasMounted(true);
  }, []);
  if (!hasMounted) {
      return null;
  }

  return (
    <header className='sticky top-0 p-5 flex items-start 
    justify-between max-w-7xl mx-auto z-20 
    xl:items-center'>
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center'>
            {/* Social Icons */}
            {/* {socials.map((social) => (
              <SocialIcon
              key={social._id}
              url={social.url}
               fgColor='gray' bgColor='
              transparent'/>
            ))} */}

            <SocialIcon url='https://twitter.com/FawazAyo4' target={'_blank'} fgColor='gray' bgColor='
              transparent'/>
            <SocialIcon url='https://web.facebook.com/profile.php?id=100087080444446' target={'_blank'} fgColor='gray' bgColor='
              transparent'/>
            <SocialIcon url='https://github.com/Fawazaro213' target={'_blank'} fgColor='gray' bgColor='
              transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/fawaz-a-662a52202/' target={'_blank'} fgColor='gray' bgColor='
              transparent'/>
        </motion.div>

              <a href='#contact'> 
            <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.5
            }}
            className='flex items-center text-gray-300 cursor-pointer'>
              <SocialIcon url='#contact' network='email' fgColor='gray' bgColor='transparent' />
                <p className='hidden uppercase 
                md:inline-flex text-sm text-gray-400'>
                    Get in Touch
                    </p>
          </motion.div>
          </a>

    </header>
  )
}

export default Header