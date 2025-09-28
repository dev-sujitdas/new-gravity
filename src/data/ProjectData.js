// Videos WebM
import fashion from "/Compressed/fashion.webm";
import pfl from "/Compressed/pfl.webm";
import divyatarot from "/Compressed/divyatarot.webm";
import home from "/Compressed/home.webm";
import qeske from "/Compressed/qeske.webm";
import fashionag from "/Compressed/fashion-ag.webm";
// Videos MP4
import fashionMp4 from "/Videos/fashion.mp4";
import pflMp4 from "/Videos/pfl.mp4";
import divyatarotMp4 from "/Videos/divyatarot.mp4";
import homeMp4 from "/Videos/home.mp4";
import qeskeMp4 from "/Videos/qeske.mp4";
import fashionagMp4 from "/Videos/fashion-ag.mp4";
// Images
import tarot from "/Images/tarot.png";
import fashionImg from "/Images/fashion.png";
import fagencyImg from "/Images/fagency.png";
import homeImg from "/Images/home.png";
import pflImg from "/Images/pfl.png";
import qeskeImg from "/Images/qeske.png";
// Tech Icons
import figma from "/Tech/figma.png";
import html from "/Tech/html.png";
import css from "/Tech/css.png";
import javascript from "/Tech/javascript.png";
import react from "/Tech/reactjs.png";
import tailwind from "/Tech/tailwind.png";
import node from "/Tech/nodejs.png";
import redux from "/Tech/redux.png";
import mongodb from "/Tech/mongodb.png";
import git from "/Tech/git.png";
import docker from "/Tech/docker.png";
import three from "/Tech/threeJs.png";
import gsap from "/Tech/gsap.png";
import redis from "/Tech/redis.png";

export const ProjectData = [
  {
    id: 1,
    serviceId: 1,
    serviceTitle: "Branding",
    num: "01",
    top: "0",
    video: [
      { src: fashion, type: "video/webm" },
      { src: fashionMp4, type: "video/mp4" },
    ],
    image: fashionImg,
    title: "Fashion Portfolio",
    subtitle: "A Stylish Portfolio for Models",
    tag: { design: true, develop: true, concept: true },
    description:
      "A personal portfolio website for fashion models to showcase their style, personality, and talent. Designed with bold visuals, smooth animations, and an elegant layout to highlight individuality and creativity.",
    techStack: {
      tech: [
        { icon: html, tech: "HTML5" },
        { icon: css, tech: "CSS3" },
        { icon: javascript, tech: "JavaScript" },
        { icon: three, tech: "SheryJS" },
        { icon: git, tech: "Git" },
      ],
    },
    metrics: {
      title:
        "Transforming Portfolios into Powerful Digital Stages for Global Recognition",
      description:
        "The platform elevated visibility and engagement for models, helping them attract more clients with impactful presentation.",
      values: [
        {
          number: "200+",
          description:
            "Over 200 views gained in first month, boosting online visibility.",
        },
        {
          number: "50%",
          description:
            "Achieved 50% increase in client inquiries within first month.",
        },
        {
          number: "95%",
          description:
            "Earned 95% positive user feedback praising design and usability.",
        },
      ],
    },
    problem: {
      title:
        "Breaking Free from Generic Templates and Outdated Digital Limitations",
      description:
        "Models lacked a personalized platform to present their work online in a professional yet creative way.",
      reason: [
        {
          reasonTitle: "Lack of individuality",
          reasonDesc:
            "Generic templates failed to reflect creativity, personality, and unique style.",
        },
        {
          reasonTitle: "Outdated layouts",
          reasonDesc:
            "Most existing layouts appeared old, uninspired, and visually unappealing.",
        },
        {
          reasonTitle: "Poor UX",
          reasonDesc:
            "Navigation felt clunky, creating frustrating experiences for potential clients.",
        },
        {
          reasonTitle: "Limited engagement",
          reasonDesc:
            "Websites lacked interactive features necessary to truly captivate visitors.",
        },
      ],
    },
    approach: {
      title:
        "Crafting Bold Digital Identities Through Style, Innovation, and Minimalism",
      description:
        "We designed a bold, fashion-forward digital identity with smooth animations and a sleek UI.",
      reason: [
        {
          reasonTitle: "Custom UI",
          reasonDesc:
            "Created layouts emphasizing modern style, bold visuals, and minimalism.",
        },
        {
          reasonTitle: "Interactive features",
          reasonDesc:
            "Implemented smooth transitions and animations powered by SheryJS technology.",
        },
        {
          reasonTitle: "Mobile-first design",
          reasonDesc:
            "Optimized for seamless experiences across all devices and screen sizes.",
        },
        {
          reasonTitle: "Brand identity",
          reasonDesc:
            "Colors and typography aligned perfectly with luxury high-fashion aesthetics.",
        },
      ],
    },
  },
  {
    id: 2,
    serviceId: 2,
    serviceTitle: "UI/UX Design",
    num: "02",
    top: "40",
    video: [
      { src: divyatarot, type: "video/webm" },
      { src: divyatarotMp4, type: "video/mp4" },
    ],
    image: tarot,
    title: "Divya Tarot",
    subtitle: "Discover insights, embrace possibilities, find your path.",
    tag: { design: true, develop: true, concept: false },
    description:
      "A tarot reading website where users can explore services, book sessions, and connect with a professional reader. Designed to feel mystical, welcoming, and trustworthy.",
    techStack: {
      tech: [
        { icon: figma, tech: "Figma" },
        { icon: react, tech: "React" },
        { icon: tailwind, tech: "TailwindCSS" },
        { icon: gsap, tech: "GSAP" },
        { icon: javascript, tech: "EmailJS" },
        { icon: node, tech: "Node.Js" },
        { icon: git, tech: "Git" },
      ],
    },
    metrics: {
      title:
        "Turning Mystical Experiences into Tangible Growth and Client Satisfaction",
      description:
        "The modern website significantly improved engagement, client trust, and session bookings.",
      values: [
        {
          number: "300+",
          description:
            "Generated 300+ bookings during first three months of launch.",
        },
        {
          number: "70%",
          description:
            "Achieved 70% increase in online inquiries from potential clients.",
        },
        {
          number: "4.8/5",
          description:
            "Maintained average 4.8 out of 5 client satisfaction rating.",
        },
      ],
    },
    problem: {
      title:
        "Overcoming Weak Branding, Outdated Systems, and Poor Client Connections",
      description:
        "The client needed a modern platform to connect with spiritual seekers and streamline bookings.",
      reason: [
        {
          reasonTitle: "Outdated branding",
          reasonDesc:
            "Previous site failed to reflect essence of spirituality and trust.",
        },
        {
          reasonTitle: "Poor booking system",
          reasonDesc:
            "Clients struggled with unreliable, confusing booking process online.",
        },
        {
          reasonTitle: "Low trust factor",
          reasonDesc:
            "Design lacked credibility and didn’t inspire confidence in visitors.",
        },
        {
          reasonTitle: "Weak visibility",
          reasonDesc:
            "Limited search visibility prevented reaching new potential spiritual seekers.",
        },
      ],
    },
    approach: {
      title:
        "Blending Mystical Aesthetics with Modern Tools for Seamless Client Journeys",
      description:
        "We built a modern, intuitive website that blends mystical aesthetics with practical booking tools.",
      reason: [
        {
          reasonTitle: "Mystical UI",
          reasonDesc:
            "Crafted bright elegant themes with purple accents for trust.",
        },
        {
          reasonTitle: "Easy booking",
          reasonDesc:
            "Integrated EmailJS with scheduling for seamless online bookings.",
        },
        {
          reasonTitle: "Responsive design",
          reasonDesc:
            "Designed layouts ensuring fluidity across desktop and mobile devices.",
        },
        {
          reasonTitle: "SEO friendly",
          reasonDesc:
            "Optimized content to improve discoverability and boost organic traffic.",
        },
      ],
    },
  },
  {
    id: 3,
    serviceId: 3,
    serviceTitle: "Development",
    num: "03",
    top: "0",
    video: [
      { src: qeske, type: "video/webm" },
      { src: qeskeMp4, type: "video/mp4" },
    ],
    image: qeskeImg,
    title: "Qeske Maastricht",
    subtitle: "Co-working Space Website",
    tag: { design: true, develop: true, concept: false },
    description:
      "A sleek website for Qeske, a modern co-working space in Maastricht, designed to attract startups and entrepreneurs with a collaborative vibe.",
    techStack: {
      tech: [
        { icon: react, tech: "React" },
        { icon: tailwind, tech: "TailwindCSS" },
        { icon: javascript, tech: "JavaScript" },
        { icon: gsap, tech: "GSAP" },
        { icon: git, tech: "Git" },
      ],
    },
    metrics: {
      title:
        "Empowering Communities Through Visibility, Growth, and Stronger Collaborations",
      description:
        "The new website boosted awareness, registrations, and partnerships for Qeske’s community.",
      values: [
        {
          number: "40%",
          description:
            "Achieved 40% increase in coworking memberships signups online.",
        },
        {
          number: "10+",
          description:
            "Secured 10+ new collaborations with local startup partners.",
        },
        {
          number: "85%",
          description:
            "Improved overall user satisfaction rating to 85% positive feedback.",
        },
      ],
    },
    problem: {
      title:
        "Addressing Outdated Design and Ineffective Communication for Growth",
      description:
        "Qeske needed an engaging website to highlight its space and attract new members.",
      reason: [
        {
          reasonTitle: "Outdated site",
          reasonDesc:
            "Old design didn’t capture modern coworking energy effectively.",
        },
        {
          reasonTitle: "No clear messaging",
          reasonDesc:
            "Website failed to communicate coworking benefits clearly to visitors.",
        },
        {
          reasonTitle: "Limited visuals",
          reasonDesc:
            "Didn’t showcase actual spaces and working environment visually enough.",
        },
        {
          reasonTitle: "Low engagement",
          reasonDesc:
            "Visitors bounced quickly due to flat, uninspiring content experiences.",
        },
      ],
    },
    approach: {
      title:
        "Building Vibrant, Interactive Platforms that Reflect Energy and Collaboration",
      description:
        "We built an interactive, vibrant site that communicates the energy of Qeske’s coworking community.",
      reason: [
        {
          reasonTitle: "Modern UI",
          reasonDesc:
            "Delivered clean visuals to highlight innovation and creativity culture.",
        },
        {
          reasonTitle: "GSAP Animations",
          reasonDesc:
            "Added smooth animations for engaging, dynamic scrolling experiences.",
        },
        {
          reasonTitle: "Showcased spaces",
          reasonDesc:
            "Highlighted real workspace images to inspire trust and appeal.",
        },
        {
          reasonTitle: "Community vibe",
          reasonDesc:
            "Designed focus around collaboration and creativity within coworking spirit.",
        },
      ],
    },
  },
  {
    id: 4,
    serviceId: 4,
    serviceTitle: "3D Web Design",
    num: "04",
    top: "40",
    video: [
      { src: home, type: "video/webm" },
      { src: homeMp4, type: "video/mp4" },
    ],
    image: homeImg,
    title: "Home Interior",
    subtitle: "Modern & Creative Interior Design Website",
    tag: { design: true, develop: true, concept: true },
    description:
      "A modern interior design website that blends visuals, layouts, and animations to attract homeowners seeking inspiration.",
    techStack: {
      tech: [
        { icon: react, tech: "React" },
        { icon: tailwind, tech: "TailwindCSS" },
        { icon: gsap, tech: "GSAP" },
        { icon: git, tech: "Git" },
      ],
    },
    metrics: {
      title:
        "Delivering Elegant Storytelling Websites that Inspire Clients and Conversions",
      description:
        "The platform helped designers attract more inquiries and improve lead conversions.",
      values: [
        {
          number: "60%",
          description:
            "Boosted lead conversion rate by 60% through improved storytelling design.",
        },
        {
          number: "500+",
          description:
            "Generated over 500 project inquiries within six-month period.",
        },
        {
          number: "90%",
          description:
            "Achieved 90% client satisfaction score through engaging design solutions.",
        },
      ],
    },
    problem: {
      title:
        "Elevating Interior Design Beyond Generic, Forgettable Online Experiences",
      description:
        "The client wanted a platform that combines modern interior trends with a high-end brand feel.",
      reason: [
        {
          reasonTitle: "Generic templates",
          reasonDesc:
            "Competitive market templates failed to showcase uniqueness or identity.",
        },
        {
          reasonTitle: "No visual storytelling",
          reasonDesc:
            "Platform didn’t communicate design philosophy through compelling visuals.",
        },
        {
          reasonTitle: "Weak branding",
          reasonDesc:
            "Colors and typography lacked distinctiveness, reducing brand recognition.",
        },
        {
          reasonTitle: "No animations",
          reasonDesc:
            "Flat presentation failed to create inspiring, immersive experiences online.",
        },
      ],
    },
    approach: {
      title:
        "Designing Immersive Platforms that Combine Elegance, Motion, and Functionality",
      description:
        "We designed a storytelling-focused website showcasing spaces with elegance and creativity.",
      reason: [
        {
          reasonTitle: "High-quality visuals",
          reasonDesc:
            "Used polished mockups and real imagery to convey design ethos.",
        },
        {
          reasonTitle: "GSAP Animation",
          reasonDesc:
            "Integrated fluid transitions ensuring engaging motion across sections.",
        },
        {
          reasonTitle: "Strong branding",
          reasonDesc:
            "Crafted typography and palette strengthening design identity distinctly.",
        },
        {
          reasonTitle: "User-first",
          reasonDesc:
            "Designed clear CTAs ensuring seamless navigation and conversions.",
        },
      ],
    },
  },
  {
    id: 5,
    serviceId: 5,
    serviceTitle: "SEO",
    num: "05",
    top: "0",
    video: [
      { src: fashionag, type: "video/webm" },
      { src: fashionagMp4, type: "video/mp4" },
    ],  
    image: fagencyImg,
    title: "Fashion Agency",
    subtitle: "Creative Agency for Fashion Brands",
    tag: { design: true, develop: true, concept: false },
    description:
      "A modern fashion agency website designed to connect brands with creative talent and showcase agency services.",
    techStack: {
      tech: [
        { icon: html, tech: "HTML" },
        { icon: css, tech: "CSS" },
        { icon: javascript, tech: "JavaScript" },
        { icon: git, tech: "Git" },
      ],
    },
    metrics: {
      title:
        "Driving Agency Growth with Creative Branding and Stronger Digital Presence",
      description:
        "The modern agency website boosted visibility, collaborations, and client trust rapidly.",
      values: [
        {
          number: "50+",
          description:
            "Facilitated 50+ brand collaborations within three months of launch.",
        },
        {
          number: "3x",
          description:
            "Generated three times more inbound inquiries from interested clients.",
        },
        {
          number: "92%",
          description:
            "Achieved 92% positive feedback from agency partners and collaborators.",
        },
      ],
    },
    problem: {
      title:
        "Addressing Weak Identity and Lack of Online Visibility in Fashion Industry",
      description:
        "The agency needed a modern site to reflect creativity and attract fashion brands.",
      reason: [
        {
          reasonTitle: "No digital presence",
          reasonDesc:
            "Clients struggled discovering agency due to absent digital presence.",
        },
        {
          reasonTitle: "Weak identity",
          reasonDesc:
            "Visuals and branding failed to distinguish agency from competitors.",
        },
        {
          reasonTitle: "Unclear services",
          reasonDesc:
            "Service offerings were vague, confusing, and lacked clear explanations.",
        },
        {
          reasonTitle: "No engagement",
          reasonDesc:
            "Flat designs lacked interactions to captivate and retain visitors.",
        },
      ],
    },
    approach: {
      title:
        "Designing Bold, Engaging Platforms that Showcase Creativity and Trust",
      description:
        "We designed a creative agency website with strong visuals and smooth interactions.",
      reason: [
        {
          reasonTitle: "Bold branding",
          reasonDesc:
            "Used vibrant colors and typography to strengthen agency presence.",
        },
        {
          reasonTitle: "Animated visuals",
          reasonDesc:
            "Implemented GSAP animations to create immersive brand experiences.",
        },
        {
          reasonTitle: "Service clarity",
          reasonDesc:
            "Simplified services into clear messaging for easy comprehension.",
        },
        {
          reasonTitle: "Client focus",
          reasonDesc:
            "Showcased results and case studies to attract potential clients.",
        },
      ],
    },
  },
  {
    id: 6,
    serviceId: 6,    
    num: "06",
    top: "40",
    video: [
      { src: pfl, type: "video/webm" },
      { src: pflMp4, type: "video/mp4" },
    ],
    image: pflImg,
    title: "Plan For Life",
    subtitle: "Financial Advisory Website",
    tag: { design: true, develop: true, concept: false },
    description:
      "A financial advisory firm website designed to build trust, highlight services, and drive client conversions.",
    techStack: {
      tech: [
        { icon: react, tech: "React" },
        { icon: tailwind, tech: "TailwindCSS" },
        { icon: node, tech: "Node.Js" },
        { icon: redis, tech: "Redis" },
        { icon: git, tech: "Git" },
        { icon: gsap, tech: "GSAP" },
      ],
    },
    metrics: {
      title:
        "Building Trustworthy Digital Platforms That Convert Clients With Confidence",
      description:
        "The site elevated credibility, showcased expertise, and drove higher client engagement.",
      values: [
        {
          number: "35%",
          description:
            "Delivered 35% increase in new client inquiries via platform.",
        },
        {
          number: "20%",
          description:
            "Achieved 20% more conversions directly through the website design.",
        },
        {
          number: "4.9/5",
          description: "Maintained average trust score rating of 4.9 out of 5.",
        },
      ],
    },
    problem: {
      title:
        "Overcoming Weak Digital Presence That Undermined Client Trust and Growth",
      description:
        "PFL needed a trustworthy, modern platform to reflect financial expertise.",
      reason: [
        {
          reasonTitle: "Outdated design",
          reasonDesc:
            "Old visuals undermined trust, looked unprofessional and unreliable.",
        },
        {
          reasonTitle: "Weak structure",
          reasonDesc:
            "Content structure failed to explain services clearly to prospects.",
        },
        {
          reasonTitle: "Lack of CTAs",
          reasonDesc:
            "Limited engagement prompts prevented user conversion and contact initiation.",
        },
        {
          reasonTitle: "Non-responsive",
          reasonDesc:
            "Website failed on mobile, reducing reach among younger demographics.",
        },
      ],
    },
    approach: {
      title:
        "Designing Modern, Credible Platforms That Reflect Expertise and Reliability",
      description:
        "We built a professional, modern, responsive site tailored for financial trust-building.",
      reason: [
        {
          reasonTitle: "Clean design",
          reasonDesc:
            "Minimalist layout built confidence with clarity and professionalism.",
        },
        {
          reasonTitle: "Structured content",
          reasonDesc:
            "Service sections explained offerings clearly, encouraging engagement.",
        },
        {
          reasonTitle: "Strong CTAs",
          reasonDesc:
            "Placed compelling prompts driving client interaction across sections.",
        },
        {
          reasonTitle: "Responsive layout",
          reasonDesc:
            "Optimized design ensured accessibility across multiple devices.",
        },
      ],
    },
  },
    
];
