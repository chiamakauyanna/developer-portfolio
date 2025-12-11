import ProjectPollify from "../../src/assets/images/pollify.png";
import ProjectStackTrack from "../../src/assets/images/stacktrack.png";
import Project1 from "../../src/assets/images/movie.png";
import Project2 from "../../src/assets/images/colors-game.png";
import Project3 from "../../src/assets/images/ticket-gen.png";
import Project4 from "../../src/assets/images/pricing.png";
import Project5 from "../../src/assets/images/quotes.png";
import Project6 from "../../src/assets/images/todo.png";
import Project7 from "../../src/assets/images/temp-converter.png";
import Project8 from "../../src/assets/images/calculator.png";

export const projects = [
  // 1. Pollify
  {
    id: 1,
    img: ProjectPollify,
    title: "Pollify — Polling & Voting Platform",
    description:
      "A full-featured polling platform where users can create polls, vote, track results, and manage analytics. Built with React, Redux Toolkit, Tailwind, and Django REST.",
    link: "https://github.com/chiamakauyanna/pollify/",
    tags: ["React", "Redux", "Tailwind", "Django", "API"],
  },

  // 2. StackTrack
  {
    id: 2,
    img: ProjectStackTrack,
    title: "StackTrack — Project & Task Manager",
    description:
      "A clean and intuitive project management app for organizing tasks, tracking progress, and managing workflows.",
    link: "https://github.com/chiamakauyanna/stacktrack",
    tags: ["React", "Redux", "Django", "UI/UX"],
  },

  // 3. Movie Website
  {
    id: 3,
    img: Project1,
    title: "Movie Website",
    description:
      "A responsive movie discovery site displaying trending, popular, and top-rated movies with detailed info pages.",
    link: "https://github.com/chiamakauyanna/movie-project",
    tags: ["React", "Tailwind", "API"],
  },

  // 4. Todo List App
  {
    id: 4,
    img: Project6,
    title: "Todo List App",
    description:
      "A clean and functional todo app where users can add, complete, and remove tasks.",
    link: "https://github.com/chiamakauyanna/To-do-App",
    tags: ["JavaScript", "Local Storage", "CSS"],
  },

  // 5. Quote Generator
  {
    id: 5,
    img: Project5,
    title: "Quote Generator",
    description:
      "A dynamic quote generator that lets users browse and save quotes across different categories.",
    link: "https://github.com/chiamakauyanna/alx_fe_javascript",
    tags: ["JavaScript", "API", "UI"],
  },

  // 6. Color Game
  {
    id: 6,
    img: Project2,
    title: "Color Game",
    description:
      "A simple but addictive color-matching game where players guess the correct RGB value.",
    link: "https://github.com/chiamakauyanna/color-game",
    tags: ["JavaScript", "Game Logic", "CSS"],
  },

  // 7. Temperature Converter
  {
    id: 7,
    img: Project7,
    title: "Temperature Converter",
    description:
      "A simple temperature conversion tool for switching between Celsius and Fahrenheit.",
    link: "https://github.com/chiamakauyanna/temperature_converter_app",
    tags: ["JavaScript", "Utility"],
  },

  // 8. Calculator
  {
    id: 8,
    img: Project8,
    title: "Calculator",
    description:
      "A basic calculator with clean UI and smooth interactions built with HTML, CSS, and JavaScript.",
    link: "https://github.com/chiamakauyanna/calculator",
    tags: ["JavaScript", "CSS", "Math Logic"],
  },

  // 9. Pricing Component
  {
    id: 9,
    img: Project4,
    title: "Pricing Component",
    description:
      "A clean and modern pricing component built with HTML, CSS, and JavaScript.",
    link: "https://github.com/chiamakauyanna/pricing-component",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  // 10. Ticket Generator
  {
    id: 10,
    img: Project3,
    title: "Ticket Generator",
    description:
      "A simple ticket generator that dynamically creates personalized event tickets.",
    link: "https://github.com/chiamakauyanna/conference_ticket_generator",
    tags: ["React", "UI"],
  },
];
