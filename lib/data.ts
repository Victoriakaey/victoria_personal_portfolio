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
import { title } from "process";

export const cn_links = [
  {
    name: "首页",
    hash: "#home",
  },
  {
    name: "关于我",
    hash: "#about",
  },
  {
    name: "项目",
    hash: "#projects",
  },
  {
    name: "技能",
    hash: "#skills",
  },
  {
    name: "经验",
    hash: "#experience",
  },
  {
    name: "联系我",
    hash: "#contact",
  },
];

export const en_links = [
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

export const cn_experiencesTitle = "我的经验";
export const en_experiencesTitle = "My Experience";

export const cn_experiencesData = [
  {
    title: "创始工程师",
    location: "Ripplet - 远程",
    locationUrl: "https://ripplet-info-website.vercel.app/",
    description: [
      "Ripplet 是一个讲述与疗愈平台，通过播客、表达性艺术和社区主导的叙事，提升移民、黑人、土著及有色人种（BIPOC）社群以及跨文化群体的声音",
      // "作为唯一的创始工程师，跨越研究、产品与工程环节，将使命转化为数字化体验与治疗师支持工具。",
      "开展用户访谈、竞品分析和产品研究，以识别关键痛点并优化解决方案",
      "设计并开发公司官网，实现响应式且用户友好的界面",
      "构建了一个治疗师支持平台原型，集成 AI 驱动的聊天机器人与交互式仪表盘，实现安全的会话记录、循证指导和进度追踪"
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "美国健康保险可携性与责任法案 (HIPAA)", 
      "多智能体系统", 
      "Ollama", 
      "OpenAI API", 
      "Next.js", 
      "Google Gemini", 
      "Anthropic Claude", 
      "LlamaIndex", 
      "Hugging Face 产品",
      "LangChain",
      "Redux", 
      "Node.js", 
      "提示工程 (Prompt Engineering)", 
      "软件开发", 
      "React.js", 
      "Python 编程语言", 
      "TailwindCSS", 
      "PostgreSQL", 
      "Django REST 框架",
      "检索增强生成 (RAG)"
    ],
    date: "2024年6月 - 2025年8月"
  },
  {
    title: "导师",
    location: "BobaTalks",
    locationUrl: "https://www.bobatalks.com/",
    description: [
      "支持国际学生和科技新手规划职业路径，包括研究生院选择、职业方向探索及海外生活挑战应对。",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuHelpingHand),
    tags: ["导师", "国际学生", "职业指导", "研究生院建议"],
    date: "2025年2月 - 现在",
  },
  {
    title: "一对一课程辅导与作业评分 - 深度学习课程",
    location: "加州大学圣克鲁兹分校 - 圣克鲁兹, 加州",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "每周两次线上与线下答疑，讲解深度学习核心概念，并指导学生应用机器学习原理，包括模型训练/测试、损失函数、梯度下降以及正则化技术",
      "批改编程作业与小测验，并针对卷积神经网络 (CNN)、循环神经网络 (RNN)、注意力模型和 Transformer 等主题提供建设性反馈"
    ],
    isBulletPoints: true,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "深度学习", 
      "神经网络", 
      "机器学习", 
      "强化学习",
      "Python 编程",
      "沟通能力"
    ],
    date: "2024年9月 - 2024年12月",
  },
  {
    title: "研究生",
    location: "加州大学圣克鲁兹分校 - 圣克鲁兹, 加州",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "攻读计算机科学与工程硕士学位", // ，专注于人工智能领域的研究与应用。",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "机器学习",
      "深度学习基础",
      "人工智能项目",
      "高级计算机安全",
      "计算机安全与网络",
      "超大规模集成电路数字系统设计",
      "算法分析",
      "编程语言——Coq（证明辅助工具/形式化语言）",
      "形式化方法",
      "计算机科学与工程中的研究与教学",
    ],
    date: "2024年9月 - 预计2025年12月",
  },
  {
    title: "全栈工程师 & 开发负责人 - AI Pathways 团队",
      location: "Tech4Good 实验室 - 美国加州圣克鲁兹",
      locationUrl: "https://tech4good.soe.ucsc.edu/",
      description: [
        "带领由 AI 研究员、网页开发者和 UI/UX 设计师组成的跨职能团队，开发 Pathways —— 一个由人工智能驱动的自我导向学习平台，帮助用户学习从编程到烹饪等各类主题。平台通过个性化推荐与交互式指导实现学习体验，并经过多次用户研究验证与优化，包括在大学生群体中的试点实验。"
        // "开展初步研究以收集用户反馈和见解，推动 Pathways 应用的改进。"
      ],
      isBulletPoints: false,
      icon: React.createElement(CgWorkAlt),
      tags: [
        "提示工程 (Prompt Engineering)",
        "LLMLingua/LongLLMLingua",
        "Pinecone",
        "OpenAI ChatCompletion API",
        "OpenAI Assistant API",
        "OpenAI Embeddings API",
        "用户研究",
        "领导力",
        "导师指导"
      ],
      date: "2023年6月 - 2025年1月"
  },
  {
    title: "编程讲师",
    location: "Code For Fun - 美国加州森尼韦尔",
    locationUrl: "https://codeforfun.com/",
    description: [
      "教授 K–12 学生编程基础概念，包括逻辑思维、问题求解，以及入门级数据结构与算法",
      "主持最多可容纳 300 名学生的大型 Code Day 编程工作坊，并在小班（1–8 人）及中大班（8–25 人）教学环境中授课",
      "设计基于项目的课程，并教授涵盖以下方向的实践课程：游戏开发、机器人开发、网页开发、移动应用开发、图形化编程与文本编程"
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "教学",
      "公众演讲",
      "游戏开发",
      "网页开发",
      "移动应用开发",
      "图形化编程",
      "Python",
      "Lua (Roblox)",
      "JavaScript",
      "HTML",
      "CSS",
      "Scratch"
    ],
    date: "2023年2月 - 2024年2月"
  },
  {
    title: "本科生",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "计算机科学与工程 理学学士 (B.S.)",
      "心理学 文学学士 (B.A.)"
    ],
    isBulletPoints: true,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "数据结构与算法",
      "算法分析",
      "计算模型",

      "嵌入式系统与C编程",
      "计算机系统与汇编语言",
      "计算机架构",
      "计算机系统设计原理",

      "Python编程",
      "Python编程抽象",
      "编程语言基础（Haskell）",

      "计算机图形学",
      "人工智能",
      "应用机器学习",
      "自然语言处理",
      "计算机科学与工程技术写作",

      "统计学",
      "离散数学应用",

      "异常心理学",
      "发展心理学",
      "生命周期发展心理病理学",
      "儿童思维",
      "人类学习与记忆",
      "心理学研究方法",
    ],
    date: "2020年7月 - 2022年12月",
  },
  {
    title: "Python 课程评分员与辅导员",
    location: "加州大学圣克鲁兹分校 - 美国加州圣克鲁兹",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "使用自动化评分脚本批改 Python 编程作业，确保提交结果的准确性与一致性",
      "在答疑时间和在线论坛中，协助学生理解课程概念并调试代码",
      "因表现与可靠性突出，连续八个学期被同一位教授再次聘用"
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: ["课程辅导", "Python", "沟通能力", "问题解决"],
    date: "2021年4月 - 2022年12月"
  },
  {
    title: "后端开发实习生",
    location: "WayOps - 远程",
    locationUrl: "https://wayops.eu/",
    description: [
      "参与智能停车管理系统开发，通过重组大规模数据集提升效率，改进查询速度和数据库可扩展性，以支持实时停车位可用性分析"
    ],
    isBulletPoints: false,
    icon: React.createElement(CgWorkAlt),
    tags: ["协作", "SQL", "PostgreSQL", "数据库优化", "数据建模", "关系型数据库", "可扩展性与性能调优", "Azure Data Studio"],
      date: "2021年7月 - 2021年8月"
  },
  {
    title: "动物领养中心志愿者",
    location: "Humane Society at Silicon Valley - Sunnyvale, CA",
    locationUrl: "https://www.hssv.org/",
    description: [
      "提供同情和实际的护理给狗、猫和兔子，丰富他们的生活，并准备他们进入充满爱的家庭。",
      "专注于确保动物的福祉和舒适。",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuHelpingHand),
    tags: ["同情心和同理心", "责任心", "可靠性", "时间管理能力"],
    date: "2018年6月 - 2019年6月",
  },
  {
    title: "社团创始人兼主席 - Pop Music Club",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "与他人共同创立并领导了一个拥有200多名成员的音乐社团，担任主席两年。",
      "管理乐队并组织活动，包括年度音乐会和俱乐部日。",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuUser2),
    tags: ["领导力", "团队合作", "沟通能力", "解决问题能力", "规划和组织活动"],
    date: "2017年5月 - 2020年6月",
  },
  {
  title: "教学助理 - C++ 编程课程（初级到高级）",
  location: "De Anza 学院 - 美国加州库比蒂诺",
  locationUrl: "https://www.deanza.edu/",
  description: [
    "协助教授从入门到高级的 C++ 编程课程",
    "在答疑时间帮助学生解决编程问题和理解相关概念",
    "批改作业并为学生提供反馈"
  ],
  isBulletPoints: true,
  icon: React.createElement(LuHelpingHand),
  tags: [
    "教学",
    "C++",
    "学生支持"
  ],
  date: "2018年4月 - 2019年6月"
},
{
  title: "CIS 实验室辅导员",
  location: "De Anza 学院 - 美国加州库比蒂诺",
  locationUrl: "https://www.deanza.edu/",
  description: [
    "担任计算机信息系统 (CIS) 课程的实验室辅导员，在实验课期间为学生提供实践性指导",
    "帮助学生理解课程内容、调试代码并完成实验作业",
    "与授课教师合作，识别学生常见难点并制定有效的教学策略"
  ],
  isBulletPoints: true,
  icon: React.createElement(LuHelpingHand),
  tags: [
    "教学",
    "C++",
    "学生支持"
  ],
  date: "2018年4月 - 2019年6月"
},
{
  title: "社区大学学生",
  location: "De Anza College - Cupertino, CA",
  locationUrl: "https://www.deanza.edu/",
  description: ["在转学之前完成了计算机科学学位所需的课程。"],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "C++",
      "Java",
      "Python",
      "汇编语言",
      "物理",
      "化学",
      "预微积分",
      "微积分",
      "离散数学",
    ],
    date: "2016年4月 - 2020年6月",
  },
] as const;

export const en_experiencesData = [
  {
    title: "Founding Engineer",
    location: "Ripplet - Remote",
    locationUrl: "https://ripplet-info-website.vercel.app/",
    description: [
      "Ripplet is a storytelling and healing platform uplifting the voices of immigrants, Black, Indigenous, and People of Color (BIPOC) communities, and those living between cultures through podcasts, expressive arts, and community-led narratives",
      // "As the sole founding engineer, worked across research, product, and engineering to translate the mission into digital experiences and therapist support tools.",
      "Conducted user interviews, competitive analysis, and product research to identify critical pain points and refine solution offerings",
      "Designed and developed the company website, delivering a responsive and user-friendly interface",
      "Built a therapist support platform prototype with an AI-powered chatbot and dashboards, enabling secure session notes, evidence-based guidance, and progress tracking",
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "U.S. Health Insurance Portability and Accountability Act (HIPAA)", 
      "Multi-agent Systems", 
      "Ollama", 
      "OpenAI API", 
      "Next.js", 
      "Google Gemini", 
      "Anthropic Claude", 
      "LlamaIndex", 
      "Hugging Face Products",
      "LangChain",
      "Redux", 
      "Node.js", 
      "Prompt Engineering", 
      "Software Development", 
      "React.js", 
      "Python (Programming Language)", 
      "TailwindCSS", 
      "PostgreSQL", 
      "Django REST Framework",
      "Retrieval-Augmented Generation (RAG)", 
    ],
    date: "Jun 2024 - Aug 2025",
  },
  {
    title: "Mentor",
    location: "BobaTalks",
    locationUrl: "https://www.bobatalks.com/",
    description: [
      "Support international students and newcomers to tech in figuring out their path, from deciding on graduate school to exploring career directions and navigating challenges abroad",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuHelpingHand),
    tags: ["Mentorship", "International Students", "Career Guidance", "Graduate School Advice"],
    date: "Feb 2025 - Present",
  },
  {
    title: "Individual Tutor and Grader - Deep Learning Course",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "Held in-person and remote office hours twice weekly to clarify deep learning concepts, and guided students in applying machine learning principles, including model training/testing, loss functions, gradient descent, and regularization techniques",
      "Graded coding assignments and quizzes, providing constructive feedback on topics such as CNNs, RNNs, attention models, and transformers",
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "Deep Learning", 
      "Neural Networks", 
      "Machine Learning", 
      "Reinforcement Learning",
      "Python Programming",
      "Communication",
    ],
    date: "Sep 2024 - Dec 2024",
  },
  {
    title: "Graduate Student",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "Master of Science in Computer Science and Engineering", // , specializing in Artificial Intelligence
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "Machine Learning",
      "Foundations of Deep Learning",
      "Projects in Artificial Intelligence",
      "Artificial Intelligence in Games",
      "Advanced Computer Security",
      "Computer Security and Network",
      "VLSI Digital System Design",
      "Analysis of Algorithms",
      "Programming Languages - Coq",
      "Formal Methods",
      "Research and Teaching in Computer Science and Engineering",
      // "Neural Computation",
    ],
    date: "Sep 2024 - Dec 2025 (Expected Graduation)",
  },
  {
    title: "Full Stack Engineer & Dev Lead - AI Pathways Team",
    location: "Tech4Good Lab - Santa Cruz, CA",
    locationUrl: "https://tech4good.soe.ucsc.edu/",
    description: [
      "Led a cross-functional team of AI researchers, web developers, and UI/UX designers to build Pathways, an AI-powered self-directed learning platform that helps anyone learn—from coding to cooking—through personalized recommendations and interactive guidance, refined through multiple user studies, including pilots with university students.",
      // "Conducted preliminary studies to gather user feedback and insights, driving improvements in the Pathways applications.",
    ],
    isBulletPoints: false,
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
      "Mentorship",
    ],
    date: "June 2023 - Jan 2025",
  },
  {
    title: "Coding Instructor",
    location: "Code For Fun - Sunnyvale, CA",
    locationUrl: "https://codeforfun.com/",
    description: [
      "Taught K–12 students fundamental programming concepts, including logic, problem-solving, and introductory data structures & algorithms",
      "Led large-scale Code Day workshops for up to 300 students and taught in small (1–8) and medium-to-large (8–25) class settings",
      "Developed project-based curricula and delivered engaging lessons in: Game Development, Robotics, Web Development, Mobile App Development, Block-based Programming and Text-based Programming",
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
      "Python",
      "Lua (Roblox)",
      "JavaScript",
      "HTML",
      "CSS",
      "Scratch"
    ],
    date: "Feb 2023 - Feb 2024",
  },
  {
    title: "Undergraduate Student",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "Bachelor of Science (B.S.) in Computer Science and Engineering",
      "Bachelor of Arts (B.A.) in Psychology",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "Data Structure and Algorithm",
      "Analysis of Algorithms",
      "Computational Models",

      "Embedded Systems and C Programming",
      "Computer Systems and Assembly Language",
      "Computer Architecture",
      "Principles of Computer Systems Design",

      "Programming in Python",
      "Programming Abstractions: Python",
      "Foundations of Programming Languages (Haskell)",

      "Computer Graphics",
      "Artificial Intelligence",
      "Applied Machine Learning",
      "Natural Language Processing",
      "Technical Writing for Computer Science and Engineering",

      "Statistics",
      "Applied Discrete Mathematics",

      "Abnormal Psychology",
      "Developmental Psychology",
      "Lifespan Developmental Psychopathology",
      "Children's Thinking",
      "Human Learning and Memory",
      "Research Methods in Psychology",
    ],
    date: "July 2020 - Dec 2022",
  },
  {
    title: "Grader & Tutor for Python",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "Graded Python programming assignments using automated grading scripts to ensure accuracy and consistency across submissions",
      "Assisted students in understanding course concepts and debugging code during office hours and online forums",
      "Rehired by the same professor for eight consecutive quarters based on performance and reliability"
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: ["Tutoring", "Python", "Communication", "Problem Solving"],
    date: "Apr 2021 - Dec 2022",
  },
  {
    title: "Backend Developer Intern",
    location: "WayOps - Remote",
    locationUrl: "https://wayops.eu/",
    description: [
      "Contributed to a smart parking management system by reorganizing large-scale datasets for efficiency, improving query speed, and database scalability to support real-time parking availability insights.",
    ],
    isBulletPoints: false,
    icon: React.createElement(CgWorkAlt),
    tags: ["Collaboration", "SQL", "PostgreSQL", "Database Optimization", "Data Modeling", "Relational Databases", "Scalability & Performance Tuning", "Azure Data Studio"],
    date: "Jul 2021 - Aug 2021",
  },
  {
    title: "Animal Care Volunteer",
    location: "Humane Society at Silicon Valley - Sunnyvale, CA",
    locationUrl: "https://www.hssv.org/",
    description: [
      "Provided compassionate, hands-on care to dogs, cats, and rabbits, enriching their lives and preparing them for adoption into loving homes",
      "Focused on ensuring the well-being and comfort of the animals",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuHelpingHand),
    tags: [
      "Compassion and Empathy",
      "Responsibility",
      "Reliability",
      "Time Management",
    ],
    date: "June 2018 - June 2019",
  },
  {
    title: "Co-founder & President - Pop Music Club",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "Co-founded and led a music club with over 200 members, serving as president for two years",
      "Managed bands and organized events, including annual concerts and club days",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuUser2),
    tags: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Problem Solving",
      "Planning and organizing events",
    ],
    date: "May 2017 - June 2020",
  },
  {
    title: "Teaching Assistant - C++ Programming Courses (Beginning to Advanced)",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "Assisted in teaching C++ programming courses ranging from beginner to advanced levels",
      "Held office hours to help students with coding problems and concepts",
      "Graded assignments and provided feedback to students",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuHelpingHand),
    tags: [
      "Teaching",
      "C++",
      "Student Support"
    ],
    date: "Apr 2018 - June 2019",
  },
  {
    title: "CIS Lab Tutor",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "Worked as a lab tutor for Computer Information Systems (CIS) courses, providing hands-on assistance to students during lab sessions.",
      "Helped students understand course material, debug code, and complete lab assignments.",
      "Collaborated with instructors to identify common student challenges and develop effective teaching strategies.",
    ],
    isBulletPoints: true,
    icon: React.createElement(LuHelpingHand),
    tags: [
      "Teaching",
      "C++",
      "Student Support"
    ],
    date: "Apr 2018 - June 2019",
  },
  {
    title: "Community College Student",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "Completed required coursework for a Computer Science degree before transferring to UC Santa Cruz",
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
      "Discrete Mathematics",
    ],
    date: "Apr 2016 - June 2020",
  },
] as const;

export const cn_projectsTitle = "我的项目";
export const en_projectsTitle = "My Projects";

export const cn_projectsData = [
  {
    title: "Pathways",
    time: "2024年4月 - 2025年1月",
    description:
      "一个AI驱动的网络应用程序，旨在帮助用户自学任何一个领域的知识。",
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
    imageUrl: [Img2, Img10, Img11],
    projectUrl: null,
  },
  {
    title: "Pathways GPT",
    time: "2024年7月",
    description:
      "一个OpenAI GPT，旨在通过支持性的、逐步的方法引导用户完成个性化的学习旅程，确保清晰和与他们的目标保持一致。",
    sideNotes: "为AI Pathways团队创建，以加速研究过程，特别是在研究初期阶段。",
    tags: ["提示词工程"],
    imageUrl: [Img4],
    projectUrl: "https://chatgpt.com/g/g-isRhwzkEL-pathways",
  },
  {
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
    imageUrl: [Img7, Img6, Img9, Img8],
    projectUrl: null,
  },
  {
    title: "技术简历定制GPT",
    time: "2024年6月",
    description:
      "一个OpenAI GPT，旨在帮助用户使用先进的简历写作技巧和策略，根据职位描述撰写量身定制的技术简历。",
    sideNotes:
      "创建帮助我写简历，因为我缺乏行业专业人士的反馈。这个GPT帮助我写更好的技术简历，并根据不同的工作申请进行定制。",
    tags: ["提示词工程"],
    imageUrl: [Img3],
    projectUrl: "https://chatgpt.com/g/g-A9KhEHv0v-tech-resume-tailor",
  },
  {
    title: "Ripplet信息网站",
    time: "2024年7月",
    description:
      "一个信息网站，为Ripplet，一个面向全球华人的社区发起的身心健康平台。",
    sideNotes:
      "创建为朋友的热情所做，旨在回馈社会和华人社区。我认同Ripplet的目标和文化。",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "React Icons"],
    imageUrl: [Img12, Img13, Img14],
    projectUrl: "https://ripplet-info-website.vercel.app/",
  },
  {
    title: "猫咪记忆卡牌游戏",
    time: "2023年9月",
    description:
      "一个以我的三只猫，Kitty, Bangbang和Normie的肖像为牌面的卡牌翻转游戏。",
    sideNotes:
      "这是我开发的第一个网站。我创建了这个项目来学习React和网页部署。作为一个骄傲的猫妈妈，我无法抗拒展示我心爱的猫和它们可爱的脸！:))",
    tags: ["React", "TypeScript", "Material-UI", "emotion", "GSAP"],
    imageUrl: [Img1, Img15, Img16],
    projectUrl: "https://victoria-cat-memory-game.vercel.app/",
  },
];

export const en_projectsData = [
  {
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
    imageUrl: [Img2, Img10, Img11],
    projectUrl: null,
  },
  {
    title: "Pathways GPT",
    time: "July 2024",
    description:
      "A GPT designed to guide users through personalized learning journeys with a supportive, step-by-step approach, ensuring clarity and alignment with their goals.",
    sideNotes:
      "Created for the AI Pathways Team to expedite the research process, particularly during the early stages of conducting studies.",
    tags: ["Prompt Engineering"],
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
      "Redux",
    ],
    imageUrl: [Img7, Img6, Img9, Img8],
    projectUrl: null,
  },
  {
    title: "Tech Resume Tailor",
    time: "June 2024",
    description:
      "A GPT designed to help users craft tailored technical resumes aligned with job descriptions, using advanced resume writing techniques and strategies.",
    sideNotes:
      "Created to assist with writing my resume, as I lack feedback from industry professionals. This GPT helps me write better tech resumes and customize them for different job applications.",
    tags: ["Prompt Engineering"],
    imageUrl: [Img3],
    projectUrl: "https://chatgpt.com/g/g-A9KhEHv0v-tech-resume-tailor",
  },
  {
    title: "Ripplet Info Website",
    time: "July 2024",
    description:
      "An informational website for Ripplet, a community-initiated wellness platform for Chinese speakers across the globe.",
    sideNotes:
      "Created as a favor to a friend passionate about psychology, aiming to give back to society and the Chinese community. I resonate with Ripplet's goals and culture.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "React Icons"],
    imageUrl: [Img12, Img13, Img14],
    projectUrl: "https://ripplet-info-website.vercel.app/",
  },
  {
    title: "Cat Memory Game",
    time: "Sep 2023",
    description:
      "A card-flipping game featuring portraits of my three cats, Kitty, Bangbang and Normie.",
    sideNotes:
      "This is the first website I developed. I created this project to learn React and web deployment. As a proud cat mom, I couldn't resist showcasing my beloved cats and their adorable faces! :))",
    tags: ["React", "TypeScript", "Material-UI", "emotion", "GSAP"],
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

export const cn_skillsTitle = "我的专业技能";
export const en_skillsTitle = "My Skills";

export const en_programmingLanguages = "Programming Languages";
export const cn_programmingLanguages = "编程语言";

export const programmingLanguages = [
  // Scripting Languages
  "TypeScript",
  "JavaScript (ES6+)",
  // Object-Oriented Programming (OOP)
  "Python",
  "Java",
  "C++",
  // Procedural Programming (POP)
  "C",
];

export const en_frontendDevelopment = "Frontend Development";
export const cn_frontendDevelopment = "前端开发";

export const frontendDevelopment = [
  // Frameworks and Libraries
  "React",
  "React Native (Expo)",
  "Next.js",
  "SolidJS",
  // Build Tools & Environments
  "Node.js",
  "Vite",
  // State Management
  "Redux Toolkit",
  "RTK Query",
  "RxJS",
  "Axios",
  "GraphQL",
  // Styling & UI Libraries
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "NativeWind",
  "Sass",
  "PostCSS",
  "Material UI",
  "Ant Design",
  "Emotion",
  "Shadcn/UI",
  "Radix UI",
  // Animations
  "Framer Motion",
  "GSAP",
  // Icons & Graphics
  "React Icons",
];

export const en_backendDevelopment = "Backend Development";
export const cn_backendDevelopment = "后端开发";

export const backendDevelopment = [
  // Frameworks and Platforms
  "FastAPI",
  "Django",
  "Django REST Framework",
  "Express.js",
  // API Development
  "RESTful APIs",
  "gRPC",
  // Authentication & Security
  "JWT",
  // Databases & Caching
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Redis",
  // Messaging & Microservices
  "Kafka",
  "RabbitMQ",
  "Microservices Architecture",
  // Cloud & Infrastructure
  "Google Cloud Platform (GCP)",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Vercel",
  "Postman",
  // DevOps & Testing
  "Git", 
  "GitHub Actions", 
  "CI/CD Pipelines",
  "Pytest", 
  "Jest", 
  "Jenkins",
  "Unit Testing",
  "Integration Testing",
  "End-to-End (E2E) Testing",
  "Test Automation",
];

export const en_database = "Databases";
export const cn_database = "数据库";

export const database = [
  // "Relational Databases",
  "PostgreSQL",
  "SQL",
  // NoSQL Databases
  "MongoDB",
  "Firestore",
  "Firebase",
  // Vector Databases
  "Pinecone",
  "Chroma",
];

export const en_AI = "AI & Data Analytics";
export const cn_AI = "人工智能 & 数据分析";

export const AI = [
  // Machine Learning Concepts
  "Deep Learning",
  "Reinforcement Learning",
  "Prompt Engineering",
  "Retrieval-Augmented Generation (RAG)",
  // Frameworks and Libraries
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Hugging Face Transformers",
  "LangChain",
  "LlamaIndex",
  "AutoGen",
  "Ollama",
  // Data Analysis & Visualization
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Chart.js",
  "Prometheus",
  "Grafana",
  "Logging & Monitoring",
  // AI Platforms & APIs
  "OpenAI API",
  "Gemini AP",
  "Claude",
  "Google AI Studio",
  "LastMile AI",
  "Weights & Biases (W&B)",
  "Cursor",
];
