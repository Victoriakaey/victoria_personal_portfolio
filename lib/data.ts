import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Img1 from "@/public/img1.png";
import Img2 from "@/public/img2.png";
import Img3 from "@/public/img3.png";
import Img4 from "@/public/img4.png";
import Img5 from "@/public/img5.png";

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
    title: "AI Pathways Research and Dev Lead",
    location: "Tech4Good Lab - Santa Cruz, CA",
    description:
      "Conducted several preliminary studies to gather user feedback and insights. Mentored and led a team of 10+ developers on AI integration in web development.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Prompt Engineering","LLMLingua/LongLLMLingua", "Pinecone", "OpenAI ChatCompletion API", "OpenAI Assistant API", "User Research", "Leadership"],
    date: "June 2023 - Present",
  },
  {
    title: "Coding Instructor at Code For Fun",
    location: "Code For Fun - Sunnyvale, CA",
    description:
      "Instructed over 5,000 students in programming, both in small and large group settings. Developed personalized learning plans to meet diverse student needs.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Public Speaking", "Game Development", "Web Development", "Mobile App Development", "Block Programming", "Python"],
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
      "Worked as an animal care volunteer providing compassionate hands-on care to dogs, cats, and rabbits, enriching their lives and preparing them for adoption into loving homes.",
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
      "Completed required coursework for a Computer Science degree before transferring to UC Santa Cruz.",
    icon: React.createElement(LuGraduationCap),
    tags: ["C++", "Java", "Python", "Assembly Language", "Physics", "Chemistry", "Pre-Calculus", "Calculus", "Discrete Mathematics"],
    date: "Apr 2016 - June 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Cat Memory Game",
    time: "Sep 2023",
    description:
      "A card flipping game with each card as three of my cats' portrait on it.",
    sideNotes: "This is the first website I developed. I created this project to learn React and web deployment. And as a proud cat mom, I couldn't resist showcasing my beloved cats and their adorable faces! :))",
    tags: [ "React", "TypeScript", "Material-UI", "emotion", "gsap"],
    imageUrl: Img1,
    projectUrl: "https://victoria-cat-memory-game.vercel.app/",
  },
  {
    title: "Pathways",
    time: "Apr 2024 - Present",
    description:
      "An AI-driven web app facilitating self-directed learning.",
    sideNotes: "This lab project aims to create a personalized learning pathway for motivated learners, helping them practice and enhance their self-directed learning skills.",
    tags: ["SolidJS", "TypeScript", "Vite", "Express", "OpenAI APIs", "Langchain", "Pinecone", "Firebase Firestore", "TailwindCSS", "RxJS"],
    imageUrl: Img2,
    projectUrl: null,
  },
  {
    title: "Tech Resume Tailor",
    time: "June 2024",
    description:
      "A GPT that helps users craft tailored technical resumes aligned with job descriptions, using advanced resume-writing techniques and strategies.",
    sideNotes: "I created this GPT to help with writing my resume since I don't know many industry professionals for feedback.  This GPT helps me write better tech resumes and customize them for different job applications.",
    tags: ["Prompt Engineering"],
    imageUrl: Img3,
    projectUrl: "https://chatgpt.com/g/g-A9KhEHv0v-tech-resume-tailor",
  },
  // {
  //   title: "Ripplet Info Website",
  //   time: "July 2024",
  //   description:
  //     "A information website for Ripplet, a community-initiated wellness platform for Chinese speakers across the globe.",
  //   sideNotes: "I created this website as a favor to my friend, who's passionate about Psychology, and want to give back to the society and the Chinese community. I resinate with Ripplet's goal and culture.",
  //   tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "React Icons"],
  //   imageUrl: Img5,
  //   projectUrl: "https://ripplet-info-website.vercel.app/",
  // },
  {
    title: "Pathways GPT",
    time: "July 2024",
    description:
      "A GPT that guides users through personalized learning journeys with a supportive, step-by-step approach, ensuring clarity and alignment with their goals.",
    sideNotes: "This GPT is created for the AI Pathways Team for speeding up the research process, specifically in the early stage of conducting the research study.",
    tags: ["Prompt Engineering"],
    imageUrl: Img4,
    projectUrl: "https://chatgpt.com/g/g-isRhwzkEL-pathways",
  },
  // {
  //   title: "Yi",
  //   time: "Apr 2024 - Present",
  //   description:
  //     "A SaaS web app offering robust financial and essential business management.",
  //   sideNotes: "I developed this app for my mom, don't want to disclose much here, but if you're really curious, you may email and ask me through the contact form below.",
  //   tags: ["React", "TypeScript", "Next.js", "Django and Django REST Framework", "PostgreSQL", "TailwindCSS", "Redux"],
  //   imageUrl: null,
  //   projectUrl: null,
  // },
  // {
  //   title: "PetWell",
  //   time: "May 2024 - Present",
  //   description:
  //     "A pet care mobile app for calorie tracking and health monitoring.",
  //   sideNotes: "Yes, another cat project. Because my baby Normie is gaining too many weight...and I don't want to have to calculate every time when I want to give her new treats or when I need to change her diet to see if it's okay to feed her or not.",
  //   tags: ["React Native", "Expo", "Django", "PostgreSQL", "Firebase", "i18next"],
  //   imageUrl: null,
  //   projectUrl: null,
  // },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "Java",
  "C/C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  
  // Frameworks and Libraries
  "React",
  "Next.js",
  "Solid.js",
  "Node.js",
  "Django",
  "Django REST Framework",
  "Redux",
  "RxJS",
  
  // Styling
  "Material UI",
  "Tailwind CSS",
  "Sass",
  "PostCSS",
  "Ant Design",
  "Shadcn/UI",
  "Radix UI",
  
  // Database
  "MongoDB",
  "PostgreSQL",
  "Pinecone",
  
  // Tools and Platforms
  "Git",
  "Vite",
  "ESLint",
  "Axios",
  "JWT",
  
  // Animations
  "Framer Motion",
  
  // APIs
  "OpenAI APIs",
  "Langchain",
  
  // Icons
  "React Icons"
] as const;