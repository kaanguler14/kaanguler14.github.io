/* ============================================================
   CHATBOT WIDGET — HR Q&A about Kaan Güler
   ============================================================ */
(function () {
    'use strict';

    /* ── Knowledge Base ─────────────────────────────────────── */
    const KB = {
        name: 'Kaan Güler',
        title: 'AI / Deep Learning Engineer',
        email: 'glerkaan@yahoo.com',
        location: 'Ankara, Türkiye',
        github: 'https://github.com/kaanguler14',
        linkedin: 'https://linkedin.com/in/gulerkaan',
        university: 'TED University',
        degree: 'B.Sc. in Computer Engineering (High Honors)',
        gpa: '3.60 / 4.00',
        honors: 'High Honors',
        gradYear: '2020 – 2025',
        languages: ['Python', 'C++', 'C#', 'SQL', 'JavaScript'],
        spokenLanguages: ['Turkish (Native)', 'English (Fluent, IELTS 6.5)'],
        skills: {
            computerVision: ['Object Detection', 'Semantic Segmentation', 'OpenCV', 'CUDA', 'Edge Inference'],
            machineLearning: ['PyTorch', 'CNNs', 'Transformers', 'Model Quantization', 'MLflow', 'Optuna'],
            generativeAI: ['Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'LangGraph', 'LangChain', 'LlamaIndex', 'vLLM', 'Ollama'],
            backend: ['FastAPI (async)', 'Node.js / Express.js', '.NET Core / ASP.NET Core', 'RESTful APIs', 'PostgreSQL', 'Qdrant', 'ChromaDB', 'Redis'],
            tools: ['Docker', 'Git', 'GitHub Actions', 'Unix/Linux']
        },
        experience: [
            {
                company: 'AI / Backend Engineer (Freelance)',
                period: 'Jun 2025 – Present',
                role: 'Remote / Bolu, Turkey',
                work: 'Contributed backend and AI features to a production mobile application. Designed and integrated LLM-powered features (semantic search, conversational assistant, smart suggestions) via async FastAPI services.'
            },
            {
                company: 'Computer Vision Sub-Team Lead | Autonomous Vehicle',
                period: 'Sep 2024 – Jun 2025',
                role: 'TEDU (Funded Research), Ankara, Turkey',
                work: 'Led the computer vision team for perception systems of an autonomous scale vehicle. Developed PyTorch models optimized for low-latency edge inference via CUDA and model quantization.'
            },
            {
                company: 'Usta Bilgi Sistemleri',
                period: 'Aug – Sep 2024',
                role: 'Computer Engineer Intern',
                work: 'Built backend components for a document-signing app using .NET, React, PostgreSQL, and Docker.'
            },
            {
                company: 'HAVELSAN',
                period: 'Jul – Aug 2024',
                role: 'Computer Engineer Intern',
                work: 'Contributed to defense-industry backend systems in C++, integrating native C++ modules with Node.js via Koffi FFI.'
            },
            {
                company: 'Ziraat Technology',
                period: 'Jul – Sep 2023',
                role: 'Computer Engineer Intern',
                work: 'Developed RESTful APIs and MVC architectures for regulated financial applications using ASP.NET Core and SQL Server.'
            }
        ],
        projects: [
            {
                name: 'CurriculumForge | Autonomous Multi-Agent Reasoning System',
                desc: 'Architected a 5-agent LangGraph reasoning pipeline producing grounded, schema-validated outputs from minimal input, applying multi-step reasoning orchestration to complex generation problems.',
                tech: 'Python, LangGraph, ChromaDB, SQLite, Ollama / Gemini'
            },
            {
                name: 'TestForge | Multi-Agent AI Test Generation System',
                desc: 'Built an agentic reasoning system (writer, runner, analyzer, suggester) that autonomously generates, executes, and analyzes software tests in Docker-sandboxed runtimes.',
                tech: 'Python, LangGraph, OpenAI API, Docker, GitHub Actions'
            },
            {
                name: 'Pressing Analyst Bot | Real-Time Streaming RAG Assistant',
                desc: 'Engineered real-time, low-latency streaming completions for token-by-token UX over a grounded sports analytics dataset using OpenAI function calling and similarity retrieval.',
                tech: 'Python, OpenAI API, Cosine-Similarity Embeddings, Streaming'
            },
            {
                name: 'InsightMail | Local-First, On-Premise AI Assistant',
                desc: 'Built a privacy-preserving, fully on-premise assistant running locally hosted LLM inference (Ollama LLaMA) with concurrent async FastAPI service, IMAP ingestion, and Qdrant vector indexing.',
                tech: 'Python, FastAPI, LLaMA, Qdrant, Sentence Transformers'
            },
            {
                name: 'Autonomous Scale Vehicle (TEDU Research)',
                desc: 'Led the CV sub-team, delivering low-latency object detection and semantic segmentation models in PyTorch optimized for resource-constrained edge devices via GPU/CUDA-aware optimization and model quantization.',
                tech: 'Python, PyTorch, OpenCV, CUDA, MLflow, Optuna'
            }
        ],
        certifications: ['Unity Learn Patikası (Patika.dev)', 'Python 101/201/301 (Turkcell)', 'Machine Learning Introduction (Coursera)'],
        activities: ['Tedu Game Dev & Animation Society (Supervisory Board Member)', 'Tedu IEEE (Game Jam Mentor)', 'AlecTed Team (Shell Eco-Marathon autonomous-vehicle software)'],
        strengths: 'Team-oriented, solution-focused, eager to learn innovative technologies. Strong background in AI, computer vision, and backend development with production deployment experience (FastAPI, PyTorch, Docker, LangGraph).'
    };

    /* ── Intent Matching ────────────────────────────────────── */
    const intents = [
        {
            keys: ['merhaba', 'selam', 'hey', 'hello', 'hi', 'günaydın', 'iyi günler'],
            answer: () => `Hello! I'm Kaan's portfolio assistant. You can ask me about his education, experience, skills, projects, or how to contact him. How can I help?`
        },
        {
            keys: ['who', 'kim', 'yourself', 'about', 'hakkında', 'tanıt', 'introduce', 'tell me about', 'kaan'],
            answer: () => `${KB.name} is a ${KB.title} who graduated from ${KB.university} with ${KB.honors} (GPA ${KB.gpa}). He specializes in AI, Computer Vision, and Backend Development with real-world deployment experience on edge devices like NVIDIA Jetson Nano.`
        },
        {
            keys: ['education', 'eğitim', 'university', 'üniversite', 'degree', 'gpa', 'school', 'okul', 'mezun', 'graduate'],
            answer: () => `${KB.university}\n${KB.degree}\nGPA: ${KB.gpa} (${KB.honors})\nPeriod: ${KB.gradYear}`
        },
        {
            keys: ['experience', 'internship', 'staj', 'deneyim', 'work', 'iş', 'çalış', 'havelsan', 'ziraat', 'usta'],
            answer: () => {
                let txt = `Kaan has experience across freelance, research, and internship roles:\n\n`;
                KB.experience.forEach((i, idx) => {
                    txt += `${idx + 1}. ${i.company} (${i.period})\n   ${i.role}\n   ${i.work}\n\n`;
                });
                return txt;
            }
        },
        {
            keys: ['skill', 'yetenek', 'beceri', 'technology', 'teknoloji', 'what can', 'ne bilir', 'stack', 'tools'],
            answer: () => `Computer Vision: ${KB.skills.computerVision.join(', ')}\n\nMachine Learning: ${KB.skills.machineLearning.join(', ')}\n\nGenerative AI & LLMs: ${KB.skills.generativeAI.join(', ')}\n\nBackend: ${KB.skills.backend.join(', ')}\n\nLanguages & Databases: ${KB.skills.languages.join(', ')}\n\nDevelopment Tools: ${KB.skills.tools.join(', ')}`
        },
        {
            keys: ['programming', 'language', 'dil', 'python', 'java', 'c++'],
            answer: () => `Programming Languages: ${KB.languages.join(', ')}\n\nSpoken Languages: ${KB.spokenLanguages.join(', ')}`
        },
        {
            keys: ['project', 'proje', 'portfolio'],
            answer: () => {
                let txt = `Kaan has worked on 11+ projects. Here are the highlights:\n\n`;
                KB.projects.forEach((p, idx) => {
                    txt += `${idx + 1}. ${p.name}\n   ${p.desc}\n   Tech: ${p.tech}\n\n`;
                });
                return txt;
            }
        },
        {
            keys: ['autonomous', 'car', 'araç', 'otonom', 'vehicle', 'jetson', 'rc car'],
            answer: () => {
                const p = KB.projects[0];
                return `🚗 ${p.name}\n\n${p.desc}\n\nTechnologies: ${p.tech}`;
            }
        },
        {
            keys: ['basketball', 'basketbol', 'sport', 'yolo', 'deepsort', 'tracking'],
            answer: () => {
                const p = KB.projects[1];
                return `${p.name}\n\n${p.desc}\n\nTechnologies: ${p.tech}`;
            }
        },
        {
            keys: ['rag', 'llm', 'chatbot', 'whatsapp', 'email', 'insightmail', 'assistant', 'retrieval'],
            answer: () => {
                const p = KB.projects[2];
                return `${p.name}\n\n${p.desc}\n\nTechnologies: ${p.tech}`;
            }
        },
        {
            keys: ['ecomap', 'satellite', 'uydu', 'senior', 'capstone', 'bitirme'],
            answer: () => {
                const p = KB.projects[3];
                return `${p.name}\n\n${p.desc}\n\nTechnologies: ${p.tech}`;
            }
        },
        {
            keys: ['tensorrt', 'edge', 'embedded', 'jetson', 'deploy', 'inference', 'optimization'],
            answer: () => `Kaan has hands-on experience deploying AI models on edge devices:\n\n• Deployed object detection & semantic segmentation on NVIDIA Jetson Nano\n• Used TensorRT for model quantization and acceleration\n• Optimized real-time inference for closed-loop autonomous vehicle control\n• Also optimized YOLOv8 inference with TensorRT on NVIDIA GPUs for the Basketball Analysis project`
        },
        {
            keys: ['contact', 'iletişim', 'email', 'mail', 'reach', 'ulaş', 'phone', 'telefon'],
            answer: () => `Email: ${KB.email}\nGitHub: ${KB.github}\nLinkedIn: ${KB.linkedin}\nLocation: ${KB.location}`
        },
        {
            keys: ['cv', 'resume', 'özgeçmiş'],
            answer: () => `You can download Kaan's CV from the homepage. Click the "Download CV" button at the top of the page, or visit the Home page.`
        },
        {
            keys: ['certificate', 'sertifika', 'certification', 'coursera', 'patika'],
            answer: () => `Certifications:\n${KB.certifications.map(c => '- ' + c).join('\n')}`
        },
        {
            keys: ['activity', 'aktivite', 'club', 'kulüp', 'community', 'topluluk', 'member', 'üye'],
            answer: () => `Memberships & Activities:\n${KB.activities.map(a => '- ' + a).join('\n')}`
        },
        {
            keys: ['strength', 'güçlü', 'strong', 'avantaj', 'advantage', 'why hire', 'neden', 'niye'],
            answer: () => `${KB.strengths}`
        },
        {
            keys: ['deep learning', 'derin öğrenme', 'neural', 'model', 'machine learning'],
            answer: () => `Kaan has strong ML/DL experience:\n\n• PyTorch-based model training for semantic segmentation (UNet) and object detection (YOLOv8)\n• TensorRT model quantization and acceleration for edge deployment\n• MLflow for experiment tracking, Optuna for hyperparameter optimization\n• Research on energy-efficient CNN architectures for autonomous vehicles\n• RAG pipeline with Llama 3.2 for local LLM inference`
        },
        {
            keys: ['computer vision', 'cv', 'görüntü', 'vision', 'opencv'],
            answer: () => `Kaan's computer vision expertise includes:\n\n• Object detection (YOLOv8) and multi-object tracking (DeepSORT)\n• Semantic segmentation with UNet on satellite imagery\n• Lane detection for autonomous driving\n• Pose estimation and homography-based mapping\n• Real-time video processing pipelines with OpenCV\n• Vision-Language Models (VLMs) for dataset labeling`
        },
        {
            keys: ['backend', 'web', 'fullstack', 'full-stack', 'api', 'frontend'],
            answer: () => `Web & Backend Skills:\n\n- Backend: ASP.NET Core, Node.js/Express, Django REST, Flask, FastAPI\n- Frontend: React.js, Vue.js\n- Databases: MySQL, MS SQL, MongoDB, PostgreSQL, Qdrant\n- Containerization: Docker\n- Gained practical experience through internships at HAVELSAN, Ziraat Technology, and Usta Bilgi Sistemleri`
        },
        {
            keys: ['game', 'oyun', 'unity', 'godot', 'zombie'],
            answer: () => `Game Development:\n\n- Zombie Defense: A Unity survival game with crafting and AI enemies\n- Football Card Game: Card game in Java\n- Supervisory Board Member at Tedu Game Dev & Animation Society\n- Mentored students at Game Jam events (IEEE, Google DSC)`
        },
        {
            keys: ['available', 'müsait', 'open to', 'looking for', 'arıyor', 'position', 'full-time', 'role'],
            answer: () => `Kaan is open to full-time roles, internships, and research collaborations in AI, Computer Vision, and Software Engineering.\n\nYou can reach him at: ${KB.email}\nLinkedIn: ${KB.linkedin}`
        },
        {
            keys: ['teşekkür', 'thanks', 'thank you', 'sağol'],
            answer: () => `You're welcome! Feel free to ask anything else about Kaan, or reach out to him directly at ${KB.email}.`
        }
    ];

    const defaultAnswer = `I'm not sure about that, but I can help with questions about Kaan's:\n\n- Education & GPA\n- Internship experience\n- AI & CV skills\n- Projects\n- Contact info\n- Certifications\n- Strengths\n\nTry asking something like "What are his skills?" or "Tell me about his projects".`;

    /* ── Topic-based project tags for filtering ─────────────── */
    const projectTags = {
        'computer vision': [0, 1, 3, 4],    // Autonomous Car, Basketball, Ecomap, CNNs research
        'vision': [0, 1, 3, 4],
        'cv': [0, 1, 3, 4],
        'deep learning': [0, 1, 3, 4],
        'machine learning': [0, 1, 2, 3, 4],
        'ai': [0, 1, 2, 3, 4],
        'web': [3, 5, 6],
        'backend': [2, 5, 6],
        'fullstack': [3, 5, 6],
        'full-stack': [3, 5, 6],
        'game': [7],
        'unity': [7],
        'rag': [2],
        'llm': [2],
        'nlp': [2],
        'embedded': [0],
        'edge': [0],
        'tensorrt': [0, 1],
        'ros': [0],
        'tracking': [1],
        'detection': [0, 1],
        'segmentation': [0, 3, 4],
        'python': [0, 1, 2, 3, 4, 6],
        'react': [3],
        'django': [5],
        'flask': [2, 3],
        'fastapi': [2],
    };

    function findAnswer(input) {
        const lower = input.toLowerCase().replace(/[?!.,;:]/g, '');

        /* ── Combo detection: "projects about <topic>" ──────── */
        const wantsProjects = /(project|proje|portfolio)/.test(lower);
        if (wantsProjects) {
            // Check if a topic filter also appears
            for (const [topic, indices] of Object.entries(projectTags)) {
                if (lower.includes(topic)) {
                    const filtered = indices.map(i => KB.projects[i]);
                    let txt = `Here are Kaan's projects related to "${topic}":\n\n`;
                    filtered.forEach((p, idx) => {
                        txt += `${idx + 1}. ${p.name}\n   ${p.desc}\n   Tech: ${p.tech}\n\n`;
                    });
                    return txt;
                }
            }
        }

        /* ── Standard intent matching ──────────────────────── */
        let bestMatch = null;
        let bestScore = 0;

        for (const intent of intents) {
            let score = 0;
            for (const key of intent.keys) {
                if (lower.includes(key.toLowerCase())) {
                    score += key.length;
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = intent;
            }
        }

        return bestMatch ? bestMatch.answer() : defaultAnswer;
    }

    /* ── Quick Questions ────────────────────────────────────── */
    const quickQuestions = [
        { label: 'Who is Kaan?', q: 'Who is Kaan?' },
        { label: 'Experience', q: 'Tell me about his experience' },
        { label: 'Skills', q: 'What are his skills?' },
        { label: 'Projects', q: 'What projects has he worked on?' },
        { label: 'Contact', q: 'How can I contact him?' }
    ];

    /* ── Render Widget ──────────────────────────────────────── */
    function createWidget() {
        const widget = document.createElement('div');
        widget.id = 'chatbot-widget';
        widget.innerHTML = `
      <button id="chatbot-toggle" aria-label="Open chat">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
      <div id="chatbot-panel">
        <div id="chatbot-header">
          <div class="chatbot-header-info">
            <span class="chatbot-avatar">KG</span>
            <div>
              <strong>Kaan's Assistant</strong>
              <small>Ask me anything about Kaan</small>
            </div>
          </div>
          <button id="chatbot-close" aria-label="Close chat">&times;</button>
        </div>
        <div id="chatbot-messages"></div>
        <div id="chatbot-quick"></div>
        <div id="chatbot-input-area">
          <input type="text" id="chatbot-input" placeholder="Ask a question..." autocomplete="off" />
          <button id="chatbot-send" aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    `;
        document.body.appendChild(widget);

        // Elements
        const toggle = document.getElementById('chatbot-toggle');
        const panel = document.getElementById('chatbot-panel');
        const close = document.getElementById('chatbot-close');
        const messages = document.getElementById('chatbot-messages');
        const input = document.getElementById('chatbot-input');
        const sendBtn = document.getElementById('chatbot-send');
        const quickEl = document.getElementById('chatbot-quick');

        let isOpen = false;

        function togglePanel() {
            isOpen = !isOpen;
            panel.classList.toggle('open', isOpen);
            toggle.classList.toggle('hidden', isOpen);
            if (isOpen) {
                input.focus();
                if (messages.childElementCount === 0) showWelcome();
            }
        }

        toggle.addEventListener('click', togglePanel);
        close.addEventListener('click', togglePanel);

        function addMessage(text, sender) {
            const div = document.createElement('div');
            div.className = `chatbot-msg ${sender}`;
            div.textContent = text;
            messages.appendChild(div);
            messages.scrollTop = messages.scrollHeight;
        }

        function showWelcome() {
            addMessage("Hello! 👋 I'm Kaan's portfolio assistant. Ask me about his education, experience, skills, projects, or contact info!", 'bot');
            renderQuickQuestions();
        }

        function renderQuickQuestions() {
            quickEl.innerHTML = '';
            quickQuestions.forEach(qq => {
                const btn = document.createElement('button');
                btn.className = 'quick-btn';
                btn.textContent = qq.label;
                btn.addEventListener('click', () => handleSend(qq.q));
                quickEl.appendChild(btn);
            });
        }

        function handleSend(text) {
            const t = (text || input.value).trim();
            if (!t) return;
            input.value = '';
            quickEl.innerHTML = '';
            addMessage(t, 'user');

            setTimeout(() => {
                const answer = findAnswer(t);
                addMessage(answer, 'bot');
                renderQuickQuestions();
            }, 300 + Math.random() * 400);
        }

        sendBtn.addEventListener('click', () => handleSend());
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }

    /* ── Inject Styles ──────────────────────────────────────── */
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
      #chatbot-widget {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 9999;
        font-family: 'Inter', sans-serif;
      }

      #chatbot-toggle {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #2dd4bf, #22d3ee);
        color: #020617;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(45,212,191,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }

      #chatbot-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 28px rgba(45,212,191,0.55);
      }

      #chatbot-toggle.hidden { display: none; }

      #chatbot-panel {
        display: none;
        flex-direction: column;
        width: 380px;
        max-height: 520px;
        background: #1e293b;
        border: 1px solid rgba(45,212,191,0.2);
        border-radius: 16px;
        box-shadow: 0 12px 48px rgba(0,0,0,0.5);
        overflow: hidden;
      }

      #chatbot-panel.open { display: flex; }

      #chatbot-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.9rem 1.1rem;
        background: #0f172a;
        border-bottom: 1px solid rgba(45,212,191,0.15);
      }

      .chatbot-header-info {
        display: flex;
        align-items: center;
        gap: 0.65rem;
      }

      .chatbot-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2dd4bf, #22d3ee);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Orbitron', sans-serif;
        font-size: 0.72rem;
        font-weight: 700;
        color: #020617;
        flex-shrink: 0;
      }

      .chatbot-header-info strong {
        color: #e2e8f0;
        font-size: 0.88rem;
        display: block;
      }

      .chatbot-header-info small {
        color: #94a3b8;
        font-size: 0.72rem;
      }

      #chatbot-close {
        background: none;
        border: none;
        color: #94a3b8;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.25rem;
        transition: color 0.2s;
        line-height: 1;
      }

      #chatbot-close:hover { color: #2dd4bf; }

      #chatbot-messages {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        min-height: 240px;
        max-height: 320px;
      }

      #chatbot-messages::-webkit-scrollbar { width: 4px; }
      #chatbot-messages::-webkit-scrollbar-thumb { background: rgba(45,212,191,0.25); border-radius: 4px; }

      .chatbot-msg {
        max-width: 88%;
        padding: 0.65rem 0.9rem;
        border-radius: 12px;
        font-size: 0.82rem;
        line-height: 1.55;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .chatbot-msg.bot {
        background: rgba(45,212,191,0.08);
        border: 1px solid rgba(45,212,191,0.15);
        color: #e2e8f0;
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }

      .chatbot-msg.user {
        background: #2dd4bf;
        color: #020617;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
        font-weight: 500;
      }

      #chatbot-quick {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        padding: 0 1rem 0.5rem;
      }

      .quick-btn {
        background: rgba(45,212,191,0.08);
        border: 1px solid rgba(45,212,191,0.2);
        color: #2dd4bf;
        padding: 0.3rem 0.65rem;
        border-radius: 16px;
        font-size: 0.7rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .quick-btn:hover {
        background: rgba(45,212,191,0.18);
        border-color: #2dd4bf;
      }

      #chatbot-input-area {
        display: flex;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border-top: 1px solid rgba(45,212,191,0.1);
        background: #0f172a;
      }

      #chatbot-input {
        flex: 1;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        padding: 0.5rem 0.75rem;
        color: #e2e8f0;
        font-size: 0.82rem;
        font-family: 'Inter', sans-serif;
        outline: none;
        transition: border-color 0.2s;
      }

      #chatbot-input::placeholder { color: #64748b; }
      #chatbot-input:focus { border-color: rgba(45,212,191,0.4); }

      #chatbot-send {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        border: none;
        background: #2dd4bf;
        color: #020617;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        flex-shrink: 0;
      }

      #chatbot-send:hover {
        background: #14b8a6;
        transform: scale(1.05);
      }

      @media (max-width: 480px) {
        #chatbot-panel {
          width: calc(100vw - 2rem);
          max-height: 70vh;
          bottom: 0;
          right: 0;
          border-radius: 16px 16px 0 0;
        }

        #chatbot-widget { bottom: 1rem; right: 1rem; }
      }
    `;
        document.head.appendChild(style);
    }

    /* ── Init ────────────────────────────────────────────────── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { injectStyles(); createWidget(); });
    } else {
        injectStyles();
        createWidget();
    }
})();
