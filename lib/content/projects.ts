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

import Siltpoke1 from "@/public/siltpoke-1.png";
import Siltpoke2 from "@/public/siltpoke-2.png";
import Siltpoke3 from "@/public/siltpoke-3.png";
import Troubadour1 from "@/public/troubadour.jpeg";

import type { Project } from "./types";

// Order is curated, not chronological — and it is also what decides which side
// each card's artwork sits on (odd cards right, even cards left; see project.tsx).
// One constraint rides on it: Troubadour must stay on an ODD index, or the crop
// flips and cuts Victoria out of her own team photo.
export const projects: readonly Project[] = [
  {
    slug: "siltpoke",
    images: [Siltpoke1, Siltpoke2, Siltpoke3],
    url: "https://siltpoke.com",
    copy: {
      en: {
        title: "Siltpoke",
        time: "Apr 2026 - Present",
        description:
          "A coding companion for CLI agents — a second mind that rides along while you build, catches what you missed, and remembers what you actually care about.",
        sideNotes:
          "Not five tools but one nervous system: code review, a code-map, memory and chat, all keyed to a single project. And it's a Tamagotchi — the pet is what makes it feel like a companion instead of a dashboard.",
        tags: ["Developer Tools", "Code Review", "Agent Memory", "TypeScript"],
      },
      cn: {
        title: "Siltpoke",
        time: "2026年4月 - 现在",
        description:
          "给 CLI agent 的编程搭子 —— 一个「第二个脑子」,在你写代码时一路跟着,接住你漏掉的东西,记住你真正在意什么。",
        sideNotes:
          "不是五个工具,是一套神经系统:代码审查、代码地图、记忆、对话,全部锚在同一个项目上。它同时还是个电子宠物 —— 有这只宠物,它才像个搭子,而不是一块仪表盘。",
        tags: ["开发者工具", "代码审查", "Agent 记忆", "TypeScript"],
      },
    },
  },
  {
    slug: "project-life-cycle",
    images: [],
    url: "https://github.com/Victoriakaey/project-life-cycle",
    copy: {
      en: {
        title: "Project Life Cycle",
        time: "Apr 2026 - Present",
        description:
          "Turns ad-hoc AI coding sessions into a repeatable, traceable workflow — one skill, any CLI agent, flagging when the roadmap and the real work drift apart.",
        sideNotes:
          "Built because the expensive part of coding with an agent isn't writing the code, it's remembering why the code is the way it is.",
        // Ordered so a scan reads as: what field → what category → how it ships
        // → what it's written in → what it actually solves. Which CLI agents it
        // runs in belongs in the README, not here.
        tags: [
          "Agent Harness",
          "Developer Tools",
          "Shell",
          "Context Engineering",
        ],
      },
      cn: {
        title: "Project Life Cycle",
        time: "2026年4月 - 现在",
        description:
          "把零散的 AI 编程过程变成可复用、可追溯的工作流 —— 一个 skill,任何 CLI agent 都能跑,还会标出路线图和实际做的事之间的偏离。",
        sideNotes:
          "做它是因为:和 agent 一起写代码,贵的不是写代码本身,是记住代码为什么长这样。",
        tags: ["Agent 工程", "开发者工具", "Shell", "上下文工程"],
      },
    },
  },
  {
    slug: "troubadour",
    images: [Troubadour1],
    url: "https://www.loom.com/share/b3fdb5659964492ea9e6181a94b4cbb0",
    copy: {
      en: {
        title: "Troubadour",
        time: "Mar 2026",
        description:
          "Won first place at the Llama Lounge Agentic Hackathon with a music agent that scores a game in real time, reading live state and generating music to match the emotion.",
        sideNotes:
          "My first hackathon. I showed up alone, spent the morning failing to find a team, and almost left at lunch.",
        tags: [
          "CrewAI",
          "Multi-agent Systems",
          "Python",
          "Music Generation",
          "Real-time",
        ],
      },
      cn: {
        title: "Troubadour",
        time: "2026年3月",
        description:
          "凭一个实时给游戏配乐的音乐 agent 拿下 Llama Lounge Agentic Hackathon 第一名 —— 读取实时状态,生成匹配当下情绪的音乐。",
        sideNotes:
          "我的第一个 hackathon。一个人去的,一上午都没找到队友,中午差点就走了。",
        tags: [
          "CrewAI",
          "多智能体系统",
          "Python",
          "音乐生成",
          "实时系统",
        ],
      },
    },
  },
  {
    slug: "slack-qna-bot",
    images: [],
    url: "https://github.com/Victoriakaey/slack-qna-bot",
    copy: {
      en: {
        title: "Slack Q&A Chatbot",
        time: "Apr 2026",
        description:
          "A Slack bot that answers natural-language questions about a company's database — a Critic decides when the evidence is enough, with citations.",
        sideNotes:
          "The pipeline is a LangGraph StateGraph, and the Critic can loop back for more sub-questions until it has enough evidence to answer the original one.",
        tags: [
          "LangGraph",
          "LangSmith",
          "Python",
          "Text-to-SQL",
          "Retrieval Evaluation",
        ],
      },
      cn: {
        title: "Slack Q&A Chatbot",
        time: "2026年4月",
        description:
          "一个 Slack 机器人,用自然语言回答关于公司数据库的问题 —— 由一个 Critic 判断证据够不够,答案都带引用。",
        sideNotes:
          "整条流水线是一个 LangGraph StateGraph,Critic 可以回头再生成子问题,直到证据足够回答最初那个问题为止。",
        tags: [
          "LangGraph",
          "LangSmith",
          "Python",
          "自然语言转 SQL",
          "检索评估",
        ],
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
    slug: "reflect",
    images: [],
    url: "https://github.com/Victoriakaey/reflect",
    copy: {
      en: {
        title: "Reflect",
        time: "Feb 2026",
        description:
          "A Claude Code skill for self-analysis — not a therapist but a structured mirror, tracking your behavioral patterns across sessions with clinical precision.",
        sideNotes:
          "It searches current research before making any clinical claim, and every note stays on your own machine.",
        tags: [
          "Personal Tools",
          "Agent Memory",
          "Prompt Engineering",
          "Local-first",
        ],
      },
      cn: {
        title: "Reflect",
        time: "2026年2月",
        description:
          "一个用来自我分析的 Claude Code skill —— 不是心理咨询师,是一面有结构的镜子,用临床级的精确度跨 session 追踪你的行为模式。",
        sideNotes:
          "任何临床判断出口之前,它都会先去查最新的研究;所有笔记只留在你自己的机器上。",
        tags: ["个人工具", "Agent 记忆", "提示词工程", "本地优先"],
      },
    },
  },
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
