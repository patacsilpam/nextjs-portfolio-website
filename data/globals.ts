import {
  Linkedin,
  Github,
  Mail,
  Terminal,
  PenTool,
  BotMessageSquare,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 2,
    name: "Projects",
    link: "#projects",
  },
  {
    id: 3,
    name: "Experience",
    link: "#experience",
  },
];

export const services = [
  {
    id: 1,
    icon: Terminal,
    title: "Web/Mobile Development",
    description:
      "I provide personalized web and mobile development services tailored to your unique needs, from custom e-commerce platforms to specialized front-end and back-end solutions. ",
  },
  {
    id: 2,
    icon: PenTool,
    title: "UX/UI Design",
    description:
      "I create intuitive, engaging interfaces that prioritize user experience. Every design choice is made with your audience in mind, ensuring that your products are not just visually appealing but also easy to navigate. ",
  },
  {
    id: 3,
    icon: BotMessageSquare,
    title: "AI Prompt Engineering",
    description:
      "Leverage the power of AI with custom prompt engineering designed specifically for your needs. I tailor prompts to ensure that AI-generated content fits your brand voice and objectives, enhancing your content creation and operational efficiency.",
  },
];

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    skills: [
      { name: "HTML", image: "" },
      { name: "TailwindCSS", image: "" },
    ],
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    skills: [
      { name: "laravel", image: "" },
      { name: "php", image: "" },
    ],
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    skills: [
      { name: "javascript", image: "" },
      { name: "typescript", image: "" },
    ],
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    skills: [
      { name: "java", image: "" },
      { name: "flutter", image: "JavaScript" },
    ],
  },
];
export const tools = [
  {
    id: 1,
    skills: [
      { name: "HTML", image: "" },
      { name: "TailwindCSS", image: "" },
    ],
  },
  {
    id: 2,
    skills: [
      { name: "laravel", image: "" },
      { name: "php", image: "" },
    ],
  },
  {
    id: 3,
    skills: [
      { name: "javascript", image: "" },
      { name: "typescript", image: "" },
    ],
  },
  {
    id: 4,
    skills: [
      { name: "java", image: "" },
      { name: "flutter", image: "JavaScript" },
    ],
  },
];

export const experienceList = [
  {
    id: 1,
    title: "Web Developer",
    employer: "National Commission on Indigenous Peoples Region 1",
    description: "",
    year: "Nov. 2023 - Present",
  },
  {
    id: 2,
    title: "Graduation",
    employer: "Urdaneta City University",
    description: "",
    year: "Aug. 2023",
  },
  {
    id: 3,
    title: "AI Prompt Engineer Intern",
    employer: "Makerspace Innovhub",
    description: "",
    year: "Mar 2023 -\nJune 2023",
  },
  {
    id: 4,
    title: "Co-founder",
    employer: "Martinsoft",
    description: "",
    year: "Nov. 2022",
  },
  {
    id: 5,
    title: "Freelance Front-End Developer",
    employer: "",
    description: "",
    year: "Oct. 2022",
  },
];

export const socialList = [
  { id: 1, title: "LinkedIn", icon: Linkedin },
  { id: 2, title: "Github", icon: Github },

  { id: 3, title: "Mail", icon: Mail },
];
