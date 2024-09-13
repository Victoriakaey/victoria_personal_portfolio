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
  }
]


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

export const cn_experiencesTitle = "我的经验"
export const en_experiencesTitle = "My Experience"

export const cn_experiencesData = [
  {
    title: "研究生",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "正在攻读计算机科学和工程的硕士学位，我的研究方向是人工智能。",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [],
    date: "2024年9月 - 2025年12月 (预计毕业)",
  },
  {
    title: "研究与开发负责人 - AI Pathways小组",
    location: "Tech4Good Lab - Santa Cruz, CA",
    locationUrl: "https://tech4good.soe.ucsc.edu/",
    description: [
      "领导一个由10多名开发人员组成的团队，将AI集成到网络开发中。", 
      "进行初步研究，收集用户反馈和见解，推动Pathways应用程序的改进。", 
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "提示词工程",
      "LLMLingua/LongLLMLingua", 
      "Pinecone", 
      "OpenAI ChatCompletion API", 
      "OpenAI Assistant API",
      "OpenAI Embeddings API", 
      "用户研究", 
      "领导力",
      "辅导/指导能力"
    ],
    date: "2023年6月 - 现在",
  },
  {
    title: "编程教师",
    location: "Code For Fun - Sunnyvale, CA",
    locationUrl: "https://codeforfun.com/",
    description:[
      "指导了5000多名学生在小型和大型团体中学习编程。",
      "为不同学生需求量身定制个性化学习计划。",
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "教学",
      "公开演讲", 
      "游戏开发", 
      "Web开发", 
      "移动应用开发", 
      "积木编程", 
      "Python"
    ],
    date: "2023年2月 - 2023年12月",
  },
  {
    title: "本科生",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description:[
      "获得了计算机科学和心理学双学士学位。",
    ],
    isBulletPoints: false,
    icon: React.createElement(LuGraduationCap),
    tags: [
      "人工智能", 
      "机器学习", 
      "自然语言处理", 
      "数据结构和算法", 
      "计算机架构", 
      "计算机系统设计", 
      "计算机图形学", 
      "统计学", 
      "发展心理学", 
      "学习与记忆"
    ],
    date: "2020年7月 - 2022年12月",
  },
  {
    title: "Python助教",
    location: "UC Santa Cruz - Santa Cruz, CA",
    locationUrl: "https://www.ucsc.edu/",
    description: [
      "在8个连续季度中为学生助教和评分。",
      "因出色的表现和提高学生对Python的理解和解决问题的能力而连续被聘用。",
    ],
    isBulletPoints: true,
    icon: React.createElement(CgWorkAlt),
    tags: [
      "教学", 
      "Python", 
      "沟通能力",
      "解决问题的能力",
    ],
    date: "2021年4月 - 2022年12月",
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
    tags: [
      "同情心和同理心", 
      "责任心", 
      "可靠性", 
      "时间管理能力"
    ],
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
    tags: [
      "领导力", 
      "团队合作", 
      "沟通能力", 
      "解决问题能力", 
      "规划和组织活动"
    ],
    date: "2017年5月 - 2020年6月",
  },
  {
    title: "社区大学学生",
    location: "De Anza College - Cupertino, CA",
    locationUrl: "https://www.deanza.edu/",
    description: [
      "在转学之前完成了计算机科学学位所需的课程。",
    ],
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
      "离散数学"
    ],
    date: "2016年4月 - 2020年6月",
  },
] as const;

export const en_experiencesData = [
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
    date: "Sep 2024 - Dec 2025 (Expected Graduation)",
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

export const cn_projectsTitle = "我的项目"
export const en_projectsTitle = "My Projects"

export const cn_projectsData = [
  {
    title: "Pathways",
    time: "2024年4月 - 现在",
    description: "一个AI驱动的网络应用程序，旨在帮助用户自学任何一个领域的知识。",
    sideNotes: "这个实验室项目旨在为有动力的自学者创建个性化的学习路径，帮助他们练习和提高自学技能。",
    tags: [
      "SolidJS", 
      "TypeScript", 
      "Vite", 
      "Express", 
      "OpenAI APIs", 
      "Langchain", 
      "Pinecone", 
      "Firestore"
    ],
    imageUrl: [Img2, Img10, Img11],
    projectUrl: null,
  },
  {
    title: "Pathways GPT",
    time: "2024年7月",
    description: "一个OpenAI GPT，旨在通过支持性的、逐步的方法引导用户完成个性化的学习旅程，确保清晰和与他们的目标保持一致。",
    sideNotes: "为AI Pathways团队创建，以加速研究过程，特别是在研究初期阶段。",
    tags: [
      "提示词工程"
    ],
    imageUrl: [Img4],
    projectUrl: "https://chatgpt.com/g/g-isRhwzkEL-pathways",
  },
  {
    title: "易",
    time: "2024年4月 - 现在",
    description:
      "一个SaaS网络应用程序，提供全面的财务和业务管理解决方案。",
    sideNotes: "开发帮助我的妈妈减少工作量。",
    tags: [
      "React", 
      "TypeScript", 
      "Next.js", 
      "Django", 
      "Django REST Framework", 
      "PostgreSQL", 
      "Redux"
    ],
    imageUrl: [Img7, Img6, Img9, Img8],
    projectUrl: null,
  },
  {
    title: "技术简历定制GPT",
    time: "2024年6月",
    description:
      "一个OpenAI GPT，旨在帮助用户使用先进的简历写作技巧和策略，根据职位描述撰写量身定制的技术简历。",
    sideNotes: "创建帮助我写简历，因为我缺乏行业专业人士的反馈。这个GPT帮助我写更好的技术简历，并根据不同的工作申请进行定制。",
    tags: [
      "提示词工程"
    ],
    imageUrl: [Img3],
    projectUrl: "https://chatgpt.com/g/g-A9KhEHv0v-tech-resume-tailor",
  },
  {
    title: "Ripplet信息网站",
    time: "2024年7月",
    description:
      "一个信息网站，为Ripplet，一个面向全球华人的社区发起的身心健康平台。",
    sideNotes: "创建为朋友的热情所做，旨在回馈社会和华人社区。我认同Ripplet的目标和文化。",
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
    title: "猫咪记忆卡牌游戏",
    time: "2023年9月",
    description: "一个以我的三只猫，Kitty, Bangbang和Normie的肖像为牌面的卡牌翻转游戏。",
    sideNotes: "这是我开发的第一个网站。我创建了这个项目来学习React和网页部署。作为一个骄傲的猫妈妈，我无法抗拒展示我心爱的猫和它们可爱的脸！:))",
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
];

export const en_projectsData = [
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
      "Firestore"
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
    imageUrl: [Img7, Img6, Img9, Img8],
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

export const cn_skillsTitle = "我的专业技能"
export const en_skillsTitle = "My Skills"

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