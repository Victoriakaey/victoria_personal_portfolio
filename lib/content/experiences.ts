import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuHelpingHand, LuUser2 } from "react-icons/lu";

import type { Experience } from "./types";

export const experiences: readonly Experience[] = [
  {
    slug: "siltpoke-founder",
    locationUrl: "https://siltpoke.com/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Founder & AI System Engineer",
        location: "Siltpoke, Remote",
        date: "Apr 2026 - Present",
        description: [
          "Building Siltpoke, a coding companion for CLI agents that reviews each turn, maps the codebase, and remembers what broke — shipped publicly, running on five different CLI agents from one codebase.",
        ],
        // The paragraph is deliberately short, so the stack lives here instead.
        tags: [
          "TypeScript",
          "Bun",
          "Hono",
          "Claude Code",
          "LLM Evaluation",
          "Prompt Caching",
          "tree-sitter",
          "SQLite",
          "OpenTelemetry",
          "Local-first",
        ],
      },
      cn: {
        title: "创始人 & AI 系统工程师",
        location: "Siltpoke, 远程",
        date: "2026年4月 - 现在",
        description: [
          "在做 Siltpoke —— 一个给 CLI agent 用的编程搭子，会审查每一轮改动、绘制代码库结构、记住出过的问题。已公开发布，同一套代码跑通五个 CLI agent。",
        ],
        tags: [
          "TypeScript",
          "Bun",
          "Hono",
          "Claude Code",
          "大模型评估",
          "Prompt Caching",
          "tree-sitter",
          "SQLite",
          "OpenTelemetry",
          "本地优先",
        ],
      },
    },
  },
  {
    slug: "ripplet-founding-engineer",
    locationUrl: "https://ripplet-info-website.vercel.app/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Founding Engineer",
        location: "Ripplet - Remote",
        date: "Jun 2024 - Aug 2025",
        description: [
          "Ripplet is a mental health platform for immigrant and multicultural communities. As its sole engineer, I built the HIPAA-compliant AI platform therapists use to surface evidence-based guidance and track client progress, and the multilingual marketing site in front of it.",
        ],
        tags: [
          "Multi-agent Systems",
          "RAG",
          "HIPAA",
          "Django REST Framework",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "RabbitMQ",
          "Next.js",
          "i18next",
        ],
      },
      cn: {
        title: "创始工程师",
        location: "Ripplet - 远程",
        date: "2024年6月 - 2025年8月",
        description: [
          "Ripplet 涟结是一个面向移民与多元文化社群的心理健康平台。作为它唯一的工程师，我做出了治疗师用来获取循证指导、追踪来访者进展的 HIPAA 合规 AI 平台，以及它前面的多语言官网。",
        ],
        tags: [
          "多智能体系统",
          "检索增强生成 (RAG)",
          "HIPAA",
          "Django REST 框架",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "RabbitMQ",
          "Next.js",
          "i18next",
        ],
      },
    },
  },
  {
    slug: "bobatalks-mentor",
    locationUrl: "https://www.bobatalks.com/",
    icon: React.createElement(LuHelpingHand),
    copy: {
      en: {
        title: "Mentor - Remote",
        location: "BobaTalks",
        date: "Feb 2025 - Present",
        description: [
          "Support international students and newcomers to tech in figuring out their path, from deciding on graduate school to exploring career directions and navigating challenges abroad",
        ],
        tags: [
          "Mentorship",
          "International Students",
          "Career Guidance",
          "Graduate School Advice",
        ],
      },
      cn: {
        title: "导师",
        location: "BobaTalks",
        date: "2025年2月 - 现在",
        description: [
          "支持国际学生和科技新手规划职业路径，包括研究生院选择、职业方向探索及海外生活挑战应对。",
        ],
        tags: ["导师", "国际学生", "职业指导", "研究生院建议"],
      },
    },
  },
  {
    // NOTE: the old data.ts used a briefcase icon in English and a graduation
    // cap in Chinese for this one entry, so the icon changed when you toggled
    // language. Settled on the briefcase, matching the other UCSC tutor role.
    slug: "ucsc-deep-learning-tutor",
    locationUrl: "https://www.ucsc.edu/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Individual Tutor and Grader - Deep Learning Course",
        location: "UC Santa Cruz - Santa Cruz, CA",
        date: "Sep 2024 - Dec 2024",
        description: [
          "Held office hours twice weekly on deep learning — training and testing, loss functions, gradient descent, regularization — and graded assignments covering CNNs, RNNs, attention, and transformers.",
        ],
        tags: [
          "Deep Learning",
          "Neural Networks",
          "Machine Learning",
          "Reinforcement Learning",
          "Python Programming",
          "Communication",
        ],
      },
      cn: {
        title: "一对一课程辅导与作业评分 - 深度学习课程",
        location: "加州大学圣克鲁兹分校 - 圣克鲁兹, 加州",
        date: "2024年9月 - 2024年12月",
        description: [
          "每周两次深度学习答疑 —— 模型训练与测试、损失函数、梯度下降、正则化 —— 并批改涉及 CNN、RNN、注意力机制和 Transformer 的作业。",
        ],
        tags: [
          "深度学习",
          "神经网络",
          "机器学习",
          "强化学习",
          "Python 编程",
          "沟通能力",
        ],
      },
    },
  },
  {
    slug: "ucsc-graduate-student",
    locationUrl: "https://www.ucsc.edu/",
    icon: React.createElement(LuGraduationCap),
    copy: {
      en: {
        title: "Graduate Student",
        location: "UC Santa Cruz - Santa Cruz, CA",
        date: "Sep 2024 - Dec 2025",
        description: ["Master of Science in Computer Science and Engineering"],
        // Coursework, trimmed to what a reader would actually weigh.
        tags: [
          "Machine Learning",
          "Foundations of Deep Learning",
          "Projects in Artificial Intelligence",
          "Advanced Computer Security",
          "Analysis of Algorithms",
          "Formal Methods",
        ],
      },
      cn: {
        title: "研究生",
        location: "加州大学圣克鲁兹分校 - 圣克鲁兹, 加州",
        date: "2024年9月 - 2025年12月",
        description: ["攻读计算机科学与工程硕士学位"],
        tags: [
          "机器学习",
          "深度学习基础",
          "人工智能项目",
          "高级计算机安全",
          "算法分析",
          "形式化方法",
        ],
      },
    },
  },
  {
    slug: "tech4good-dev-lead",
    locationUrl: "https://tech4good.soe.ucsc.edu/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Full Stack Engineer & Dev Lead - AI Pathways Team",
        location: "Tech4Good Lab - Santa Cruz, CA",
        date: "June 2023 - Jan 2025",
        description: [
          "Led a cross-functional team of AI researchers, web developers, and designers to build Pathways, an AI-powered self-directed learning platform — refined through multiple user studies, including pilots with university students.",
        ],
        tags: [
          "Prompt Engineering",
          "LLMLingua",
          "Pinecone",
          "OpenAI APIs",
          "User Research",
          "Leadership",
        ],
      },
      cn: {
        title: "全栈工程师 & 开发负责人 - AI Pathways 团队",
        location: "Tech4Good 实验室 - 美国加州圣克鲁兹",
        date: "2023年6月 - 2025年1月",
        description: [
          "带领由 AI 研究员、网页开发者和设计师组成的跨职能团队，开发 Pathways —— 一个 AI 驱动的自主学习平台，并经过多轮用户研究打磨，包括在大学生群体中的试点。",
        ],
        tags: [
          "提示词工程",
          "LLMLingua",
          "Pinecone",
          "OpenAI APIs",
          "用户研究",
          "领导力",
        ],
      },
    },
  },
  {
    slug: "code-for-fun-instructor",
    locationUrl: "https://codeforfun.com/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Coding Instructor",
        location: "Code For Fun - Sunnyvale, CA",
        date: "Feb 2023 - Feb 2024",
        description: [
          "Taught K–12 students programming fundamentals in classes ranging from 1 student to 300, and developed project-based curricula spanning game development, robotics, and web and mobile apps.",
        ],
        tags: [
          "Teaching",
          "Public Speaking",
          "Curriculum Design",
          "Python",
          "JavaScript",
          "Lua (Roblox)",
          "Scratch",
        ],
      },
      cn: {
        title: "编程讲师",
        location: "Code For Fun - 美国加州森尼韦尔",
        date: "2023年2月 - 2024年2月",
        description: [
          "教授 K–12 学生编程基础，班级规模从 1 人到 300 人；并设计基于项目的课程，涵盖游戏开发、机器人开发，以及网页与移动应用开发。",
        ],
        tags: [
          "教学",
          "公众演讲",
          "课程设计",
          "Python",
          "JavaScript",
          "Lua (Roblox)",
          "Scratch",
        ],
      },
    },
  },
  {
    slug: "ucsc-undergraduate-student",
    locationUrl: "https://www.ucsc.edu/",
    icon: React.createElement(LuGraduationCap),
    copy: {
      en: {
        title: "Undergraduate Student",
        location: "UC Santa Cruz - Santa Cruz, CA",
        date: "July 2020 - Dec 2022",
        description: [
          "Bachelor of Science in Computer Science and Engineering, and Bachelor of Arts in Psychology",
        ],
        // Two degrees, so both sides are represented rather than every course.
        tags: [
          "Artificial Intelligence",
          "Applied Machine Learning",
          "Natural Language Processing",
          "Data Structures and Algorithms",
          "Computer Architecture",
          "Abnormal Psychology",
          "Human Learning and Memory",
          "Research Methods in Psychology",
        ],
      },
      cn: {
        title: "本科生",
        location: "UC Santa Cruz - Santa Cruz, CA",
        date: "2020年7月 - 2022年12月",
        description: [
          "计算机科学与工程理学学士 (B.S.)，以及心理学文学学士 (B.A.)",
        ],
        tags: [
          "人工智能",
          "应用机器学习",
          "自然语言处理",
          "数据结构与算法",
          "计算机架构",
          "异常心理学",
          "人类学习与记忆",
          "心理学研究方法",
        ],
      },
    },
  },
  {
    slug: "ucsc-python-grader",
    locationUrl: "https://www.ucsc.edu/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Grader & Tutor for Python",
        location: "UC Santa Cruz - Santa Cruz, CA",
        date: "Apr 2021 - Dec 2022",
        description: [
          "Graded Python assignments with automated scripts and helped students debug during office hours. Rehired by the same professor for eight consecutive quarters.",
        ],
        tags: ["Tutoring", "Python", "Communication", "Problem Solving"],
      },
      cn: {
        title: "Python 课程评分员与辅导员",
        location: "加州大学圣克鲁兹分校 - 美国加州圣克鲁兹",
        date: "2021年4月 - 2022年12月",
        description: [
          "用自动化脚本批改 Python 作业，并在答疑时间帮学生调试代码。连续八个学期被同一位教授再次聘用。",
        ],
        tags: ["课程辅导", "Python", "沟通能力", "问题解决"],
      },
    },
  },
  {
    slug: "wayops-backend-intern",
    locationUrl: "https://wayops.eu/",
    icon: React.createElement(CgWorkAlt),
    copy: {
      en: {
        title: "Backend Developer Intern",
        location: "WayOps - Remote",
        date: "Jul 2021 - Aug 2021",
        description: [
          "Reorganized the datasets behind a smart parking management system so it could serve real-time availability, improving query speed and how far the database could scale.",
        ],
        tags: [
          "SQL",
          "PostgreSQL",
          "Data Modeling",
          "Query Optimization",
          "Azure Data Studio",
        ],
      },
      cn: {
        title: "后端开发实习生",
        location: "WayOps - 远程",
        date: "2021年7月 - 2021年8月",
        description: [
          "重组智能停车管理系统背后的数据集，让它能支撑实时车位查询，同时提升了查询速度和数据库能扩展的规模。",
        ],
        tags: [
          "SQL",
          "PostgreSQL",
          "数据建模",
          "查询优化",
          "Azure Data Studio",
        ],
      },
    },
  },
  {
    slug: "hssv-animal-care-volunteer",
    locationUrl: "https://www.hssv.org/",
    icon: React.createElement(LuHelpingHand),
    copy: {
      en: {
        title: "Animal Care Volunteer",
        location: "Humane Society at Silicon Valley - Sunnyvale, CA",
        date: "June 2018 - June 2019",
        description: [
          "Provided hands-on care to dogs, cats, and rabbits — looking after their well-being and comfort day to day, and preparing them for adoption into loving homes.",
        ],
        tags: [
          "Compassion and Empathy",
          "Responsibility",
          "Reliability",
          "Time Management",
        ],
      },
      cn: {
        title: "动物领养中心志愿者",
        location: "Humane Society at Silicon Valley - Sunnyvale, CA",
        date: "2018年6月 - 2019年6月",
        description: [
          "照料收容所里的狗、猫和兔子 —— 日常照看它们的健康与舒适，并帮它们做好被领养进新家的准备。",
        ],
        tags: ["同情心和同理心", "责任心", "可靠性", "时间管理能力"],
      },
    },
  },
  {
    slug: "de-anza-pop-music-club",
    locationUrl: "https://www.deanza.edu/",
    icon: React.createElement(LuUser2),
    copy: {
      en: {
        title: "Co-founder & President - Pop Music Club",
        location: "De Anza College - Cupertino, CA",
        date: "May 2017 - June 2020",
        description: [
          "Co-founded a music club that grew past 200 members and served as its president for two years, managing the bands and organizing events including the annual concerts and club days.",
        ],
        tags: [
          "Leadership",
          "Teamwork",
          "Communication",
          "Problem Solving",
          "Planning and organizing events",
        ],
      },
      cn: {
        title: "社团创始人兼主席 - Pop Music Club",
        location: "De Anza College - Cupertino, CA",
        date: "2017年5月 - 2020年6月",
        description: [
          "与他人共同创立了一个成员超过 200 人的音乐社团，并担任主席两年，负责管理乐队和组织活动，包括年度音乐会和社团日。",
        ],
        tags: ["领导力", "团队合作", "沟通能力", "解决问题能力", "规划和组织活动"],
      },
    },
  },
  {
    slug: "de-anza-cpp-ta",
    locationUrl: "https://www.deanza.edu/",
    icon: React.createElement(LuHelpingHand),
    copy: {
      en: {
        title:
          "Teaching Assistant - C++ Programming Courses (Beginning to Advanced)",
        location: "De Anza College - Cupertino, CA",
        date: "Apr 2018 - June 2019",
        description: [
          "Assisted in teaching C++ programming courses from beginner to advanced level, holding office hours for coding problems and concepts, and grading assignments with written feedback.",
        ],
        tags: ["Teaching", "C++", "Student Support"],
      },
      cn: {
        title: "教学助理 - C++ 编程课程（初级到高级）",
        location: "De Anza 学院 - 美国加州库比蒂诺",
        date: "2018年4月 - 2019年6月",
        description: [
          "协助教授从入门到高级的 C++ 编程课程，在答疑时间帮助学生解决编程问题、理解相关概念，并批改作业、给出书面反馈。",
        ],
        tags: ["教学", "C++", "学生支持"],
      },
    },
  },
  {
    slug: "de-anza-cis-lab-tutor",
    locationUrl: "https://www.deanza.edu/",
    icon: React.createElement(LuHelpingHand),
    copy: {
      en: {
        title: "CIS Lab Tutor",
        location: "De Anza College - Cupertino, CA",
        date: "Apr 2018 - June 2019",
        description: [
          "Tutored Computer Information Systems labs, and worked with instructors to find where students kept getting stuck and change how those topics were taught.",
        ],
        tags: ["Teaching", "Debugging", "Curriculum Feedback"],
      },
      cn: {
        title: "CIS 实验室辅导员",
        location: "De Anza 学院 - 美国加州库比蒂诺",
        date: "2018年4月 - 2019年6月",
        description: [
          "担任计算机信息系统 (CIS) 课程的实验室辅导员，并与授课教师一起找出学生反复卡住的地方，调整这些内容的讲法。",
        ],
        tags: ["教学", "代码调试", "课程反馈"],
      },
    },
  },
  {
    slug: "de-anza-student",
    locationUrl: "https://www.deanza.edu/",
    icon: React.createElement(LuGraduationCap),
    copy: {
      en: {
        title: "Community College Student",
        location: "De Anza College - Cupertino, CA",
        date: "Apr 2016 - June 2020",
        description: [
          "Completed required coursework for a Computer Science degree before transferring to UC Santa Cruz",
        ],
        tags: [
          "C++",
          "Java",
          "Python",
          "Assembly Language",
          "Calculus",
          "Discrete Mathematics",
        ],
      },
      cn: {
        title: "社区大学学生",
        location: "De Anza College - Cupertino, CA",
        date: "2016年4月 - 2020年6月",
        description: ["在转学之前完成了计算机科学学位所需的课程。"],
        tags: ["C++", "Java", "Python", "汇编语言", "微积分", "离散数学"],
      },
    },
  },
];
