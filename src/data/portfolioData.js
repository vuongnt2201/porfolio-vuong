// Portfolio data - Bạn có thể chỉnh sửa thông tin tại đây
export const personalInfo = {
  name: "Vuong Nguyen",
  title: "Game Developer & Software Engineer",
  email: "vuongnt2201@gmail.com",
  phone: "+84 XXX XXX XXX", // Thêm số điện thoại nếu muốn
  location: "Vietnam",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
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
    company: "Game Studio",
    position: "Game Developer",
    duration: "2021 - Present",
    location: "Vietnam",
    responsibilities: [
      "Developed and maintained game features using Unity and C#",
      "Collaborated with designers and artists to implement game mechanics",
      "Optimized game performance and fixed bugs",
      "Implemented multiplayer functionality and networking features"
    ]
  },
  {
    company: "Tech Company",
    position: "Software Engineer",
    duration: "2019 - 2021",
    location: "Vietnam",
    responsibilities: [
      "Built web applications using React and Node.js",
      "Worked on mini-apps for Telegram and LINE platforms",
      "Implemented RESTful APIs and database solutions",
      "Participated in code reviews and agile development process"
    ]
  }
]

export const projects = [
  {
    title: "God Of Weapons",
    description: "An action-packed game available on Steam. Features intense combat mechanics and weapon customization.",
    technologies: ["Unity", "C#", "Game Design"],
    link: "https://store.steampowered.com/app/2342950/God_Of_Weapons/",
    image: "/project1.jpg" // Thêm ảnh vào thư mục public
  },
  {
    title: "Tadokami - Telegram Mini App",
    description: "Interactive gaming mini-app built for Telegram platform with engaging gameplay.",
    technologies: ["Unity", "WebGL", "C#", "Telegram Bot API"],
    link: "https://t.me/FSLGameHub_Bot/tadokami",
    image: "/src/assets/fslgamehub/tadokami/tadokami_background.png",
    hasDetailPage: true
  },
  {
    title: "FSL Game Hub",
    description: "Gaming hub platform available on both Telegram and LINE platforms.",
    technologies: ["React", "Node.js", "Mini App Development"],
    link: "https://t.me/FSLGameHub_Bot/fslgamehub",
    alternateLink: "https://miniapp.line.me/2007739334-1y40PGGg",
    image: "/project3.jpg"
  }
]

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University Name",
    duration: "2015 - 2019",
    description: "Focused on software engineering and game development"
  }
]

