export const portfolioData = {
  profile: {
    name: "Md. Ashiqur Rahman Zayed",
    role: "Software Engineer",
    company: "Strativ AB",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQEXdyTp5-TVTg/profile-displayphoto-crop_800_800/B56ZyoU5s8KMAI-/0/1772350586575?e=1779926400&v=beta&t=PpelsfVY6mKx2QN-qbadotfIglBjbWdthvbngHT_l6M",
    email: "mdarzayed01@gmail.com",
    phone: "+88 01558920843",
    location: "Dhaka, Bangladesh",
    locationLink: "https://maps.app.goo.gl/7wLcJhHiEoJr9Yik7",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233013.5361534093!2d90.34772926521753!3d23.87107764999819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42a59476447%3A0x924a6ea3d6644b69!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1750000000000!5m2!1sen!2sbd",
    socials: [
      { href: "https://www.linkedin.com/in/md-ashiqur-rahman-zayed", label: "LinkedIn" },
      { href: "https://github.com/MdAshiqurRahmanZayed/", label: "GitHub" },
      { href: "https://www.facebook.com/mdashiqurrahman.zayed", label: "Facebook" },
    ],
  },
  about: {
    bio: "I am {name}, a {role} at {company} specializing in backend development and LLM-based solutions. With a strong foundation in building scalable, production-ready systems, I bring a practical approach to integrating AI and large language models into real-world business workflows. Driven by a passion for intelligent software, I thrive at the intersection of backend engineering and applied AI — crafting solutions that are not only technically sound but also impactful at scale.",
    stats: [
      { label: "YEARS OF EXPERIENCE", value: "+1.5" },
      { label: "PROJECTS COMPLETED", value: "+10" },
      { label: "INDUSTRIAL PROJECTS CONTRIBUTED", value: "4" },
      { label: "CERTIFICATIONS", value: "4+" },
    ],
  },
  experience: [
    {
      company: "Strativ AB",
      role: "Software Engineer (Backend)",
      period: "September 2024 - Present",
      description: [
        "Developed a meeting management module integrating Google Calendar, custom business logic, WebSockets, and a Chrome extension to enable seamless real-time communication",
        "Implemented an automated report scheduling system that generated and delivered reports on schedule, reducing manual effort and improving efficiency",
        "Contributed to Strativ's ERP system (prognosis, billing modules etc), Customer Portal, and KPI Dashboard, delivering end-to-end features across internal operations",
        "Experienced in client-based projects, delivering hands-on support and solutions across the full project lifecycle.",
      ],
    },
    {
      company: "Strativ AB",
      role: "Intern",
      period: "June 2024 - August 2024",
      description: [
        "Developed backend modules using Django, gaining hands-on experience in REST API design and database integration.",
        "Gained foundational understanding of LLMs",
      ],
    },
  ],
  education: [
    {
      institution: "Noakhali Science and Technology University",
      degree: "BSc. in Computer Science and Telecommunication Engineering",
      description: "Studied Computer Science with focus on telecommunications engineering.",
    },
  ],
  skills: [
    { name: "Languages", items: ["Python", "JavaScript", "C++"] },
    { name: "Backend", items: ["Django", "Django REST Framework"] },
    { name: "Frontend", items: ["React", "HTMX", "HTML", "CSS"] },
    { name: "AI/ML", items: ["LLMs", "LangChain", "Machine Learning"] },
    { name: "Tools", items: ["Docker", "PostgreSQL", "Git"] },
  ],
  projects: [
    {
      title: "Django Observability",
      description: "Built a fully managed Django observability template integrating Prometheus metrics, Loki log aggregation, Grafana dashboards, Alertmanager with Slack notifications, and Sentry error tracking — all orchestrated with Docker Compose.",
      image: "https://raw.githubusercontent.com/MdAshiqurRahmanZayed/django-observability/refs/heads/main/screenshots/docs/main-page.png",
      link: "https://mdashiqurrahmanzayed.github.io/django-observability/",
      category: "Web Development",
    },
    {
      title: "Job-Portal",
      description: "Developed an online job portal to streamline the job search and hiring process, facilitating connections between job seekers and employers. Key features include job search filters, user profiles, job application tracking, and job posting management.",
      image: "https://raw.githubusercontent.com/MdAshiqurRahmanZayed/Job-Portal/refs/heads/main/screenshot/main.png",
      link: "https://github.com/MdAshiqurRahmanZayed/Job-Portal",
      category: "Web Development",
    },
    {
      title: "QuantumGoods",
      description: "QuantumGoods is a robust e-commerce platform developed with Django, featuring a sleek Bootstrap interface for a modern shopping experience. Integrated with SSLCOMMERZ for secure payment transactions and coupon functionality for discounts.",
      image: "https://raw.githubusercontent.com/MdAshiqurRahmanZayed/QuantumGoods/refs/heads/main/screenshots/a.png",
      link: "https://github.com/MdAshiqurRahmanZayed/QuantumGoods",
      category: "Web Development",
    },
    {
      title: "KnowledgeKernel",
      description: "Knowledge-Kernel is an e-learning website through which the students will get the opportunity to acquire their skills in various subjects. Have Assesment sections and payment methods.",
      image: "https://raw.githubusercontent.com/MdAshiqurRahmanZayed/KnowledgeKernel/refs/heads/main/screenshot/main-page.png",
      link: "https://github.com/MdAshiqurRahmanZayed/KnowledgeKernel",
      category: "Web Development",
    },
    {
      title: "IrisPrediction",
      description: "This project implements a machine learning pipeline for classifying iris flowers into their respective species based on sepal and petal measurements. It demonstrates the complete workflow, from data preprocessing and exploratory analysis to model training and evaluation using Scikit-learn.",
      image: "https://raw.githubusercontent.com/MdAshiqurRahmanZayed/IrisPrediction/refs/heads/main/screenshot/a.png",
      link: "https://github.com/MdAshiqurRahmanZayed/IrisPrediction",
      category: "Web Development, Machine Learning",
    }
  ],
  certifications: [
    { title: "Python for Everybody", link: "https://coursera.org/share/cc306ea79742189ddfcdf273b138bb2c" },
    { title: "Full Stack Web Development With Python & JavaScript", link: "https://res.cloudinary.com/bohubrihi/image/upload/v1716313364/production/664cdd1025b619c01af50d75.pdf" },
    { title: "Using Python to Interact with the Operating System", link: "https://coursera.org/share/f1c90c4e9eb5d653106f31bb78c62560" },
    { title: "Linux for Developers", link: "https://coursera.org/share/f9665d160509b1eb1451810102a6806f" },
    { title: "Supervised Machine Learning: Regression and Classification", link: "https://coursera.org/share/a8697a766d075764b548a325615e6444" },
    { title: "Object-Oriented Data Structures in C++", link: "https://coursera.org/share/5f2e06da59bdde3eeda5f4c45e7fa702" },
  ],
  achievements: [
    {
      title: "Runner-up, Strativ AB Summer Hackathon 2024",
      description: "Contributed to building an LLM-based ERP solution where users upload files like SOPs, leave, requisition policies, etc., allowing employees to query them via a chat system.",
    },
  ],
};