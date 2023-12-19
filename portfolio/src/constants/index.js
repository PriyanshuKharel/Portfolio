import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  python,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  django,
  dotnet,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: java,
    name: "JAVA",
    type: "Language",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Framework",
  },
  {
    imageUrl: dotnet,
    name: "DOTNET",
    type: "Framework",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Wiseadmit Technologies",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "May 2023 - July 2023",
    points: [
      "Learnt about TypeScript",
      "Collaborated with designers, other developers to create high-quality products.",
      "Learnt about CI/CD and JEST Test Cases for unit testing",
      "Learnt about some services of AWS including S3, Amplify etc",
      "Learnt about NextJS",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Wiseadmit Technologies",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web application using React.js, Express, MongoDB and Next JS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and following constructive feedback from other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/PriyanshuKharel",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/priyanshu-kharel-22a09b23a/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Learning Management System",
    description:
      " It is similar to Udemy not a clone where multiple technologies are used. TypesScript is used for both frontend and backend as well as redis is used for maintaining cache",
    link: "https://github.com/PriyanshuKharel/LMS",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Book My Show Clone",
    description:
      "This is a clone of book my show where I used React for frontend. Here API was extracted from Movie API Provider.",
    link: "https://github.com/PriyanshuKharel/book-my-show.github.io",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Admin Dashboard For Consultancy",
    description:
      " This project was built for a consultancy not paid where I built API with Express. MongoDB was used for database and React for frontend. This project allows the consultancy person to check about student details. It also allows them to check all the payments",
    link: "https://github.com/PriyanshuKharel",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Book Record Management",
    description:
      "Built a API which was created using Express and MongoDB as database , allowing users to created, modified and deleted. Also if the book period is over or membership is over then the fine will be added automatically if the book is not returned.",
    link: "https://github.com/PriyanshuKharel/book-record-management",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "3D Portfolio",
    description: " In this project, I created my portfolio using Three JS.",
    link: "https://github.com/PriyanshuKharel/Portfolio",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Tasky Application",
    description:
      "App that leverages and keeps the tasks to be done for future. It is built using JavaScript",
    link: "https://github.com/PriyanshuKharel/Tasky-Appln",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Zomato Clone",
    description:
      "It is a zomato clone. Backend is fully completed and stack used in Express and MongoDB as database. Frontend is ongoing doing using React",
    link: "https://github.com/PriyanshuKharel",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Flood Prediction System",
    description:
      "This project is a ML based project where I built a Flood Prediction System where Linear Regression is used as an algorithm. The algorithm was self implemented not imported as a package. It predicts the whether the flood occurs or not based on data provided by a professional. The datasets were bought from Department of Hydrology and Meteorology which is a real time data for Khokana, Khumaltar and Manohara.",
    link: "https://github.com/PriyanshuKharel/Flood-Prediction-System",
  },
];
