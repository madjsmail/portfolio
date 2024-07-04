export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


export const experiences = [
  {
    key: "Techmology Full-Time",
    title: "Software Engineer",
    company: "Techmology",
    date: "Apr 2023 – Ongoing",
    description: [
      "Developed responsive web applications using React and Next.js",
      "Worked with prestigious clients, delivering tailored web solutions",
      "Maintained and added new features to web applications",
      "Architected and modeled databases for scalable applications",
      "Implemented best practices in software development",
      "Collaborated with designers and QA to deliver high-quality results",
      "Adapted to new technologies and frameworks quickly",
      "Delivered user-friendly interfaces and seamless user experiences"
    ],
    skills: ["React", "Next.js", "Express", "Nest.js", "Agile"]
  },
  {
    key: "CAMIO",
    title: "Software Engineer",
    company: "CAMIO",
    date: "Apr 2023 – Feb 2024",
    description: [
      "Full stack development using Angular and Express.js",
      "Maintained and added new features to web applications",
      "Collaborated with designers and QA team",
      "Optimized performance and introduced new functionality",
      "Contributed to reaching over 3000 users"
    ],
    skills: ["Angular", "Express.js"]
  },
  {
    key: "HOTELLO",
    title: "Software Engineer",
    company: "HOTELLO",
    date: "Jan 2023 – Apr 2023",
    description: [
      "Developed new features and troubleshooted issues using Angular",
      "Conducted comprehensive testing including unit tests",
      "Collaborated with team members to maintain project timelines",
      "Identified and resolved bugs in software"
    ],
    skills: ["Angular"]
  },
  {
    key: "SETRAM",
    title: "Software Engineer Intern",
    company: "SETRAM",
    date: "2019 – 2020",
    description: [
      "Contributed to the analysis of document management systems",
      "Developed a document management system using PHP (Laravel)",
      "Implemented procedures for website revisions",
      "Assisted in creating database structures",
      "Formatted visual media for web usage"
    ],
    skills: ["PHP", "Laravel"]
  }
];


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Safax Landing Page",
    des: "A visually appealing landing page designed for Safax, showcasing the company's services and features.",
    img: '/assets/images/projects/Safax/Safax.png',
    iconLists: ["/reactjs.svg", "/tailwind.svg"],
    link: "safax.madjsmail.pro",
  },
  {
    id: 2,
    title: "SecureDepot",
    des: "A comprehensive solution for secure and efficient handling of deposit bags for a local bank, ensuring streamlined operations.",
    img: '/assets/images/projects/sga/sga.png',
    iconLists: ["/nextjs.svg", "/expressjs.svg"],
    link: "/ui.securedepot.com",
  },
  {
    id: 3,
    title: "Moadaly",
    des: "A web application that helps first and second-year students calculate their pass marks with ease.",
    img: '/assets/images/projects/moadaly/moadaly.png',
    iconLists: ["/javascript.svg", "/tailwind.svg"],
    link: "/moadaly.vercel.app",
  },
  {
    id: 4,
    title: "TASNIF",
    des: "An advanced search tool for scientific journals, allowing users to find journals along with their classifications.",
    iconLists: ["/javascript.svg", "/sql.svg"],
    link: "/ui.tasnif.com",
  },
  {
    id: 5,
    title: "GED SETRAM",
    des: "A robust Document Management System for SETRAM, built to streamline document handling and storage.",
    iconLists: ["/php.svg", "/laravel.svg", "/vue.svg"],
    link: "/ui.gedsetram.com",
  },
  {
    id: 6,
    title: "AWALNA",
    des: "A dictionary for the Algerian dialect, developed using Vue.js and Firebase, providing comprehensive language resources.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconLists: ["/vue.svg", "/mongodb.svg"],
    link: "/ui.awalna.com",
  },
  {
    id: 7,
    title: "Electronic Health Record",
    des: "A blockchain-based healthcare management system, enhancing security and efficiency in electronic health records.",
    iconLists: ["/nodejs.svg", "/hyperledger.svg"],
    link: "/ui.ehrblockchain.com",
  },
  {
    id: 8,
    title: "Agritech",
    des: "A cutting-edge application for agricultural management using blockchain technology to ensure data integrity and transparency.",
    img: '/assets/images/projects/agritech/agri.png',
    iconLists: ["/reactjs.svg", "/tailwind.svg"],
    link: "/ui.agritech.com",
  },
  {
    id: 9,
    title: "Mobot",
    des: "An innovative e-commerce application tailored for the tech industry, providing a seamless shopping experience.",
    img: '/assets/images/projects/mobot/mobot.png',
    iconLists: ["/reactjs.svg", "/tailwind.svg"],
    link: "/ui.mobot.com",
  },
  {
    id: 10,
    title: "Quiz App",
    des: "A fun and engaging quiz game designed for educational purposes, offering a variety of challenging questions.",
    img: '/assets/images/projects/quiz/quiz.png',
    iconLists: ["/js.svg", "/tailwind.svg"],
    link: "https://quize-zeta.vercel.app/?q=adam",
  },
  {
    id: 11,
    title: "Puzzle Application",
    des: "An interactive puzzle game that challenges players with various levels of difficulty, providing hours of entertainment.",
    img: '/assets/images/projects/puzzle/puzzle.png',
    iconLists: ["/js.svg", "/tailwind.svg"],
    link: "https://jigsaw-game.vercel.app",
  },
  {
    id: 12,
    title: "Lucky Draw Application",
    des: "A dynamic lucky draw game designed for special events, offering participants a chance to win exciting prizes.",
    img: '/assets/images/projects/puzzle/puzzle.png',
    iconLists: ["/react.svg", "/css.svg"],
    link: "https://jigsaw-game.vercel.app",
  },
  {
    id: 13,
    title: "Electron Ceramic Showcase with QR Code",
    des: "An innovative showcase application for ceramic products, integrating QR codes for easy information access.",
    img: '/assets/images/projects/puzzle/puzzle.png',
    iconLists: ["/electronjs.svg", "/js.svg", "/tailwind.svg"],
    link: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];


