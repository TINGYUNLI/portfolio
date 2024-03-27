"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { message } from "antd";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(true);

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

    setEmailSubmitted(false);

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
            className="cursor-pointer mt-1 ml-4 font-medium text-textColor"
            onClick={() => {
              navigator.clipboard.writeText("rita891013@gmail.com");
              message.success("Copied!");
            }}
          >
            rita891013@gmail.com
          </p>
        </div>

        <Link
          href="https://github.com/TINGYUNLI"
          className="flex mt-3 text-textColor"
        >
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
            className="flex justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {emailSubmitted && "Send Message"}
            {!emailSubmitted && "Sending..."}
            {!emailSubmitted && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-800"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
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
