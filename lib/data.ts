import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { LuHelpingHand } from "react-icons/lu";
import { LuLightbulb } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import Img1 from "@/public/img1.png";
import Img2 from "@/public/img2.png";
import Img3 from "@/public/img3.png";
import Img4 from "@/public/img4.png";
// import Img5 from "@/public/img5.png";
import Img6 from "@/public/img6.png";
import Img7 from "@/public/img7.png";
import Img8 from "@/public/img8.png";
import Img9 from "@/public/img9.png";
import Img10 from "@/public/img10.png";
import Img11 from "@/public/img11.png";
import Img12 from "@/public/img12.png";
import Img13 from "@/public/img13.png";
import Img14 from "@/public/img14.png";
import Img15 from "@/public/img15.png";
import Img16 from "@/public/img16.png";

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
    title: "Graduate Student",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "Pursuing a Master's degree in Computer Science and Engineering, specializing in Artificial Intelligence.",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [],
    date: "Sep 2024 - Dec 2026 (Expected Graduation)",
  },
  {
    title: "Research & Dev Lead - AI Pathways Team",
    location: "Tech4Good Lab - Santa Cruz, CA",
    locationUrl: "https://tech4good.soe.ucsc.edu/",
    description: [
      "Led a team of 10+ developers in integrating AI into web development.", 
      "Conducted preliminary studies to gather user feedback and insights, driving improvements in the Pathways applications.", 
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "Prompt Engineering",
      "LLMLingua/LongLLMLingua", 
      "Pinecone", 
      "OpenAI ChatCompletion API", 
      "OpenAI Assistant API",
      "OpenAI Embeddings API", 
      "User Research", 
      "Leadership",
      "Mentorship"
    ],
    date: "June 2023 - Present",
  },
  {
    title: "Coding Instructor",
    location: "Code For Fun - Sunnyvale, CA",
    locationUrl: "https://codeforfun.com/",
    description:[
      "Instructed over 5,000 students in programming across small and large group settings.",
      "Developed personalized learning plans to cater to diverse student needs.",
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "Teaching",
      "Public Speaking", 
      "Game Development", 
      "Web Development", 
      "Mobile App Development", 
      "Block Programming", 
      "Python"
    ],
    date: "Feb 2023 - Dec 2023",
  },
  {
    title: "Undergraduate Student",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description:[
      "Earned Bachelor of Science in Computer Science and Engineering, and Bachelor of Art in Psychology.",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "Artificial Intelligence", 
      "Machine Learning", 
      "Natural Language Processing", 
      "Data Structure and Algorithm", 
      "Computer Architecture", 
      "Computer System Design", 
      "Computer Graphics", 
      "Statistics", 
      "Developmental Psychology", 
      "Learning and Memory"
    ],
    date: "July 2020 - Dec 2022",
  },
  {
    title: "Grader & Tutor for Python",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "Tutored and graded assignments for students over 8 consecutive quarters.",
      "Rehired consistently for outstanding performance and commitment to improving students' understanding of Python and their problem-solving skills.",
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "Tutoring", 
      "Python", 
      "Communication",
      "Problem Solving",
    ],
    date: "Apr 2021 - Dec 2022",
  },
  {
    title: "Animal Care Volunteer",
    location: "Humane Society at Silicon Valley - Sunnyvale, CA",
    locationUrl: "https://www.hssv.org/",
    description: [
      "Provided compassionate, hands-on care to dogs, cats, and rabbits, enriching their lives and preparing them for adoption into loving homes.",
      "Focused on ensuring the well-being and comfort of the animals.",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuHelpingHand),
    tags: [
      "Compassion and Empathy", 
      "Responsibility", 
      "Reliability", 
      "Time Management"
    ],
    date: "June 2018 - June 2019",
  },
  {
    title: "Co-founder & president - Pop Music Club",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "Co-founded and led a music club with over 200 members, serving as president for two years.",
      "Managed bands and organized events, including annual concerts and club days.",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuUser2),
    tags: [
      "Leadership", 
      "Teamwork", 
      "Communication", 
      "Problem Solving", 
      "Planning and organizing events"
    ],
    date: "May 2017 - June 2020",
  },
  {
    title: "Community College Student",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "Completed required coursework for a Computer Science degree before transferring to UC Santa Cruz. ",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "C++", 
      "Java", 
      "Python", 
      "Assembly Language", 
      "Physics", 
      "Chemistry", 
      "Pre-Calculus", 
      "Calculus", 
      "Discrete Mathematics"
    ],
    date: "Apr 2016 - June 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Pathways",
    time: "Apr 2024 - Present",
    description: "An AI-driven web application designed to facilitate self-directed learning.",
    sideNotes: "This lab project aims to create personalized learning pathways for motivated learners, helping them practice and enhance their self-directed learning skills.",
    tags: [
      "SolidJS", 
      "TypeScript", 
      "Vite", 
      "Express", 
      "OpenAI APIs", 
      "Langchain", 
      "Pinecone", 
      "Firebase Firestore"
    ],
    imageUrl: [Img2, Img10, Img11],
    projectUrl: null,
  },
  {
    title: "Pathways GPT",
    time: "July 2024",
    description: "A GPT designed to guide users through personalized learning journeys with a supportive, step-by-step approach, ensuring clarity and alignment with their goals.",
    sideNotes: "Created for the AI Pathways Team to expedite the research process, particularly during the early stages of conducting studies.",
    tags: [
      "Prompt Engineering"
    ],
    imageUrl: [Img4],
    projectUrl: "https://chatgpt.com/g/g-isRhwzkEL-pathways",
  },
  {
    title: "Yi",
    time: "Apr 2024 - Present",
    description:
      "A SaaS web application providing comprehensive financial and business management solutions.",
    sideNotes: "Developed to help my mom reduce her workload.",
    tags: [
      "React", 
      "TypeScript", 
      "Next.js", 
      "Django", 
      "Django REST Framework", 
      "PostgreSQL", 
      "Redux"
    ],
    imageUrl: [Img6, Img7, Img8, Img9],
    projectUrl: null,
  },
  {
    title: "Tech Resume Tailor",
    time: "June 2024",
    description:
      "A GPT designed to help users craft tailored technical resumes aligned with job descriptions, using advanced resume writing techniques and strategies.",
    sideNotes: "Created to assist with writing my resume, as I lack feedback from industry professionals. This GPT helps me write better tech resumes and customize them for different job applications.",
    tags: [
      "Prompt Engineering"
    ],
    imageUrl: [Img3],
    projectUrl: "https://chatgpt.com/g/g-A9KhEHv0v-tech-resume-tailor",
  },
  {
    title: "Ripplet Info Website",
    time: "July 2024",
    description:
      "An informational website for Ripplet, a community-initiated wellness platform for Chinese speakers across the globe.",
    sideNotes: "Created as a favor to a friend passionate about psychology, aiming to give back to society and the Chinese community. I resonate with Ripplet's goals and culture.",
    tags: [
      "React", 
      "TypeScript", 
      "Next.js", 
      "TailwindCSS", 
      "React Icons"
    ],
    imageUrl: [Img12, Img13, Img14],
    projectUrl: "https://ripplet-info-website.vercel.app/",
  },
  {
    title: "Cat Memory Game",
    time: "Sep 2023",
    description: "A card-flipping game featuring portraits of my three cats, Kitty, Bangbang and Normie.",
    sideNotes: "This is the first website I developed. I created this project to learn React and web deployment. As a proud cat mom, I couldn't resist showcasing my beloved cats and their adorable faces! :))",
    tags: [ 
      "React", 
      "TypeScript", 
      "Material-UI", 
      "emotion", 
      "gsap"
    ],
    imageUrl: [Img1, Img15, Img16],
    projectUrl: "https://victoria-cat-memory-game.vercel.app/",
  },
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
  "SolidJS",
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