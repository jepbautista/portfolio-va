import { Icons } from "@/components/icons";
import { HomeIcon, HandshakeIcon } from "lucide-react";

export const DATA = {
  name: "Jeffrey Bautista",
  initials: "JB",
  url: "https://dillion.io",
  location: "Binmaley, Pangasinan, Philippines 2417",
  locationLink: "https://www.google.com/maps/place/Binmaley,+Pangasinan",
  description: "A freelance E-Commerce Specialist | Virtual Assistant",
  summary:
    "I assist my clients with a variety of administrative tasks, including data entry, transcription, research, web design, basic graphic design, copywriting, and social media advertising, among other services. I treat every client as a valuable business partner and focus on ensuring their satisfaction. Quality is my priority, and I am open to undergoing training to learn new skills if needed for long-term collaboration. If you're struggling to manage your time, I can help lighten your workload so you can concentrate on your core business. You don't have to handle all the tasks by yourself.",
  avatarUrl: "/portfolio-va/me.jpg",
  skills: [
    "Amazon FBA",
    "Amazon PPC",
    "Shopify",
    "eBay",
    "Microsoft Excel",
    "E-Commerce",
    "Data Analysis",
    "Data Entry",
    "Administrative Support",
    "HTML",
    "CSS",
    "Javascript",
    "Photoshop",
    "Premiere Pro",
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
      logoUrl: "/portfolio-va/psu_logo.png",
      start: "2009",
      end: "2013",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Photoshop Master Course",
      logoUrl: "/portfolio-va/udemy_logo.png",
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
        "PPC Campaign Setup & Management",
        "Inventory Management",
        "Product Listing",
        "Keyword Research",
        "Product Sourcing",
      ],
      image: "/portfolio-va/amazon-pic.jpg",
    },
    {
      title: "Web Development",
      href: "#",
      active: true,
      description:
        "I have a foundational background in web development to build functional and visually appealing websites. While my expertise is at a basic to intermediate level, I take pride in manually coding my portfolio website, showcasing my ability to structure, style, and optimize web pages from the ground up.",
      technologies: [
        "HTML",
        "CSS",
        "Java Script",
      ],
      image: "/portfolio-va/web-dev-img.jpg",
    },

    {
      title: "Photo and Video Editing",
      href: "#",
      active: true,
      description:
        "I can help you to create advertisement and creative campaign for your products.",
      technologies: [
        "Photoshop",
        "Premiere Pro",
      ],
      image: "https://www.youtube.com/embed/wxP2HjREJ8E",
    },


  ],
  testimonials: [
    {
      name: "Maria Crisel Robles",
      username: "@crisel",
      body: "Jeffrey is one of the most skilled RevOps professionals at SellerX. He’s always ready to help and answer any questions. Collaborating with him is effortless, as he manages tasks independently while ensuring the brand’s needs are met and the team is well-supported.",
      img: "/portfolio-va/crisel-img.jpg",
    },
    {
      name: "Charles Phillips",
      username: "@charles",
      body: "He has an excellent eye for detail, and a strong understanding of Amazon marketplace, pricing dynamics, buy box management. He also has shown strong commercial understanding of P/L management often producing detailed and important reports on product profitability and providing suggested actions. He has a great knowledge of Amazon and Ecom and is a great asset to any team.",
      img: "/portfolio-va/charles-img.jpg",
    },
    {
      name: "Selcuk Cullu",
      username: "@selcuk",
      body: "I am pleased to write a testimonial for Jeffrey, who has been an invaluable member of our team. We have been working together for the past three months, and during this time, I have been continually impressed by his positive attitude, dedication, and eagerness to learn. Jeffrey's expertise in Amazon listing and campaign management has been a significant asset to our organization. His ability to adapt and manage processes with ease has streamlined our operations and greatly improved our online presence. He approaches every task with enthusiasm and is always willing to go the extra mile to ensure success. In summary, Jeffrey is a highly skilled professional whose dedication, expertise, and supportive nature make him an exceptional colleague. I am confident that he will continue to excel in",
      img: "/portfolio-va/selcuk-img.jpg",
    },
    {
      name: "Mariana Lemos",
      username: "@mariana",
      body: "I've had the pleasure of collaborating with Jeffrey on numerous projects, and I can confidently say that he is a standout performer in every aspect. His dedication to delivering outstanding results sets him apart from the crowd. Jeffrey's expertise in the Amazon Seller Center is truly remarkable. From meticulous listing review and optimization to strategic PPC management, he consistently drives significant improvements in our sales performance. His proficiency in handling image and attribute uploads has streamlined our processes and enhanced our product visibility on the platform. Beyond his technical skills, Jeffrey's interpersonal abilities and teamwork shine brightly. He effortlessly collaborates with colleagues, demonstrating excellent communication skills.",
      img: "/portfolio-va/mariana-img.jpg",
    },
  ],
} as const;
