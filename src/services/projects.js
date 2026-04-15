import ProjectPollify from "../../src/assets/images/pollify.png";
import ProjectStackTrack from "../../src/assets/images/stacktrack.png";
import Project1 from "../../src/assets/images/movie.png";
import Project2 from "../../src/assets/images/colors-game.png";
import Project3 from "../../src/assets/images/ticket-gen.png";
import Project9 from "../../src/assets/images/UI-dashboard.png";
import Project4 from "../../src/assets/images/pricing.png";
import Project5 from "../../src/assets/images/quotes.png";
import Project6 from "../../src/assets/images/todo.png";
import Project7 from "../../src/assets/images/temp-converter.png";
import Project8 from "../../src/assets/images/calculator.png";
import ProjectNovoEstates from "../../src/assets/images/novo-estates.png";
import ProjectTheCraving from "../../src/assets/images/the-craving.png";

export const projects = [
  {
    id: 1,
    img: ProjectPollify,
    category: "react",
    title: "Pollify — Polling & Voting Platform",
    description:
      "A full-featured polling platform where users can create polls, vote, track results, and manage analytics. Built with React, Redux Toolkit, Tailwind, and Django REST.",
    link: "https://chiamakauyanna-pollify.vercel.app/",
    tags: ["React", "Redux", "Tailwind", "Django", "API"],
  },
  {
    id: 2,
    img: ProjectStackTrack,
    category: "react",
    title: "StackTrack — Project & Task Manager",
    description:
      "A clean and intuitive project management app for organizing tasks, tracking progress, and managing workflows.",
    link: "https://stacktrack-psi.vercel.app/",
    tags: ["React", "Redux", "Django", "UI/UX"],
  },
  {
    id: 3,
    img: Project9,
    category: "ui",
    title: "UI Implementation Project (Figma → Code)",
    description:
      "Implementation of a fitness platform UI from an existing Figma design, focusing on layout, responsiveness, and reusable components.",
    link: "https://github.com/chiamakauyanna/dashboard_UI",
    tags: ["React", "Tailwind", "React Router"],
  },
  {
    id: 4,
    img: Project1,
    category: "react",
    title: "Movie Website",
    description:
      "A responsive movie discovery site displaying trending, popular, and top-rated movies with detailed info pages.",
    link: "https://github.com/chiamakauyanna/movie-project",
    tags: ["React", "Tailwind", "API"],
  },
  {
    id: 5,
    img: Project6,
    category: "vanilla",
    title: "Todo List App",
    description:
      "A clean and functional todo app where users can add, complete, and remove tasks.",
    link: "https://github.com/chiamakauyanna/To-do-App",
    tags: ["JavaScript", "Local Storage", "CSS"],
  },
  {
    id: 6,
    img: Project5,
    category: "vanilla",
    title: "Quote Generator",
    description:
      "A dynamic quote generator that lets users browse and save quotes across different categories.",
    link: "https://github.com/chiamakauyanna/alx_fe_javascript",
    tags: ["JavaScript", "API", "UI"],
  },
  {
    id: 7,
    img: Project2,
    category: "vanilla",
    title: "Color Game",
    description:
      "A simple but addictive color-matching game where players guess the correct RGB value.",
    link: "https://github.com/chiamakauyanna/color-game",
    tags: ["JavaScript", "Game Logic", "CSS"],
  },
  {
    id: 8,
    img: Project7,
    category: "vanilla",
    title: "Temperature Converter",
    description:
      "A simple temperature conversion tool for switching between Celsius and Fahrenheit.",
    link: "https://github.com/chiamakauyanna/temperature_converter_app",
    tags: ["JavaScript", "Utility"],
  },
  {
    id: 9,
    img: Project8,
    category: "vanilla",
    title: "Calculator",
    description:
      "A basic calculator with clean UI and smooth interactions built with HTML, CSS, and JavaScript.",
    link: "https://github.com/chiamakauyanna/calculator",
    tags: ["JavaScript", "CSS", "Math Logic"],
  },
  {
    id: 10,
    img: Project4,
    category: "ui",
    title: "Pricing Component",
    description:
      "A clean and modern pricing component built with HTML, CSS, and JavaScript.",
    link: "https://github.com/chiamakauyanna/pricing-component",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    img: Project3,
    category: "ui",
    title: "Ticket Generator",
    description:
      "A simple ticket generator that dynamically creates personalized event tickets.",
    link: "https://github.com/chiamakauyanna/conference_ticket_generator",
    tags: ["React", "UI"],
  },
  {
    id: 12,
    img: ProjectNovoEstates,
    category: "landing",
    title: "Novo Estates — Real Estate Landing Page",
    description:
      "A modern real estate landing page with property listings, smooth animations, and a clean layout.",
    link: "https://novoestates.vercel.app/",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 13,
    img: ProjectTheCraving,
    category: "landing",
    title: "The Craving — Restaurant Landing Page",
    description:
      "A rich, visual restaurant landing page featuring the menu, ambiance, and reservations section.",
    link: "https://thecraving.vercel.app/",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
];
