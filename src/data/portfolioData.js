// Portfolio data - Bạn có thể chỉnh sửa thông tin tại đây
export const personalInfo = {
  name: "Vuong Nguyen",
  title: "Game Developer & Software Engineer",
  email: "vuongnt2201@gmail.com",
  phone: "+84 911 755 588", // Thêm số điện thoại nếu muốn
  location: "Vietnam",
  github: "https://github.com/vuongnt2201",
  linkedin: "https://www.linkedin.com/in/vuong-nguyen-a5b29b284/",
  bio: "Passionate game developer with experience in creating engaging gaming experiences. Specialized in game development, software engineering, and building interactive applications."
}

export const skills = {
  "Programming Languages": ["C#", "C++", "JavaScript", "TypeScript", "Python"],
  "Game Development": ["Unity", "Unreal Engine", "Game Design", "Physics", "AI"],
  "Web Development": ["React", "Node.js", "HTML/CSS", "Vite"],
  "Tools & Technologies": ["Git", "Docker", "CI/CD", "Agile/Scrum"],
  "Other Skills": ["Problem Solving", "Team Collaboration", "Project Management"]
}

export const experience = [
  {
    company: "Archmage Games Studio",
    position: "Game Developer",
    duration: "July 2024 - Present",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Developed and maintained game features using Unity 3D and C#",
      "Collaborated with designers and artists to implement game mechanics and systems",
      "Optimized game performance and fixed bugs",
      "Implemented multiplayer functionality and networking features"
    ]
  },
  {
    company: "FSL Ecosystem",
    position: "Software Engineer",
    duration: "February 2025 - November 2025",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Built web applications using React and Node.js",
      "Worked on mini-apps for Telegram and LINE platforms",
      "Implemented RESTful APIs and database solutions",
      "Participated in code reviews and agile development process",
      "Integrated blockchain technology (Solana, Polygon) and cryptocurrency payment processing, Telegram Stars payment processing"
    ]
  }
]

export const projects = [
  {
    title: "God Of Weapons",
    description: "Action roguelite on Steam. Worked on DLC content: new enemies, weapons, bosses and performance-focused systems.",
    technologies: ["Unity", "C#", "DOTS", "ECS"],
    link: "https://store.steampowered.com/app/2342950/God_Of_Weapons/",
    image: "/src/assets/image/gow.jpg", // Thêm ảnh vào thư mục public
    detailRoute: "/god-of-weapons"
  },
  {
    title: "Tadokami - Telegram Mini App",
    description: "Interactive gaming mini-app built for Telegram platform with engaging gameplay.",
    technologies: ["Unity", "WebGL", "C#", "Telegram Bot API"],
    link: "https://t.me/FSLGameHub_Bot/tadokami",
    image: "/src/assets/fslgamehub/tadokami/tadokami_background.png",
    detailRoute: "/tadokami"
  },
  {
    title: "FSL Game Hub",
    description: "Gaming hub platform available on both Telegram and LINE platforms.",
    technologies: ["React", "Node.js", "Mini App Development"],
    link: "https://t.me/FSLGameHub_Bot/fslgamehub",
    alternateLink: "https://miniapp.line.me/2007739334-1y40PGGg",
    image: "/project3.jpg",
    detailRoute: "/fsl-gamehub"
  }
]

export const education = [
  {
    degree: "VNUHCM, University of Information Technology",
    school: "Bachelor of Computer Science",
    duration: "2015 - 2019",
  },
  {
    degree: "Vinh University, High school for the gifted​",
    duration: "2016 - 2018",
  }
]

