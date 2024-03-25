"use client";

import Image from "next/image";
import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:pt-16 lg:pb-8">
      <div className="grid grid-cols-7 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 col-start-2 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-textColor mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Rita", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-secondarytext text-base font-medium sm:text-lg mb-6 lg:text-xl">
            Welcome to my Portfolio!
          </p>
          <div>
            <Link
              href="#contact"
              className="font-medium px-6 py-3 w-full sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-300 hover:bg-slate-200 text-textColor"
            >
              Contact Me
            </Link>
            <button className="px-1 py-1 w-3/5 sm:w-fit rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 hover:bg-slate-200 text-textColor mt-5">
              <span className="block bg-bgColor hover:bg-primary-400 rounded-full px-5 py-2">
                <a href="/resume-rita.pdf" download className="font-medium">
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full border border-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative hidden sm:block">
            <Image
              src="/heroImage.svg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
              alt="hero image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
