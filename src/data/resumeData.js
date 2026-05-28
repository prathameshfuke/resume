export const resumeData = {
    name: "Prathamesh Surendra Fuke",
    role: "AI/ML Engineer | Generative AI | LLM Research",
    resumeLink: "https://drive.google.com/file/d/1YUmV-TOoTW6kS7edxMDebwppdRjX0e8M/view?usp=sharing",

    personal: {
        email: "prathameshfuke@icloud.com",
        phone: "+91-7249371213",
        location: "Pune, Maharashtra, India",
        links: {
            linkedin: "https://linkedin.com/in/prathamesh-fuke-094642282",
            github: "https://github.com/prathameshfuke",
            codeforces: "https://codeforces.com/profile/shuracodes"
        },
        oneLiner: "Building production AI systems - from agentic workflows and RAG pipelines to fine-tuned LLMs and applied ML research.",
        bio: "3rd year B.E. student in Electronics and Telecommunication Engineering (Honours in Data Science) at MMCOE Pune. I spend most of my time building AI systems that actually ship. I am a Founding Engineer at Nelviq (formerly Seris Tech), an AI healthcare startup, and currently work as a Generative AI Engineer at Datasmith AI. Deeply curious about Game Theory, Computational Social Choice, and the mathematics of how intelligent systems make decisions."
    },

    sections: [
        {
            id: 'experience',
            name: 'Experience',
            icon: 'Briefcase',
            color: '#00E5FF', // cyan
            lat: 0,
            lon: 90,
            orbitRadius: 7,
            content: [
                {
                    company: 'Datasmith AI',
                    role: 'Generative AI Intern',
                    duration: 'Feb 2026 - Present',
                    location: 'Hybrid, Pune',
                    description: 'Architected a production hybrid RAG pipeline combining BM25 sparse retrieval and FAISS semantic embeddings using LangChain, reducing government tender document review from hours to under 3 minutes.',
                    achievements: [
                        'Architected a hybrid RAG pipeline (BM25 + FAISS) with LangChain, reducing tender document review time from hours to under 3 minutes.',
                        'Fine-tuned and quantized LLMs (LLaMA, Mistral) using GGUF/GGML for zero-cost CPU inference without GPU infrastructure.',
                        'Designed multi-turn agentic workflows using LangGraph with tool-calling agents and long-term memory.',
                        'Evaluated end-to-end pipeline quality using RAGAS metrics.'
                    ],
                    skills: ['LangChain', 'LangGraph', 'FAISS', 'BM25', 'LLaMA', 'Mistral', 'GGUF', 'FastAPI', 'RAGAS']
                },
                {
                    company: 'Kombai AI',
                    role: 'Developer Advocate (Research & Evaluation)',
                    duration: 'Jan 2026 - Feb 2026',
                    location: 'Remote',
                    description: 'Systematically evaluated Kombai\'s AI-to-frontend code generation agent for hallucinations, layout inconsistencies, and semantic drift.',
                    achievements: [
                        'Evaluated Kombai\'s AI-to-frontend generation agent for hallucinations and layout drifts.',
                        'Designed adversarial prompt suites to stress-test agent robustness across forms, navigation, and tables.',
                        'Produced structured evaluation reports mapping failure patterns to root causes.'
                    ],
                    skills: ['Prompt Engineering', 'LLM Evaluation', 'Frontend Systems']
                },
                {
                    company: 'Infosys Springboard',
                    role: 'AI/ML Research Intern & Team Lead',
                    duration: 'Oct 2025 - Dec 2025',
                    location: 'Remote',
                    description: 'Led applied ML research on clinical data classification.',
                    achievements: [
                        'Built an ensemble stacking meta-learner (LightGBM) achieving 97.2% accuracy on imbalanced clinical data.',
                        'Applied SHAP for post-hoc interpretability and feature attribution.',
                        'Engineered Scikit-learn Pipelines with ColumnTransformer, cutting preprocessing code by 70%.'
                    ],
                    skills: ['Python', 'Scikit-learn', 'LightGBM', 'SHAP', 'Optuna', 'Pandas']
                },
                {
                    company: 'Multiverz',
                    role: 'Agentic AI Intern',
                    duration: 'Nov 2025 - Dec 2025',
                    location: 'Remote',
                    description: 'Designed AgentBoard - a four-agent enterprise AI advisory system for a public listed company in Sri Lanka.',
                    achievements: [
                        'Orchestrated multi-agent system using LangGraph and CrewAI with hybrid RAG (vector DB + knowledge graph).',
                        'Delivered board-ready strategic insights in under 30 minutes.'
                    ],
                    skills: ['LangGraph', 'CrewAI', 'Vector DB', 'Knowledge Graph', 'Python']
                },
                {
                    company: 'Nelviq',
                    role: 'Founding Engineer',
                    duration: 'Aug 2025 - Present',
                    location: 'Pune, Maharashtra',
                    description: 'Founding Engineer of Nelviq (formerly Seris Tech), an AI healthcare startup building HealthSentinel and AgeWell.',
                    achievements: [
                        'Built stacking ensemble achieving 94% F1-score using Optuna TPE on imbalanced medical datasets.',
                        'Built OCR + NER pipeline at 95% precision via async FastAPI.',
                        'Designed end-to-end MLOps: MLflow tracking, automated versioning, drift detection, and retraining triggers.'
                    ],
                    skills: ['Python', 'FastAPI', 'MLflow', 'Optuna', 'spaCy', 'EasyOCR', 'Docker', 'Firebase']
                },
                {
                    company: 'IUCAA',
                    role: 'Research Intern',
                    duration: 'May 2019',
                    location: 'Pune, India',
                    description: 'Contributed to planetary motion research (Mars Retrograde Motion) at the Inter-University Centre for Astronomy & Astrophysics.',
                    achievements: [
                        'Developed IoT-based instrumentation.',
                        'Collaborated on computational problem-solving with senior faculty.'
                    ],
                    skills: ['Physics', 'IoT', 'Computational Analysis']
                }
            ]
        },
        {
            id: 'projects',
            name: 'Projects',
            icon: 'Rocket',
            color: '#FFB300', // amber
            lat: -30,
            lon: 180,
            orbitRadius: 13,
            content: [
                {
                    title: 'ContextWeave',
                    tags: ['AI/ML', 'Open Source'],
                    description: 'A local-first, model-agnostic memory and context persistence layer for multi-agent AI systems. Built on SQLite with hybrid BM25 sparse + vector search, a FastAPI backend, and a D3.js force-directed knowledge graph viewer. Exposes 15 developer tools via a stdio FastMCP server with Claude Code hook automation (SessionStart, Pre/PostToolUse). Zero cloud dependency — runs entirely on your machine.',
                    tech: ['SQLite', 'BM25', 'FastAPI', 'D3.js', 'FastMCP', 'Claude Code'],
                    timeline: '2026',
                    github: 'https://github.com/prathameshfuke/contextweave',
                    demo: null
                },
                {
                    title: 'TenderExtractPro',
                    tags: ['AI/ML'],
                    description: 'Hybrid RAG pipeline that extracts structured data from government tender documents. Combines BM25 sparse retrieval and FAISS semantic search with a GGUF-quantized LLaMA model for zero-cost CPU inference. FastAPI backend with structured JSON outputs and source-level citations. Achieved 85-90% accuracy and reduced document review time from hours to under 3 minutes.',
                    tech: ['LangChain', 'BM25', 'FAISS', 'LLaMA', 'GGUF', 'FastAPI'],
                    timeline: 'Feb 2026',
                    github: 'https://github.com/prathameshfuke/TenderExtractPro',
                    demo: null
                },
                {
                    title: 'HealthSentinel',
                    tags: ['AI/ML', 'Hackathon'],
                    description: 'National finalist and 2nd place winner out of 120 teams at SIH 2025, Government of India. Medical NER system that detects diagnoses, medications, and symptoms from clinical text using fine-tuned bert-base-uncased with LoRA and PEFT adapters. Deployed via Firebase Cloud Functions with Firestore real-time database and a React Native mobile app with Redux Toolkit.',
                    tech: ['BERT', 'LoRA/PEFT', 'HuggingFace', 'Firebase', 'React Native', 'Redux Toolkit'],
                    timeline: 'Jan 2025',
                    github: 'https://github.com/prathameshfuke/healthsentinel',
                    demo: 'https://youtu.be/JUrta4EyUmA'
                },
                {
                    title: 'AgeWell',
                    tags: ['AI/ML', 'Web Dev'],
                    description: 'Real-time elderly health monitoring platform using ESP32 sensors to track SpO2, heart rate, temperature, and blood pressure. Kalman filter sensor fusion reduces noise by 40%. Includes prescription OCR for automated medication management, AI anomaly detection, and WhatsApp and push alerts to caregivers. Dual interface for both elderly users and caregivers built with Flutter and FastAPI.',
                    tech: ['TensorFlow', 'OpenCV', 'FastAPI', 'Flutter', 'ESP32', 'FreeRTOS', 'MQTT'],
                    timeline: 'Jan 2025',
                    github: 'https://github.com/prathameshfuke/agewell',
                    demo: 'https://agewell-pi.vercel.app'
                },
                {
                    title: 'ScoreSight',
                    tags: ['AI/ML', 'Web Dev', 'Research'],
                    description: 'End-to-end ML system predicting EPL match outcomes and season results. Uses 54 leakage-safe features with careful temporal splits, LightGBM and XGBoost ensemble. Achieves 97.2% classification accuracy and R² of 0.977 for score regression. Deployed as an interactive Streamlit app with clean visual dashboards.',
                    tech: ['LightGBM', 'XGBoost', 'Scikit-learn', 'Pandas', 'Streamlit'],
                    timeline: '2026',
                    github: 'https://github.com/prathameshfuke/scoresight',
                    demo: 'https://scoresight.streamlit.app'
                },
                {
                    title: 'PrimeTrade',
                    tags: ['AI/ML'],
                    description: 'NLP sentiment analysis system correlating the Bitcoin Fear and Greed Index with trader performance across 10,000+ records. Reveals momentum and contrarian behavioral trading patterns through statistical analysis of market psychology.',
                    tech: ['Python', 'NLP', 'Pandas', 'Statistical Analysis'],
                    timeline: '2024',
                    github: 'https://github.com/prathameshfuke/primetrade',
                    demo: null
                },
                {
                    title: 'FuelUp',
                    tags: ['Web Dev'],
                    description: 'Vehicle fuel tracking web app built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Supabase with Google OAuth. Includes map integration via Leaflet.js and OpenStreetMap. Deployed on Vercel.',
                    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Leaflet.js'],
                    timeline: '2026',
                    github: null,
                    demo: null
                },
                {
                    title: 'L_EXEC',
                    tags: ['Research'],
                    description: 'Custom PyTorch loss function that penalizes LOB predictions based on real trading execution costs including spread, queue depth, and fill probability. Trained on the FI-2010 benchmark with a DeepLOB backbone. Achieved a Sharpe ratio of 1.87 versus 1.24 baseline and +1.8% PnL improvement (p < 0.001). Validated using Diebold-Mariano tests. Submitted to arXiv (q-fin.TR).',
                    tech: ['PyTorch', 'DeepLOB', 'FI-2010', 'NumPy', 'Statistical Testing'],
                    timeline: '2026',
                    github: 'https://github.com/prathameshfuke/quantres',
                    demo: null
                },
                {
                    title: 'DIPY — Diffusion MRI in Python',
                    tags: ['Open Source'],
                    description: 'Contributing to one of the leading scientific Python libraries for diffusion MRI processing and tractography. PR #3793 documenting the PAM5 file format was successfully merged. PR #3800 restructuring the QuickBundles clustering tutorial is currently in review.',
                    tech: ['Python', 'Scientific Computing', 'MRI Processing'],
                    timeline: '2026',
                    github: 'https://github.com/dipy/dipy',
                    demo: null
                },
                {
                    title: 'FURY-GL — Scientific 3D Visualization',
                    tags: ['Open Source'],
                    description: 'Contributing to an OpenGL-based scientific visualization library. Fixed a Windows documentation build crash in apigen.py and resolved RST title underline warnings across release files.',
                    tech: ['Python', 'OpenGL', '3D Visualization'],
                    timeline: '2026',
                    github: 'https://github.com/fury-gl/fury',
                    demo: null
                },
                {
                    title: 'GyanBit',
                    tags: ['Hackathon'],
                    description: 'DIY handheld game console kit designed to bring STEM education to children across India. Inspired by Hack Club\'s Sprig, priced at approximately ₹1,999 to stay accessible. Submitted to Toycathon with a full slide deck and pixel art visuals.',
                    tech: ['Hardware', 'IoT', 'C++', 'STEM Education'],
                    timeline: '2024',
                    github: null,
                    demo: null
                }
            ]
        },
        {
            id: 'skills',
            name: 'Skills',
            icon: 'Cpu',
            color: '#FF0055', // pink
            lat: 30,
            lon: 0,
            orbitRadius: 8.5,
            content: {
                programming: ['Python', 'SQL', 'C++', 'JavaScript', 'TypeScript'],
                ml_ai: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM', 'HuggingFace', 'BERT', 'LoRA/PEFT', 'SHAP', 'Optuna', 'YOLOv5'],
                gen_ai_rag: ['Model Context Protocol (MCP)', 'AI Fluency', 'LangChain', 'LangGraph', 'CrewAI', 'FAISS', 'BM25', 'LLaMA', 'Mistral', 'GGUF Quantization', 'Prompt Engineering', 'RAGAS'],
                mlops_cloud: ['MLflow', 'FastAPI', 'Docker', 'GCP (47 Badges)', 'Vertex AI', 'BigQuery ML', 'Firebase', 'PostgreSQL', 'MongoDB', 'Redis'],
                frontend: ['React', 'React Native', 'Flutter', 'TypeScript', 'HTML/CSS']
            }
        },
        {
            id: 'education',
            name: 'Education',
            icon: 'GraduationCap',
            color: '#a485ff', // purple
            lat: 0,
            lon: -90,
            orbitRadius: 16,
            content: {
                degree: {
                    name: 'B.E. Electrical & Electronics Engineering (Honours: Data Science)',
                    university: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
                    location: 'Pune, Maharashtra',
                    year: '2023 - 2027',
                    cgpa: '9.45',
                    highlight: 'Top 0.1% of class | Rank 1 in two consecutive academic years | Sem breakdown: 9.59 - 9.50 - 8.86 - 10.00 - 9.29'
                },
                secondary: [
                    {
                        name: 'Higher Secondary Certificate (HSC)',
                        institution: 'Abasaheb Garware College, Pune',
                        year: '2023',
                        score: '80%'
                    },
                    {
                        name: 'Secondary School Certificate (SSC)',
                        institution: "Bharatiya Vidya Bhavan's",
                        year: '2021',
                        score: '92%'
                    }
                ],
                certifications: [
                    'AI Fluency: Framework & Foundations — Anthropic (Credential ID: 9gf2un6427s6-1779906184)',
                    'Introduction to Model Context Protocol (MCP) — Anthropic (Credential ID: 65opg2ksk5qv)',
                    'Introduction to Project Management with ClickUp — Coursera (Credential ID: V9DPOYCJLX7N)',
                    'Production Certificates Certificate (AI Agents) — Multiverz (Credential ID: 0d7256fe7b7c4d69b78ea89154d335fe)',
                    'Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)',
                    'Infosys Springboard - 10 AI/ML Certifications (DL, NLP, CV, GenAI, RPA)',
                    'Google Cloud - 47 Badges (Vertex AI MLOps, Responsible AI, BQ ML, K8s, DE)',
                    'Advanced Python (Udemy)',
                    'Advanced C++ (IIT Bombay Spoken Tutorial)',
                    'Networking Basics (Cisco)'
                ]
            }
        },
        {
            id: 'achievements',
            name: 'Achievements',
            icon: 'Trophy',
            color: '#00ff88', // green
            lat: 50,
            lon: 45,
            orbitRadius: 10,
            content: [
                {
                    title: 'Patent: IoT-Enabled Automated Medicine Dispensing System for Elderly Care',
                    description: 'Patent published under Application Number 202621035936 (Filed Mar 25, 2026). Filed a patent for an IoT-enabled automated medicine dispensing system designed specifically for elderly care, developed as part of the AgeWell platform. The system automates medication scheduling and dispensing using IoT hardware, reducing dependency on caregivers for routine medication management. Filed through Marathwada Mitra Mandal’s College of Engineering, Pune with the Office of the Controller General of Patents, Designs and Trade Marks, Government of India.'
                },
                {
                    title: 'Smart India Hackathon 2025',
                    description: '2nd / 120 teams, National Finals, Government of India.'
                },
                {
                    title: 'Academic Rank 1',
                    description: 'Rank 1 at MMCOE for two consecutive academic years (Top 3 across all semesters).'
                },
                {
                    title: 'Codeforces Expert',
                    description: 'Attained a 1600+ rating (Handle: shuracodes) proving advanced algorithmic problem solving.'
                },
                {
                    title: 'Google Cloud Power User',
                    description: 'Achieved 47 Skill Badges encompassing Vertex AI, Kubernetes, and BigQuery ML.'
                }
            ]
        },
        {
            id: 'open_source',
            name: 'Open Source',
            icon: 'Globe',
            color: '#00E5FF', // cyan
            lat: 60,
            lon: -45,
            orbitRadius: 14.5,
            content: [
                {
                    title: 'DIPY - Diffusion MRI in Python',
                    link: 'https://github.com/dipy/dipy',
                    description: 'Contributions to diffusion MRI processing, tractography workflows, and scientific computing utilities.'
                },
                {
                    title: 'FURY-GL - Scientific 3D Visualization',
                    link: 'https://github.com/fury-gl/fury',
                    description: 'Contributions to OpenGL-based 3D scientific visualization components and rendering pipelines.'
                }
            ]
        },
        {
            id: 'interests',
            name: 'Interests',
            icon: 'Heart',
            color: '#ff0055',
            lat: 80,
            lon: 0,
            orbitRadius: 17.5,
            content: [
                'Quantitative Finance & Market Microstructure',
                'Game Theory & Computational Social Choice',
                'Generative AI & LLM Research',
                'Behavioural AI & Human-AI Interaction',
                'Competitive Programming'
            ]
        },
        {
            id: 'contact',
            name: 'Contact',
            icon: 'Mail',
            color: '#FFB300', // amber
            lat: -50,
            lon: -45,
            orbitRadius: 11.5,
            content: {
                email: "prathameshfuke@icloud.com",
                phone: "+91-7249371213",
                location: "Pune, Maharashtra, India",
                links: {
                    linkedin: "https://linkedin.com/in/prathamesh-fuke-094642282",
                    github: "https://github.com/prathameshfuke",
                    codeforces: "https://codeforces.com/profile/shuracodes"
                },
                availability: "Currently open to new opportunities and collaborations."
            }
        }
    ]
}
