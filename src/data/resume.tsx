import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, HandshakeIcon } from "lucide-react";

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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#services", icon: HandshakeIcon, label: "Services" },
  ],
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
      school: "Pangasinan State University",
      href: "https://main.psu.edu.ph/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/psu_logo.png",
      start: "2009",
      end: "2013",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Photoshop Master Course",
      logoUrl: "/udemy_logo.png",
      start: "-",
      end: "-",
    },
  ],
  services: [
    {
      title: "Amazon FBA Specialist",
      href: "#",
      active: true,
      description:
        "Specializing in listing health, revenue operations, and PPC management, I ensure Amazon accounts remain competitive, compliant, and profitable.",
      technologies: [
        "Listing Health & Optimization",
        "Revenue & Buy Box Strategy",
        "Account Health & Compliance",
      ],
      image: "/amazon-pic.jpg",
    },
    {
      title: "Web Dev",
      href: "#",
      active: true,
      description:
        "Specializing in listing health, revenue operations, and PPC management, I ensure Amazon accounts remain competitive, compliant, and profitable.",
      technologies: [
        "Listing Health & Optimization",
        "Revenue & Buy Box Strategy",
        "Account Health & Compliance",
      ],
      image: "/amazon-pic.jpg",
    },
  ],
  testimonials: [
    {
      name: "Testimonial 1",
      username: "@jack",
      body: "lorem ipsum dolor set amit",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Testimonial 2",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Testimonial 3",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Testimonial 4",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
  ],
} as const;
