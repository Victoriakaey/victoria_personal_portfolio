import type { SkillGroup } from "./types";

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "programmingLanguages",
    label: { en: "Programming Languages", cn: "编程语言" },
    skills: [
      // Scripting Languages
      "TypeScript",
      "JavaScript (ES6+)",
      // Object-Oriented Programming (OOP)
      "Python",
      "Java",
      "C++",
      // Procedural Programming (POP)
      "C",
    ],
  },
  {
    id: "frontendDevelopment",
    label: { en: "Frontend Development", cn: "前端开发" },
    skills: [
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
    ],
  },
  {
    id: "backendDevelopment",
    label: { en: "Backend Development", cn: "后端开发" },
    skills: [
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
    ],
  },
  {
    id: "database",
    label: { en: "Databases", cn: "数据库" },
    skills: [
      "PostgreSQL",
      "SQL",
      // NoSQL Databases
      "MongoDB",
      "Firestore",
      "Firebase",
      // Vector Databases
      "Pinecone",
      "Chroma",
    ],
  },
  {
    id: "AI",
    label: { en: "AI & Data Analytics", cn: "人工智能 & 数据分析" },
    skills: [
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
    ],
  },
];
