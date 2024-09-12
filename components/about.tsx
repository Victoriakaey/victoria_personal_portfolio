"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        I&apos;m a graduate student in Computer Science and Engineering at UC
        Santa Cruz, specializing in
        <span className="font-bold"> Artificial Intelligence</span>. I am
        currently seeking a
        <span className="font-bold"> Full Stack Engineer</span> or
        <span className="font-bold"> Machine Learning Engineer</span> internship
        for
        <span className="italic"> Summer 2025</span>.
      </p>
      <p className="mb-3">
        Although my primary focus is on Artificial Intelligence, I have a strong
        interest in Full Stack development. I have
        <span className="font-bold"> worked on various projects</span> to
        broaden my skill sets, and I want to
        <span className="italic">
          {" "}
          explore both fields further to identify where my strengths truly lie
        </span>
        .
      </p>
      <p>
        In my free time, I enjoy coding, writing, singing, reading, drawing,
        baking, cooking, playing video games, and exploring new hobbies.
        I&apos;m always open to learning new things and expanding my skills,
        both personally and professionally.
      </p>
    </motion.section>
  );
}

{
  /* <span className="italic">My favorite part of programming</span> is the
      problem-solving aspect. I <span className="underline">love</span> the
      feeling of finally figuring out a solution to a problem. My core stack
      is{" "}
      <span className="font-medium">
        React, Next.js, Node.js, and MongoDB
      </span>
      . I am also familiar with TypeScript and Prisma. I am always looking to
      learn new technologies. I am currently looking for a{" "}
      <span className="font-medium">full-time position</span> as a software
      developer. */
}
