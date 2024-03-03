import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Img1 from "@/public/img1.png";
import Img2 from "@/public/img2.png";
import Img3 from "@/public/img3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from UC Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "Earned Computer Science and Engineering, B.S. and Psychology B.A. degree.",
    icon: React.createElement(LuGraduationCap),
    tags: ["Artificial Intelligence", "Machine Learning", "Statistics", "Natural Language Processing", "Developmental Psychology", "Learning and Memory"],
    date: "2022",
  },
  {
    title: "Coding Instructor at Code For Fun",
    location: "Sunnyvale, CA",
    description:
      "Taught coding lessons to diverse group of kids, ranging from elementary school children to adolescents.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Game Development", "Web Development", "Block Programming", "Python"],
    date: "2023",
  },
  {
    title: "AI Pathways Research Lead",
    location: "Santa Cruz, CA",
    description:
      "Conducted several preliminary studies to gather user feedback and insights. Developed and designed the Pathways application.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Prompt Engineering","LLMLingua/LongLLMLingua","Pinecone","OpenAI ChatCompletion API", "OpenAI Assistant API"],
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Cat Memory Game",
    description:
      "A card flipping game with each card as three of my cat's portrait on it.",
    tags: ["React", "Node.js", "Material-UI", "emotion", "gsap"],
    imageUrl: Img1,
    projectUrl: "https://github.com/Victoriakaey/Cat-Memory-Game"
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: Img2,
  //   projectUrl: "https://www.google.com/"
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: Img3,
  //   projectUrl: "https://www.google.com/"
  // },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C/C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Material UI",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
  "OpenAI API",
] as const;