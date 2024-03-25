"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { message } from "antd";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    // console.log(resData);

    if (response.status === 200) {
      // console.log("Message sent");
      setEmailSubmitted(true);
      message.success("Email sent successfully!");
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 mt-8 mb-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-textColor my-2 mb-5">
          Let&apos;s Connect
        </h5>

        <div className="flex">
          <a href="mailto:rita891013@gmail.com">
            <Image alt="mail icon" src={LinkedinIcon} width={28} />
          </a>
          <p
            id="email"
            className="cursor-pointer mt-1 ml-4 font-medium"
            onClick={() => {
              navigator.clipboard.writeText("rita891013@gmail.com");
              message.success("Copied!");
            }}
          >
            rita891013@gmail.com
          </p>
        </div>

        <Link href="https://github.com/TINGYUNLI" className="flex mt-3">
          <Image alt="github icon" src={GithubIcon} width={28} />
          <p className="mt-1 ml-4 font-medium underline">
            https://github.com/TINGYUNLI
          </p>
        </Link>

        <p className="text-black mt-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you !
        </p>

        {/* <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/TINGYUNLI">
            <Image alt="github icon" src={GithubIcon} width={32} />
          </Link>
          <a href="mailto:rita891013@gmail.com">
            <Image alt="mail icon" src={LinkedinIcon} width={32} />
          </a>
        </div> */}
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-textColor block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-bgColor  border border-[#33353F] placeholder-[#797c7f] text-textColor text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
            <label
              htmlFor="email"
              className="text-textColor block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-bgColor border border-[#33353F] placeholder-[#797c7f] text-textColor text-sm rounded-lg block w-full p-2.5"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-textColor block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-bgColor border border-[#33353F] placeholder-[#797c7f] text-textColor text-sm rounded-lg block w-full p-2.5"
              placeholder="Type Your Message Here."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {/* {emailSubmitted && (
            <p className="text-green-500 font-semibold text-sm mt-2">
              Email sent successfully!
            </p>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
