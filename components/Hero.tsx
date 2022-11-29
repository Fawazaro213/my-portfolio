import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: [`<TheGuyWhoLovesToCode/>`, "</>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 
      items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32
         mx-auto object-cover"
        src= "/static/profile.jpg"
        alt="My profile"
      />

      <div className="z-20">
        <h2
          className="
            text-sm uppercase text-gray-500
            pb-2 tracking-[12px]
            "
        >
          Software Developer
        </h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            Hi, My Name is Aro Fawaz. <br /> {text}
          </span>
          <Cursor cursorColor="#2d858b" />
        </h1>

        <div className="pt-5 max-w-7xl">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
