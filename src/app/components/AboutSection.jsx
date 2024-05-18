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
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Android Studio</li>
        <li>SQL</li>
        <li>Java</li>
        <li>Python</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li style={{ fontWeight: 600 }}>Master of Computing</li>
        <li style={{ listStyleType: 'none' }}>Australian National University</li>
        <li style={{ listStyleType: 'none' }}>Canberra, Australia</li>
        <br />
        <li style={{ fontWeight: 600 }}>Bachelor of Management</li>
        <li style={{ listStyleType: 'none' }}>Hunan Normal University</li>
        <li style={{ listStyleType: 'none' }}>Hunan, China</li>
      </ul>
    ),
  },
  {
    title: "Internships",
    id: "Internships",
    content: (
      <ul className="list-disc pl-2">
        <li style={{ fontWeight: 600 }}>Strategy Analyst</li>
        <li style={{ listStyleType: 'none' }}>ByteDance<br />(TikTok Parent Company)</li>
        <br />
        <li style={{ fontWeight: 600 }}>Livestreaming Operations</li>
        <li style={{ listStyleType: 'none' }}>NetEase</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. Interactive and responsive web applications. I have Working with HTML, CSS, JavaScript, Node.js, Express, MongoDB, Java, Python, SQL and Git. I am a fast learner and I am always looking to expand my knowledge and skills. I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Internships")}
              active={tab === "Internships"}
            >
              {" "}
              Internships{" "}
            </TabButton>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
