"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="pb-2">React.js, Next.js</li>
        <li className="pb-2">JavaScript, TypeScript</li>
        <li className="pb-2">Node.js, Express</li>
        <li className="pb-2">MongoDB, PostgreSQL, MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National Central University,</li>
        <p className="font-medium">Master of Network Learning Technology</p>
        <li className="mt-3">National Central University,</li>
        <p className="font-medium"> Bachelor of Business Administration</p>
        {/* <li>
          Master of Network Learning Technology, National Central University
        </li>
        <li>National Central University</li> */}
      </ul>
    ),
  },
  {
    title: "Personal Info",
    id: "personal",
    content: (
      <ul className="list-disc pl-2">
        <li className="pb-2">李庭妘 Ting-yun Li </li>
        <li className="pb-2">rita891013@gmail.com</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-textColor pt-14 lg:mb-6" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="aboutImage.svg"
          width={500}
          height={500}
          alt="image"
          className="mb-10 sm:mb-1"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-textColor mb-4">About Me</h2>
          <p className="text-base lg:text-md">
            I am passionate about learning and maintaining an open attitude
            towards new technologies and tools to continuously improve my
            skills. Eager to leverage my strengths in a challenging environment,
            I strive to achieve both personal and team goals.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("personal")}
              active={tab === "personal"}
            >
              Personal Info
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
