import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    netlify1,
    netlify,
    slogo,
    youtube,
    food_app,
    youtubeLogo,swiggyLogo,netflixLogo,
    tcsLogo,
    cognitensor,
  } from "../assets";
  import smdbhome from "../assets/smdbhome.png";
  import exoape from "../assets/exoape.png"
  import obys from "../assets/Obys.png"
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Javascript Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Data Science Intern",
      icon: backend,
    },
    {
      title: "Appian Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Tata Consultancy Services",
      icon: tcsLogo,
      iconBg: "#383E56",
      date: "May 2021 - Present",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",

"Collaborated in the comprehensive redesign of different websites, focusing on the development of key UI components.",
"Translates designs and wireframes into high quality code and wrote application interface code via javascript following react js workflows. Developed the latest user facing features using reactjs and build reusable components and frontend libraries for future use.",
"Played an important role in maintaining uniformity and visual coherence across diverse UI components, ensuring a seamless and intuitive user experience across the platform.",

      ],
    },
    {
      title: "Appian Developer",
      company_name: "Tata Consultancy Services",
      icon: tcsLogo,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - May 2021",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",

"Successfully executed multiple major enhancements on 12 distinct Appian platform applications, consistently meeting deadlines and exceeding customer expectations.",

"Streamlined project delivery by implementing Agile methodologies and consistently meeting project timelines and milestones; achieved 100% on-time delivery rate for all assigned stories.",

      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Data Science Video Analysis Intern",
      company_name: "Cognitensor",
      icon: cognitensor,
      iconBg: "#E6DEDD",
      date: "june 2020 - Oct 2020",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
        "Developed an advanced system capable of automatically detecting number plates from car images or videos using Yolo algorithm and CNN for image processing, paving the way for efficient vehicle identification and management.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SMDB system (use Vpn to access the site)",
      description:
        "Use Vpn before accessing the site as TMDB api's are not working in India region. SMDB is an innovative online platform of comprehensive database for global cinema and television enthusiasts. With a sleek interface built using React.js and a robust Redux store integration, SMDB offers access to an extensive collection of information spanning films, television shows, actors, directors, screenwriters etc. Key features of SMDB include an intuitive search engine that allows users to quickly find relevant content, infinite scrolling for effortless exploration, and additional functionalities designed to enhance user engagement.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux toolkit",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: smdbhome,
      source_code_link: "https://github.com/samarth1256/SCSDB",
      site_link:"https://smdbresponsive.vercel.app/",
    },
    {
      name: "Netflix Gpt",
      description:
        "Integrated OpenAI's GPT-3.5 Turbo API to introduce an intelligent search recommendation feature. along with TMDB APIs to fetch and display movie listings and store their data efficiently in the Redux store along with secure authentication system allowing users to sign up,sign in,login and sign out using Firebase.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux toolkit",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: netlify,
      source_code_link: "https://github.com/samarth1256/netflix-gpt",
      site_link:"https://samarthdua-netflixgpt.netlify.app/",
    },
    {
      name: "Youtube Clone",
      description:
        "Developed a high-performance video streaming platform that mirrors YouTube's features, utilizing React JS for component-based architecture, Webpack for module bundling, and Tailwind CSS for responsive design along with search functionality using debouncing technique,caching via Redux store and also with n-level nested and live comment.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Redux toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/samarth1256/namaste-youtube/tree/master",
      site_link:"https://samarth-youtube.netlify.app/",
    },
    {
      name: "Exoape Animated website",
      description:
        "ExoApe is an innovative animated website landing page that showcases cutting-edge modern website effects aimed at enhancing user experience. Developed using React.js and Tailwind CSS, ExoApe seamlessly integrates the power of GSAP (GreenSock Animation Platform) and Framer Motion to bring captivating animations and interactions to life.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },        
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "green-text-gradient",
        },
      ],
      image: exoape,
      source_code_link: "https://github.com/samarth1256/exoape",
      site_link:"https://exoape-responsive.vercel.app/",
    },
    {
      name: "Obys Animated website",
      description:
        "The Obys website represents a fusion of advanced frontend technologies, combining the flexibility of javascript with the utility-first approach of Tailwind CSS to create a visually stunning and responsive user interface. Leveraging the capabilities of GSAP and Framer Motion, Obys introduces dynamic animations, transitions, and effects that captivate users and elevate the browsing experience.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },        
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "green-text-gradient",
        },
      ],
      image: obys,
      source_code_link: "https://github.com/samarth1256/obys-clone",
      site_link:"https://obys-clone-xi.vercel.app/",
    },
    {
      name: "Food App",
      description:
        "Developed a dynamic food ordering app, harnessing the power of React for UI components and Redux for efficient state management using Swiggy APIs along with techniques like lazy loading and bundle chunking to improve performance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Redux toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: food_app,
      source_code_link: "https://github.com/samarth1256/namaste-react",
      site_link:"https://samarth-food-ordering.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };