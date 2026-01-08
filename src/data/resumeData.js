export const resumeData = {
    name: "Prathamesh Fuke",
    role: "AI/ML Engineer | Full Stack Developer",
    resumeLink: "/resume.pdf",

    personal: {
        email: "prathameshfuke@icloud.com",
        phone: "+91-7249371213",
        location: "Pune, Maharashtra, India",
        links: {
            linkedin: "https://linkedin.com/in/prathamesh-fuke-094642282",
            github: "https://github.com/prathameshfuke",
            codeforces: "https://codeforces.com/profile/shuracodes"
        }
    },

    sections: [
        {
            id: 'skills',
            name: 'Skills',
            icon: 'Cpu',
            color: '#00ff88',
            lat: 30,
            lon: 0,
            content: {
                programming: ['Python (Advanced)', 'C++', 'C', 'Java', 'TypeScript', 'JavaScript', 'MATLAB', 'SQL'],
                ml_ai: ['XGBoost', 'LightGBM', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Optuna', 'CNN', 'LSTM', 'Transformers', 'BERT', 'GPT'],
                nlp_vision: ['spaCy', 'NLTK', 'HuggingFace', 'YOLO', 'YOLOv5', 'OpenCV', 'OCR'],
                web: ['React', 'React Native', 'Flutter', 'Django', 'Flask', 'Node.js', 'REST APIs'],
                databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
                cloud_devops: ['Docker', 'Git', 'GCP', 'Oracle Cloud', 'CI/CD', 'GitHub Actions'],
                iot: ['Raspberry Pi', 'Arduino', 'ESP32', 'MQTT', 'Edge Computing']
            }
        },
        {
            id: 'experience',
            name: 'Experience',
            icon: 'Briefcase',
            color: '#ff00ff',
            lat: 0,
            lon: 90,
            content: [
                {
                    company: 'Infosys Springboard',
                    role: 'Machine Learning Intern',
                    duration: 'Jan 2025 - Present',
                    location: 'Remote',
                    description: 'Architected production ensemble system (XGBoost, LightGBM, Random Forest) achieving 97.2% accuracy across 6,840+ data points. Deployed production web app at scoresight.streamlit.app.',
                    achievements: [
                        '97.2% accuracy with ensemble ML system',
                        'Engineered 25+ features using statistical methods',
                        'Reduced processing time by 40%',
                        'Improved model performance by 25%'
                    ],
                    skills: ['XGBoost', 'LightGBM', 'Random Forest', 'Streamlit', 'Feature Engineering']
                },
                {
                    company: 'Seris Tech',
                    role: 'Founder & AI/IoT Engineer',
                    duration: 'Jan 2025 - Present',
                    location: 'Pune, Maharashtra',
                    description: 'Built HealthSentinel multimodel predictive ML system achieving 94% prediction accuracy. Led team of 4 developers.',
                    achievements: [
                        '94% prediction accuracy for health monitoring',
                        'OCR prescription processing reducing errors by 60%',
                        'Sensor fusion algorithms reducing false alarms by 40%',
                        'Led team of 4, reducing development cycle by 30%'
                    ],
                    skills: ['TensorFlow', 'IoT', 'OCR', 'Team Leadership']
                }
            ]
        },
        {
            id: 'projects',
            name: 'Projects',
            icon: 'Rocket',
            color: '#00aaff',
            lat: -30,
            lon: 180,
            content: [
                {
                    title: 'HealthSentinel: ML-Based Outbreak Prediction',
                    description: '94% prediction accuracy using ensemble methods. Real-time dashboarding for health workers with integrated IoT sensors.',
                    tech: ['TensorFlow', 'BERT', 'CNN', 'Attention', 'NLP', 'React Native', 'Firebase'],
                    timeline: 'Jan 2025 - Present',
                    demo: 'https://healthsentinel.demo'
                },
                {
                    title: 'AgeWell: OCR-Powered Healthcare System',
                    description: '95%+ precision for medication dispensing. 97% medication adherence rates with multi-sensor health monitoring.',
                    tech: ['ESP32', 'Python', 'Firebase', 'OpenCV OCR', 'Flutter', 'IoT Sensors'],
                    timeline: 'Jan 2025 - Present'
                },
                {
                    title: 'TCOS: Computer Vision Traffic System',
                    description: '30 FPS video processing with 92% detection accuracy. 35% reduction in emergency response time.',
                    tech: ['Python', 'YOLOv5', 'OpenCV', 'CNN', 'ResNet', 'TensorFlow'],
                    timeline: 'Aug 2024 - Dec 2024'
                },
                {
                    title: 'EcoIrrigate: ML Agriculture System',
                    description: '87% accuracy for crop yield prediction. 45% reduction in water consumption with real-time monitoring.',
                    tech: ['XGBoost', 'LSTM', 'Bayesian Optimization', 'Raspberry Pi', 'Arduino', 'MQTT'],
                    timeline: 'Jun 2024 - Aug 2024'
                },
                {
                    title: 'PrimeTrade: Crypto Behavioral Finance Platform',
                    description: 'Correlation analysis between cryptocurrency trader performance and Bitcoin Fear/Greed sentiment index.',
                    tech: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis', 'API Integration'],
                    timeline: 'Oct 2024 - Dec 2024'
                },
                {
                    title: 'Local AI Chatbot',
                    description: '87% accuracy in intent classification using transformer models.',
                    tech: ['Python', 'HuggingFace Transformers', 'NLP', 'PyTorch'],
                    timeline: 'April 2024'
                }
            ]
        },
        {
            id: 'education',
            name: 'Education',
            icon: 'GraduationCap',
            color: '#ffaa00',
            lat: 0,
            lon: -90,
            content: {
                degree: {
                    name: 'B.E. Electronics & Telecommunication (Honours: Data Science)',
                    university: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
                    location: 'Pune, Maharashtra',
                    year: 'Aug 2023 - May 2027',
                    cgpa: '9.5/10.00 (Top 1% of class)',
                    highlight: '4th Semester SGPA: 10.00/10.00 (Perfect Score)'
                },
                certifications: [
                    'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
                    'Infosys Springboard - 10 Certifications (Python, ML, DL, NLP, CV, GenAI)',
                    'Google Cloud Platform - 6 Certifications (Kubernetes, Security, APIs)',
                    'Advanced C++ (Spoken Tutorial)',
                    'Cisco Networking Basics'
                ],
                coursework: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'IoT Systems', 'Data Structures']
            }
        },
        {
            id: 'achievements',
            name: 'Achievements',
            icon: 'Trophy',
            color: '#ffd700',
            lat: 50,
            lon: 45,
            content: [
                {
                    title: 'Smart India Hackathon 2025',
                    description: '2nd position among 120 teams with ML-powered healthcare solution. Selected for nationals with Team Seris Tech.'
                },
                {
                    title: 'Academic Excellence',
                    description: 'Top 1% CGPA (9.5/10.00). Perfect 4th Semester: 10.00/10.00 SGPA.'
                },
                {
                    title: 'Competitive Programming',
                    description: 'Codeforces Specialist rank. Solved 90+ DSA problems in 30 days continuously. Judge [Amateur] at GDSC MMCOE.'
                },
                {
                    title: 'Perplexity Campus Strategist',
                    description: 'Organized workshops reaching 200+ students. Increased campus AI tool adoption by 40%.'
                }
            ]
        },
        {
            id: 'contact',
            name: 'Contact',
            icon: 'Mail',
            color: '#ff0088',
            lat: 70,
            lon: 0,
            content: {
                email: 'prathameshfuke@icloud.com',
                phone: '+91-7249371213',
                location: 'Pune, Maharashtra, India',
                availability: 'Immediately available. Open to internships and full-time positions starting January 2026.',
                links: {
                    linkedin: 'https://linkedin.com/in/prathamesh-fuke-094642282',
                    github: 'https://github.com/prathameshfuke',
                    codeforces: 'https://codeforces.com/profile/shuracodes'
                },
                languages: ['English (Professional)', 'Hindi (Fluent)', 'Marathi (Native)']
            }
        }
    ]
}
