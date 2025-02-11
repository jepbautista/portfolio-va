import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jeffrey Bautista",
  initials: "JB",
  url: "https://dillion.io",
  location: "Binmaley, Pangasinan, Philippines 2417",
  locationLink: "https://www.google.com/maps/place/Binmaley,+Pangasinan",
  description: "A freelance E-Commerce Specialist | Virtual Assistant",
  summary:
    "I assist my clients with a variety of administrative tasks, including data entry, transcription, research, web design, basic graphic design, copywriting, and social media advertising, among other services. I treat every client as a valuable business partner and focus on ensuring their satisfaction. Quality is my priority, and I am open to undergoing training to learn new skills if needed for long-term collaboration. If you're struggling to manage your time, I can help lighten your workload so you can concentrate on your core business. You don't have to handle all the tasks by yourself.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jeffreybautista1209@gmail.com",
    tel: "(+63) 910 3042 684",
    social: {
      Facebook: {
        name: "GitHub",
        url: "https://www.facebook.com/privatejeff",
        icon: Icons.github,
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/jep.bautista/?hl=en",
        icon: Icons.linkedin,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:jeffreybautista1209@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Freelance",
      badges: [],
      location: "Remote",
      title: "E-commerce Specialist | Amazon VA",
      start: "May 2021",
      end: "Present",
      description:
        "I managed product listing health and optimization, ensuring compliance by resolving search suppression, pricing errors, and stranded inventory. I improved visibility by uploading high-quality images, using strategic keywords, and conducting audits. In revenue operations, I optimized pricing strategies, reviewed margins and storage, and tracked cases for efficient resolution. I monitored account health, addressed violations, removed negative feedback, and maintained a strong seller rating. I also managed PPC campaigns, optimizing bids for better ROI. Additionally, I contributed to product listing creation with Akeneo, conducted market research for competitive insights, and generated reports to inform strategic decisions.",
    },
  ],
  education: [
    {
      school: "Pangasinnan State University",
      href: "https://main.psu.edu.ph/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/psu_logo.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
