import {
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
  diia,
  threejs,
  softserve,
  brighta,
  codecare,
  hzf,
  gol,
  cryptocounter,
  landing,
  call,
  mail,
  github,
  linkedin,
  telegram,
  downloadPdf,
  vue,
  asteroids,
} from "../assets";

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

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
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
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const about = "My name is Aleksandr, I live in Kyiv. I am a self-taught programmer with a passion for web development. My journey began with a six months internship as a full-stack developer. During my  time as a full-stack, I contributed to the development of a hiking trip app using Angular and Flask, with a focus on Python for the back-end. After completing the project, I decided to shift my focus more towards front-end development, which has been my primary focus for the past two years. I have primarily worked as a Vue front-end developer, but I am also familiar with React, which is my personal favorite and the one I use in all of my pet projects. As of now i feel pretty comfortable with front-end part of development, so i shifted my focus to full-stack development, and my next goal is to delve into neural networks."

const experiences = [
  {
    title: "Intern Full-stack Developer",
    company_name: "SoftServe",
    icon: softserve,
    iconBg: "#000",
    date: "January 2020 - July 2020",
    points: [
      "Developing new REST API with Flask.",
      "Designing and developing front-end with Angular.",
      "Back-end to front-end integration.",
      "Participating in code reviews and providing feedback to other developers.",
    ],
  },
  {
    title: "Junior Front-end Developer",
    company_name: "Brighta",
    icon: brighta,
    iconBg: "#000",
    date: "July 2020 - January 2021",
    points: [
      "Developing front-end from Figma design using Vue.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Back-end to front-end integration.",
    ],
  },
  {
    title: "Middle Full-stack Developer",
    company_name: "Code&Care",
    icon: codecare,
    iconBg: "#000",
    date: "February 2021 - October 2021",
    points: [
      "Collaborating with CTO to create back-end architecture.",
      "Developing back-end using NodeJS and Apollo(GraphQL).",
      "Developing front-end using Quasar(Vue framework).",
      "Back-end to front-end integration.",
    ],
  },
  {
    title: "Middle Front-end Developer",
    company_name: "Diia",
    icon: diia,
    iconBg: "#000",
    date: "November 2021 - August 2022",
    points: [
      "Developing front-end from Figma design using Vue.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Back-end to front-end integration.",
      "Refactoring legacy components.",
    ],
  },
  {
    title: "Middle Game Developer",
    company_name: "HZF",
    icon: hzf,
    iconBg: "#000",
    date: "September 2022 - November 2022",
    points: [
      "Collaborating with designers to reskin casino app.",
      "Developing new features for casino app.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Back-end to front-end integration.",
      "Refactoring legacy components.",
    ],
  },
];

const projects = [
  {
    name: "Game of Life",
    description:
      "A cellular automaton. It is a zero-player game - its evolution is determined by its initial state, requiring no further input.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: gol,
    source_code_link: "https://github.com/JollyR0ger42/Game-Of-Life",
    demo_link: "https://kolontai-cv.up.railway.app/gol/",
  },
  {
    name: "Crypto counter",
    description:
      "Small app for counting crypto using Binance API to fetch fresh prices.",
    tags: [
      {
        name: "vue",
        color: "green-text-gradient",
      },
    ],
    image: cryptocounter,
    source_code_link: "https://github.com/JollyR0ger42/crypto-counter",
    demo_link: "https://kolontai-cv.up.railway.app/crypto/",
  },
  {
    name: "Asteroids",
    description:
      "Arcade video game released in 1979 by Atari.",
    tags: [
      {
        name: "js",
        color: "orange-text-gradient",
      },
      {
        name: "canvas",
        color: "blue-text-gradient",
      },
    ],
    image: asteroids,
    source_code_link: "https://github.com/JollyR0ger42/Asteroids-1979",
    demo_link: "https://kolontai-cv.up.railway.app/asteroids/",
  },
  {
    name: "Landing page",
    description:
      "Responsive landing web page.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/JollyR0ger42/web_page_02",
    demo_link: "https://kolontai-cv.up.railway.app/web-page-2",
  },
];

const contacts = [
  {
    url: "tel:+380639958338",
    img: call,
    text: "(+380) 63-995-83-38",
    target: "_self"
  },
  {
    url: "mailto:kav993@gmail.com",
    img: mail,
    text: "kav993@gmail.com",
    target: "_self"
  }
]

const links = [
  {
    url: "https://github.com/JollyR0ger42",
    img: github,
    text: "Github",
  }, {
    url: "https://www.linkedin.com/in/aleksandr-kolontai-a7437718b/",
    img: linkedin,
    text: "Linkedin",
  }, {
    url: "https://t.me/JollyR0ger42",
    img: telegram,
    text: "Telegram",
  }, {
    url: "https://kolontai-cv.up.railway.app/CV_Kolontai_A.pdf",
    img: downloadPdf,
    text: "Download CV as pdf",
    download: true,
  },
]

export { technologies, experiences, projects, about, contacts, links };
