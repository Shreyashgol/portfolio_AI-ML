export const contactInfo = {
  email: "shreyash.golhani2024@nst.rishihood.edu.in",
  phone: "+91-9479601267",
  location: "India",
};

export const profileLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/shreyash-golhani-b95b172b5/",
  },
  {
    label: "GitHub",
    url: "https://github.com/Shreyashgol",
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/SSSLgol/",
  },
  {
    label: "Codeforces",
    url: "https://codeforces.com/profile/Shreyash_Golhani",
  },
  {
    label: "Kaggle",
    url: "https://www.kaggle.com/shreyashgolhani",
  },
];

export const experience = [
  {
    title: "AI Engineer",
    company: "Orazix Inc",
    type: "Part Time",
    duration: "Apr 2026 - Present",
    points: [
      "Contributing to the development of AI-driven applications with a focus on multi-agent systems and workflow orchestration.",
      "Gaining hands-on experience in scalable AI architectures, embedding systems, and performance optimization.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "TypeScript", "JavaScript"],
  },
  {
    title: "Data Science & ML Concepts",
    skills: [
      "Generative AI",
      "Model Evaluation",
      "Feature Engineering",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LangChain",
      "LangSmith",
      "FastAPI",
      "Streamlit",
      "TensorFlow",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Vector Databases",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Hugging Face",
      "Docker",
      "AWS EC2",
      "AWS S3",
      "Firebase",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "G-Pilot",
    subtitle: "Autonomous GitHub Vulnerability Remediation System",
    period: "Apr 2026",
    image: "/projects/image.png",
    tags: [
      "FastAPI",
      "Multi-Agent Systems",
      "Docker",
      "RAG",
      "ChromaDB",
      "GitHub Webhooks",
    ],
    description:
      "Built a FastAPI-based multi-agent pipeline that reduced manual vulnerability detection effort by 70%, improved patch verification reliability to 90%, and accelerated remediation cycles by 2x.",
    highlights: [
      "Integrated Docker sandboxing for secure validation and testing of generated fixes.",
      "Connected RAG, GitHub webhooks, validation, automated patching, and re-testing into one production-ready remediation workflow.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Vaageesh-Git/G-Pilot",
      },
      {
        label: "Docs",
        url: "https://docs.google.com/document/d/1J-9RWEKbRGNbCFXHo_hNtJmhOOs4K0hR/edit",
      },
    ],
  },
  {
    id: 2,
    title: "Leaf Disease Classifier",
    subtitle: "CNN-based deep learning model",
    period: "Mar 2026",
    image: "/projects/project6.png",
    tags: [
      "TensorFlow",
      "CNN",
      "Streamlit",
      "Computer Vision",
      "Model Optimization",
    ],
    description:
      "Trained a CNN covering 38 disease classes across 14 crop types and paired it with a production-grade Streamlit inference platform for low-latency agri-tech predictions.",
    highlights: [
      "Applied augmentation, normalization, and hyper-parameter tuning to improve generalization and reduce overfitting.",
      "Built scalable preprocessing and batch inference flows that improved response time by 40%.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Shreyashgol/cnn_leaf_disease_prediction",
      },
      {
        label: "Live",
        url: "https://cnnleafdiseaseprediction.streamlit.app/",
      },
    ],
  },
  {
    id: 3,
    title: "agrovers",
    subtitle: "A Multi Agent AI Assistant",
    period: "Nov 2025",
    image: "/projects/project2.png",
    tags: [
      "FastAPI",
      "FAISS",
      "RAG",
      "n8n",
      "Bilingual UX",
      "Multi-Agent Systems",
    ],
    description:
      "Designed a multi-step soil assessment assistant with FSM-based orchestration, bilingual advisory support, and a production RAG stack tuned for rural connectivity.",
    highlights: [
      "Cut input errors by 35% with a 5+ state orchestration flow and lightweight performance optimizations.",
      "Backed the advisory engine with FAISS indexing across 5K+ documents and FastAPI microservices for embeddings and LLM orchestration.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Shreyashgol/agrovers_wow",
      },
      {
        label: "Live",
        url: "https://agrovers-wow-tau.vercel.app/",
      },
    ],
  },
];
