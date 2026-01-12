export type ProjectCategory = "all" | "fullstack" | "ai" | "aiiml" | "aiagent" | "chatbot" | "mobile"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  Inprogress?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Management SaaS Platform",
    description:
      "Developed a subscription-based Social Media Management SaaS platform with email authentication, Stripe-powered planmanagement, role-based access control, and an admin dashboard to manage users, subscriptions, limits, and platform usage.",
    image: "/projects/social-media-saas-realistic.png",
    category: ["fullstack"],
    technologies: ["Nextjs", "Saas", "Mongo","Node", "Express"],
    Inprogress: true
  },
  {
    id: 2,
    title: "Lahori Food - Online Food Ordering System",
    description:
      "Built a food ordering website with dynamic menus, category-based filtering, cart functionality, and order placement. Focused on responsive UI and smooth user experience for restaurant customers.",
    image: "/projects/Screenshot (197).png",
    category: ["fullstack"],
    technologies: ["React", "Redux Toolkit", "Bootstrap", "JavaScript"],
    liveUrl: "https://lahorifood.netlify.app/",
  },
  {
    id: 3,
    title: "Kingdom Rides - Transport & Booking Website",
    description:
      "Created a professional transport booking website with service listings, inquiry forms, and booking flow. Optimized for performance and SEO to support business growth in the UK market.",
    image: "/projects/Screenshot (198).png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    liveUrl: "https://kingdomrides.co.uk/",
  },
  {
    id: 4,
    title: "Binkyit - Online Food Delivery Platform",
    description:
      "Built an online food delivery platform with  menu management, and order handling. Designed a scalable backend structure to support multiple vendors.",
    image: "/projects/binkyit-realistic.png",
    category: ["fullstack"],
    technologies: ["Node js", "React", "MongoDb", "JavaScript"],
    // liveUrl: "http://foodyxpress.com/",
  },
  {
    id: 5,
    title: "FoodyXpress - Online Food Delivery Platform",
    description:
      "Built an online food delivery platform with restaurant listings, menu management, and order handling. Designed a scalable backend structure to support multiple vendors.",
    image: "/projects/Screenshot (199).png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "JavaScript"],
    liveUrl: "http://foodyxpress.com/",
  },
  {
    id: 6,
    title: "FoodyDesign - Restaurant Website Builder",
    description:
      "Developed a restaurant-focused website showcasing menus, services, and branding elements. Emphasized clean UI design and fast loading performance.",
    image: "/projects/Screenshot (200).png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    liveUrl: "http://foodydesign.com/",
  },
  {
    id: 7,
    title: "Getshopin - Multi-Tenancy E-commerce Management System",
    description:
      "Worked on a multi-tenancy Laravel project for E-comerce management. Implemented tenant isolation, role-based access, and scalable architecture to support multiple organizations within a single codebase.",
    image: "/projects/image.png",
    category: ["fullstack"],
    technologies: ["Laravel", "Multi-Tenancy", "MySQL", "Blade", "JavaScript", "Vue js"],
    liveUrl: "https://getshopin.tdemo.biz/"
  },
  {
    id: 8,
    title: "Crystal Cosmetics - E-Commerce Platform",
    description:
      "Developed a full-featured cosmetics e-commerce platform with product catalog, categories, cart, checkout, and user authentication. Implemented admin-side product and order management with a clean and scalable architecture.",
    image: "/projects/Screenshot (196).png",
    category: ["fullstack"],
    technologies: ["React", "Redux Toolkit", "Bootstrap", "JavaScript"],
    liveUrl: "https://crystalcosmetics.netlify.app/",
  },
  // Added Projects
  {
    id: 9,
    title: "SmartHire - AI-Powered Recruitment Platform",
    description:
      "Built an AI-based platform to automate job postings, candidate screening, and interview scheduling. Integrated OpenAI API for intelligent resume evaluation and summary generation. Developed backend using Django REST Framework with PostgreSQL. Reduced shortlisting time by over 60% through AI automation.",
    image: "/projects/smarthire.png",
    category: ["fullstack", "ai", "aiiml"],
    technologies: ["Next.js", "Django REST Framework", "OpenAI", "PostgreSQL", "TypeScript"],
    liveUrl: "https://smarthirre.ai/",
    githubUrl: "https://github.com/talibraath/SmartHire",
  },
  {
    id: 10,
    title: "Book-Vault - Online Bookstore",
    description:
      "Developed a full-stack Online Bookstore using React (frontend) and Django Rest Framework (backend). Implemented JWT authentication, role-based access, and profile management. Built APIs for book catalog, search/filtering, and order management with PostgreSQL. Added admin controls for inventory, users, and order workflows.",
    image: "/projects/book-vault.png",
    category: ["fullstack"],
    technologies: ["React", "Django REST Framework", "PostgreSQL", "JWT", "REST API"],
    liveUrl: "https://book-vault-frontent.vercel.app/",
  },
  {
    id: 11,
    title: "Skill Map Navigator - Career Pathway Explorer",
    description:
      "Developed a tool that suggests learning resources and job roles based on user skills. Used React for the front-end and Node.js for backend service integration. Helped users find relevant opportunities, improving career planning efficiency.",
    image: "/projects/skillsnavigator.png",
    category: ["fullstack", "ai", "aiiml"],
    technologies: ["React", "Node.js", "OpenAI", "Express", "REST API"],
    liveUrl: "https://skillmapnavigator.com/",
    githubUrl: "https://github.com/talibraath/SkillsMap-Navigator",
  },
  {
    id: 12,
    title: "AI-Scorer - Automated Answer Evaluation Tool",
    description:
      "Created a web app using LLMs to evaluate student answers and provide instant feedback. Integrated OpenAI API for content understanding and evaluation logic. Reduced grading time by 50% via real-time, automated scoring. Built using Next.js and Node.js for scalability and performance.",
    image: "/projects/ai-scorer.png",
    category: ["fullstack", "ai", "aiiml"],
    technologies: ["Next.js", "Node.js", "OpenAI", "TypeScript", "TailwindCSS"],
    liveUrl: "https://ai-scorer.vercel.app/",
    githubUrl: "https://github.com/talibraath/ai-scorer",
  },
  {
    id: 13,
    title: "StoryNest - Personalized Story Generator",
    description:
      "Built a story creation tool using OpenAI with Stripe integration for monetization. Enabled PDF export and custom story generation for over 500 users. Increased engagement by combining AI with personalized storytelling.",
    image: "/projects/storynest.png",
    category: ["ai", "fullstack", "aiiml"],
    technologies: ["React", "OpenAI", "Stripe", "Node.js", "PDF Export"],
    githubUrl: "https://github.com/StoryNest",
  },
  {
    id: 14,
    title: "AiExpense Reports - Automated Expense Report",
    description:
      "Built a web-based tool using AI for receipt classification and data extraction. Integrated OpenAI for NLP-based parsing and React for the user interface. Reduced manual financial reporting workload by 70%.",
    image: "/projects/aiexpensereport.png",
    category: ["ai", "fullstack", "aiiml"],
    technologies: ["React", "Node.js", "OCR", "OpenAI", "OpenCV"],
    liveUrl: "https://aiexpensereport.com/",
  },
  {
    id: 15,
    title: "Costa Rica Villas - Booking Chatbot Integration",
    description:
      "Embedded a WordPress chatbot to manage booking inquiries and summarize customer intents. Reduced manual booking tasks by 70% and doubled response time. Automated lead capture and reservation team notifications.",
    image: "/projects/costarica.png",
    category: ["aiagent", "chatbot"],
    technologies: ["WordPress", "Chatbot", "AI Agent", "OpenAI", "Gmail API"],
    liveUrl: "https://costaricastarvillas.com/",
  },
  {
    id: 16,
    title: "Write on Time - AI Email Generator",
    description:
      "Created an email writing assistant using the MERN stack and OpenAI API. Increased writing productivity by 40% with intelligent draft suggestions. Streamlined email creation for non-profit organizations.",
    image: "/projects/write_on_time.png",
    category: ["ai", "fullstack", "aiiml"],
    technologies: ["React", "MongoDB", "Express", "Node.js", "OpenAI", "Gmail API"],
    liveUrl: "https://writeontimenonprofit.netlify.app/",
    githubUrl: "https://github.com/talibraath/Write-on-Time",
  },
  {
    id: 17,
    title: "MerrimackValley Roofing & Gutter Cleaning",
    description:
      "Implemented a chatbot integration on WordPress to automate lead generation and enhance customer engagement. Sends chat summaries of each potential lead to the team for follow-up.",
    image: "/projects/merrimack.png",
    category: ["aiagent", "chatbot"],
    technologies: ["WordPress", "Chatbot", "AI Agent", "OpenAI", "Lead Generation"],
    liveUrl: "https://merrimackvalleyroofing.com/",
  },
  {
    id: 18,
    title: "SiGod - AI Chatbot",
    description:
      "SiGod is a ChatGPT-style AI chatbot using OpenAI and Pinecone for smart, context-aware conversations. Features vector search for improved response accuracy and conversation memory.",
    image: "/projects/sigod.png",
    category: ["ai", "aiagent", "chatbot", "aiiml"],
    technologies: ["Next.js", "OpenAI", "Pinecone", "TypeScript", "MongoDB"],
    liveUrl: "https://sigod.com/",
    githubUrl: "https://github.com/talibraath/Sigod",
  },
  {
    id: 19,
    title: "Novelty Logistics",
    description:
      "Developed a logistics management website to enhance shipment tracking, logistics operations, and customer experience. Integrated with Firebase for real-time updates.",
    image: "/projects/novelty_logistics.png",
    category: ["fullstack"],
    technologies: ["Next.js", "Node.js", "Firebase", "Google Forms"],
    liveUrl: "https://noveltylogistics.vercel.app/",
    githubUrl: "https://github.com/talibraath/Novelty-logistics",
  },
  {
    id: 20,
    title: "Predict Weather",
    description:
      "Developed a weather prediction application using OpenWeather API to provide accurate weather forecasts. Features real-time weather data and 5-day forecasts.",
    image: "/projects/predict_weather.png",
    category: ["fullstack"],
    technologies: ["React", "API Integration", "OpenWeather API"],
    liveUrl: "https://predictweather.netlify.app/",
    githubUrl: "https://github.com/talibraath/WeatherApp",
  },
  {
    id: 21,
    title: "Dastan-e-Sukhan - Urdu Poetry Generator",
    description:
      "A Streamlit app that generates Urdu poetry using LSTM and Seq2Seq models. Trained on classical Urdu poetry corpus for authentic verse generation.",
    image: "/projects/dastan-e-sukhan.png",
    category: ["ai", "aiiml"],
    technologies: ["Python", "Seq2Seq", "LSTM", "NLP", "Streamlit", "TensorFlow"],
    liveUrl: "https://dastan-e-sukhan.streamlit.app/",
    githubUrl: "https://github.com/talibraath/Dastan-e-Sukhan",
  },
  {
    id: 22,
    title: "Arabic to English Translation",
    description:
      "A neural machine translation app using Seq2Seq architecture for accurate Arabic to English translation. Trained on parallel corpus for high-quality translations.",
    image: "/projects/arabic_trans.png",
    category: ["ai", "aiiml"],
    technologies: ["Python", "Seq2Seq", "NLP", "Streamlit", "TensorFlow"],
    liveUrl: "https://englishtoarabic.streamlit.app/",
    githubUrl: "https://github.com/talibraath/english-to-arabic",
  },
  // New Mobile Projects
  {
    id: 23,
    title: "AI Fitness Trainer",
    description:
      "Mobile app featuring real-time AI pose estimation to track workout form and provide instant feedback. Built with React Native and TensorFlow.js.",
    image: "/projects/ai-fitness-trainer.png",
    category: ["mobile", "aiiml"],
    technologies: ["React Native", "TensorFlow.js", "AI Pose Estimation", "TypeScript"],
    Inprogress: true
  },
  {
    id: 24,
    title: "SmartExpense Mobile",
    description:
      "AI-powered mobile expense tracker with OCR for receipt scanning and intelligent categorization. Features beautiful data visualization and cloud sync.",
    image: "/projects/smartexpense-mobile.png",
    category: ["mobile", "aiiml"],
    technologies: ["React Native", "OCR", "OpenAI", "Firebase", "Victory Native"],
  },
  {
    id: 25,
    title: "TravelWise AI Agent",
    description:
      "A travel assistant mobile app that uses GPT-4 to generate personalized itineraries and handle booking inquiries via natural language.",
    image: "/projects/travelwise-ai.png",
    category: ["mobile", "aiagent", "chatbot"],
    technologies: ["React Native", "OpenAI", "Google Maps API", "Node.js"],
  },
]

export default projects
