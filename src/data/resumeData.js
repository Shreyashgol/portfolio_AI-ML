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
    title: "Generative AI",
    skills: ["CrewAI", "RAG", "Fine Tuning","MCP", 
      "Agentic AI & Multi-Agent Systems",
    "Voice AI Systems", "Context Engineering", "AI Agent Evaluation & Benchmarking", "Multi-modal AI Systems (Text, Voice, Images)"],
  },
  {
    title: "Data Science & ML Concepts",
    skills: [
      "Classical ML",
      "NLP",
      "Random Forest",
      "XGBoost",
      "Naive Bayes",
      "SVM",
      "PCA",
      "Essemble Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Data Analysis",
      "Data Visualization",
      "Tableu"
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
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
      "Supabase"
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
  {
    id: 4,
    title: "Document AI Platform",
    subtitle: "Engineering PDF → Editable, Searchable Knowledge",
    period: "Jun 2026",
    image: "/projects/project9.png",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "OpenCV",
      "OpenCLIP",
      "React",
      "TypeScript",
      "Clean Architecture",
    ],
    description:
      "Transforms P&IDs, schematics, and flowcharts into structured domain objects — extracting every symbol via a full CV pipeline, classifying it, embedding it into pgvector for semantic search, and linking it in a relationship graph editable on a Konva canvas.",
    highlights: [
      "Built a durable Postgres-backed job queue (FOR UPDATE SKIP LOCKED) replacing Redis/Celery, with per-stage retries, backoff, dead-lettering, and crash recovery.",
      "Clean Architecture + DDD with pluggable ports: swap OCR, embedder, classifier, or object store with zero domain changes.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Shreyashgol/doc_editable_platform",
      },
      {
        label: "Live",
        url: "https://doc-editable-platform.vercel.app",
      },
    ],
  },
  {
    id: 5,
    title: "Enterprise Document Intelligence",
    subtitle: "From-Scratch NER + RAG + Knowledge Graph Platform",
    period: "Jun 2026",
    image: "/projects/project7.png",
    tags: [
      "FastAPI",
      "PyTorch",
      "BiLSTM NER",
      "RAG",
      "Knowledge Graph",
      "React",
      "Python",
      "Groq",
    ],
    description:
      "Turns unstructured enterprise documents (PDF, DOCX, EML) into a searchable, connected knowledge base — implementing every NLP component (tokenizer, BIO tagger, BiLSTM NER, relation extractor, knowledge graph) from scratch with 333 passing tests.",
    highlights: [
      "Custom-trained BiLSTM NER model with hybrid tagger combining deterministic rules (EMAIL/PHONE/DATE) and neural model (PERSON/ORG/LOCATION) for zero-hallucination precision.",
      "Production RAG pipeline with two-stage retrieve-broad → rerank-precise + agentic chained workflow across five composable document analysis agents.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Shreyashgol/enterprise_document_intelligence_platform",
      },
      {
        label: "Live",
        url: "https://enterprise-document-intelligence-pl-nine.vercel.app",
      }
    ],
  },
  {
    id: 6,
    title: "BISfit Engine",
    subtitle: "RAG System for Bureau of Indian Standards",
    period: "May 2026",
    image: "/projects/project8.png",
    tags: [
      "RAG",
      "FAISS",
      "Llama 3",
      "Groq",
      "FastAPI",
      "TypeScript",
      "MiniLM",
      "Python",
    ],
    description:
      "Production-grade four-layer RAG system grounded in SP 21:2005 (580 IS standards for building materials) — delivering cited, hallucination-resistant answers in under 2 seconds via query reformulation, FAISS vector search, and cosine re-ranking.",
    highlights: [
      "Achieved 90% Hit@3 and 0.90 MRR@5 on the evaluation benchmark, with 1.71s average latency — exceeding all performance targets.",
      "Restructured 584 clean, metadata-rich semantic chunks into a FAISS index with Llama 3.1 for query reformulation and Llama 3.3 70B for grounded generation.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Aggarwalmansi/BISfit-Engine",
      },
      {
        label: "Live",
        url: "https://bi-sfit-engine.vercel.app",
      }
    ],
  },
];
