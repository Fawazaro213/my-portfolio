import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { type } from "os";
import { createClient } from "next-sanity";
import axios from "axios";

const Home = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2d858b]/80"
    >
      <Head>
        <title>Aro Fawaz</title>
        <meta name="title" content="Aro-okoya fawaz || @arofawaz123"/>
        <meta name="description" content="Hi! I'm Aro Fawaz.A computer science student. Self-taught programmer. I specialize in fullstack development. I love to build good products and service to help solve problems in the society. I consider myself a responsible and orderly person. Ready to lead a team because I was born to lead."/>
        <meta property="og:type" content="website"/>
        {/* <meta property="og:url" content=""/> */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Footer */}
      <div className="fixed bottom-1 w-20 h-15 right-2 md:bottom-3 md:right-5 cursor-pointer">
        <a href="#hero">
          <div className="flex justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
              cursor-pointer"
              src="/static/logo.png"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;


