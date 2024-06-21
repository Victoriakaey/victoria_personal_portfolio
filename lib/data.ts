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
    title: "CSE Master Program",
    location: "UC Santa Cruz - Santa Cruz, CA",
    description:
      "Focusing on Machine Learning and Artificial Intelligence. Expected to graduate by Sep 2025.",
    icon: React.createElement(LuGraduationCap),
    tags: [],
    date: "Sep 2024 - Present",
  },
  {
    title: "AI Pathways Research Lead",
    location: "Tech4Good Lab - Santa Cruz, CA",
    description:
      "Conducted several preliminary studies to gather user feedback and insights. Developed and designed the Pathways application.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Prompt Engineering","LLMLingua/LongLLMLingua","Pinecone","OpenAI ChatCompletion API", "OpenAI Assistant API", "SolidJS"],
    date: "June 2023 - Present",
  },
  {
    title: "Coding Instructor at Code For Fun",
    location: "Code For Fun - Sunnyvale, CA",
    description:
      "Taught coding lessons to diverse group of kids, ranging from elementary school children to adolescents.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Public Speaking","Game Development", "Web Development", "Block Programming", "Python"],
    date: "Feb 2023 - Dec 2023",
  },
  {
    title: "Graduated from University",
    location: "UC Santa Cruz - Santa Cruz, CA",
    description:
      "Earned Bachelor of Science in Computer Science and Engineering and Bachelor of Art in Psychology.",
    icon: React.createElement(LuGraduationCap),
    tags: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing", "Data Structure and Algorithm", "Computer Architecture", "Principle of Computer System Design", "Computer Graphics", "Statistics", "Developmental Psychology", "Learning and Memory"],
    date: "July 2020 - Dec 2022",
  },
  {
    title: "Animal Care Volunteer",
    location: "Humane Society at Silicon Valley - Sunnyvale, CA",
    description:
      "Volunteer in animal care roles providing compassionate hands-on care to dogs, cats, and rabbits, enriching their lives and preparing them for adoption into loving homes.",
    icon: React.createElement(LuGraduationCap),
    tags: ["Compassion and Empathy", "Responsibility and Reliability", "Time Management"],
    date: "June 2018 - June 2019",
  },
  {
    title: "Co-founder and president of Pop Music Club",
    location: "De Anza College - Cupertino, CA",
    description:
      "Founded a music club with 200+ members and has been the club president for two years. Managed 5+ bands in the club and organized club events such as annual concerts, club days, etc.",
    icon: React.createElement(LuGraduationCap),
    tags: ["Leadership", "Teamwork", "Communication", "Problem Solving", "Planning and organizing events"],
    date: "May 2017 - June 2020",
  },
  {
    title: "Graduated from Community College",
    location: "De Anza College - Cupertino, CA",
    description:
      "Completed required coursework for a Computer Science degree before transferring to UC Santa Cruz",
    icon: React.createElement(LuGraduationCap),
    tags: ["C++", "Python", "Assembly Language", "Physics", "Chemistry", "Pre-Calculus", "Calculus", "Discrete Mathematics"],
    date: "Apr 2016 - June 2020",
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
  "SolidJS",
  "Git",
  "Material UI",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
  "OpenAI API",
] as const;