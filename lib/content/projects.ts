import CatMemoryGame1 from "@/public/cat-memory-game-1.png";
import CatMemoryGame2 from "@/public/cat-memory-game-2.png";
import CatMemoryGame3 from "@/public/cat-memory-game-3.png";
import Pathways1 from "@/public/pathways-1.png";
import Pathways2 from "@/public/pathways-2.png";
import Pathways3 from "@/public/pathways-3.png";
import PathwaysGpt1 from "@/public/pathways-gpt-1.png";
import Ripplet1 from "@/public/ripplet-1.png";
import Ripplet2 from "@/public/ripplet-2.png";
import Ripplet3 from "@/public/ripplet-3.png";
import TechResumeTailor1 from "@/public/tech-resume-tailor-1.png";
import Yi1 from "@/public/yi-1.png";
import Yi2 from "@/public/yi-2.png";
import Yi3 from "@/public/yi-3.png";
import Yi4 from "@/public/yi-4.png";

import type { Project } from "./types";

export const projects: readonly Project[] = [
  {
    slug: "pathways",
    images: [Pathways1, Pathways2, Pathways3],
    url: null,
    copy: {
      en: {
        title: "Pathways",
        time: "Apr 2024 - Jan 2025",
        description:
          "An AI-driven web application designed to facilitate self-directed learning.",
        sideNotes:
          "This lab project aims to create personalized learning pathways for motivated learners, helping them practice and enhance their self-directed learning skills.",
        tags: [
          "SolidJS",
          "TypeScript",
          "Vite",
          "Express",
          "OpenAI APIs",
          "Langchain",
          "Pinecone",
          "Firestore",
        ],
      },
      cn: {
        title: "Pathways",
        time: "2024年4月 - 2025年1月",
        description: "一个AI驱动的网络应用程序，旨在帮助用户自学任何一个领域的知识。",
        sideNotes:
          "这个实验室项目旨在为有动力的自学者创建个性化的学习路径，帮助他们练习和提高自学技能。",
        tags: [
          "SolidJS",
          "TypeScript",
          "Vite",
          "Express",
          "OpenAI APIs",
          "Langchain",
          "Pinecone",
          "Firestore",
        ],
      },
    },
  },
  {
    slug: "pathways-gpt",
    images: [PathwaysGpt1],
    url: "https://chatgpt.com/g/g-isRhwzkEL-pathways",
    copy: {
      en: {
        title: "Pathways GPT",
        time: "July 2024",
        description:
          "A GPT designed to guide users through personalized learning journeys with a supportive, step-by-step approach, ensuring clarity and alignment with their goals.",
        sideNotes:
          "Created for the AI Pathways Team to expedite the research process, particularly during the early stages of conducting studies.",
        tags: ["Prompt Engineering"],
      },
      cn: {
        title: "Pathways GPT",
        time: "2024年7月",
        description:
          "一个OpenAI GPT，旨在通过支持性的、逐步的方法引导用户完成个性化的学习旅程，确保清晰和与他们的目标保持一致。",
        sideNotes: "为AI Pathways团队创建，以加速研究过程，特别是在研究初期阶段。",
        tags: ["提示词工程"],
      },
    },
  },
  {
    slug: "yi",
    images: [Yi1, Yi2, Yi3, Yi4],
    url: null,
    copy: {
      en: {
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
          "Redux",
        ],
      },
      cn: {
        title: "易",
        time: "2024年4月 - 现在",
        description: "一个SaaS网络应用程序，提供全面的财务和业务管理解决方案。",
        sideNotes: "开发帮助我的妈妈减少工作量。",
        tags: [
          "React",
          "TypeScript",
          "Next.js",
          "Django",
          "Django REST Framework",
          "PostgreSQL",
          "Redux",
        ],
      },
    },
  },
  {
    slug: "tech-resume-tailor",
    images: [TechResumeTailor1],
    url: "https://chatgpt.com/g/g-A9KhEHv0v-tech-resume-tailor",
    copy: {
      en: {
        title: "Tech Resume Tailor",
        time: "June 2024",
        description:
          "A GPT designed to help users craft tailored technical resumes aligned with job descriptions, using advanced resume writing techniques and strategies.",
        sideNotes:
          "Created to assist with writing my resume, as I lack feedback from industry professionals. This GPT helps me write better tech resumes and customize them for different job applications.",
        tags: ["Prompt Engineering"],
      },
      cn: {
        title: "技术简历定制GPT",
        time: "2024年6月",
        description:
          "一个OpenAI GPT，旨在帮助用户使用先进的简历写作技巧和策略，根据职位描述撰写量身定制的技术简历。",
        sideNotes:
          "创建帮助我写简历，因为我缺乏行业专业人士的反馈。这个GPT帮助我写更好的技术简历，并根据不同的工作申请进行定制。",
        tags: ["提示词工程"],
      },
    },
  },
  {
    slug: "ripplet-info-website",
    images: [Ripplet1, Ripplet2, Ripplet3],
    url: "https://ripplet-info-website.vercel.app/",
    copy: {
      en: {
        title: "Ripplet Info Website",
        time: "July 2024",
        description:
          "An informational website for Ripplet, a community-initiated wellness platform for Chinese speakers across the globe.",
        sideNotes:
          "Created as a favor to a friend passionate about psychology, aiming to give back to society and the Chinese community. I resonate with Ripplet's goals and culture.",
        tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "React Icons"],
      },
      cn: {
        title: "Ripplet信息网站",
        time: "2024年7月",
        description:
          "一个信息网站，为Ripplet，一个面向全球华人的社区发起的身心健康平台。",
        sideNotes:
          "创建为朋友的热情所做，旨在回馈社会和华人社区。我认同Ripplet的目标和文化。",
        tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "React Icons"],
      },
    },
  },
  {
    slug: "cat-memory-game",
    images: [CatMemoryGame1, CatMemoryGame2, CatMemoryGame3],
    url: "https://victoria-cat-memory-game.vercel.app/",
    copy: {
      en: {
        title: "Cat Memory Game",
        time: "Sep 2023",
        description:
          "A card-flipping game featuring portraits of my three cats, Kitty, Bangbang and Normie.",
        sideNotes:
          "This is the first website I developed. I created this project to learn React and web deployment. As a proud cat mom, I couldn't resist showcasing my beloved cats and their adorable faces! :))",
        tags: ["React", "TypeScript", "Material-UI", "emotion", "GSAP"],
      },
      cn: {
        title: "猫咪记忆卡牌游戏",
        time: "2023年9月",
        description:
          "一个以我的三只猫，Kitty, Bangbang和Normie的肖像为牌面的卡牌翻转游戏。",
        sideNotes:
          "这是我开发的第一个网站。我创建了这个项目来学习React和网页部署。作为一个骄傲的猫妈妈，我无法抗拒展示我心爱的猫和它们可爱的脸！:))",
        tags: ["React", "TypeScript", "Material-UI", "emotion", "GSAP"],
      },
    },
  },
  // PetWell — a pet care mobile app for calorie tracking and health monitoring.
  // Parked until there are screenshots to show.
  // Tags: React Native, Expo, Django, PostgreSQL, Firebase, i18next
];
