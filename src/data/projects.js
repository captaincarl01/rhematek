const CATEGORIES = [
  "All",
  "Websites",
  "React Apps",
  "School Systems",
  "Business Platforms",
  "Landing Pages",
];

const projects = [
  {
    slug: "cbt-platform",
    title: "School Platform",
    image: "/images/project9.png",
    category: "School Systems",
    status: "Completed",
    overview:
      "A modern, responsive school website designed to give schools a professional online presence. The project includes essential pages such as Home, About, Admissions, Gallery, News, Contact, and an Academic Calendar. The goal was to create a website that helps schools showcase their brand, provide important information to parents and prospective students, and simplify the admission process. The interface was built with a focus on usability, performance, and responsiveness across devices.",
    challenge:
      "Organizing a large amount of school information without overwhelming visitors,Creating a navigation structure that is simple for parents, students, and staff,Designing a professional interface that builds trust,Making every page responsive across mobile, tablet, and desktop devices,Keeping the website visually engaging while maintaining fast loading speeds.",
    approach:
      "Planned the site structure before development to ensure clear navigation, Designed reusable UI components for consistency throughout the website, Built a responsive layout using modern CSS techniques, Organized content into dedicated pages for admissions, news, events, gallery, and contact information, Optimized images and layouts to improve user experience and performance, Deployed the project online for easy sharing and demonstrations.",
    stack: ["React", "React Router", "Tailwind CSS", "Figma"],
    lessons:
      "How to structure medium-sized React applications, The importance of reusable components for maintainability, Better responsive design techniques for different screen sizes, Organizing content for non-technical users, Improving deployment workflows using Netlify.",
    improve:
      "I'd formalize the Moderator role's permissions earlier — that scope was still undefined partway through, which slowed down the dashboard planning.",
    live: "https://schoollwebsite.netlify.app",
    github: "https://github.com/captaincarl01",
  },
  {
    slug: "huisverhuur",
    title: "HuisVerhuur",
    image: "/images/project1.png",
    category: "Real Estate/ PropTech",
    status: "In Development",
    overview:
      "Huisverhuur, a modern real estate platform built to simplify apartment and house rentals across the Netherlands and Germany, Users can browse available properties, filter listings by location and price, view detailed property information, register for an account, contact property owners, and manage listings through a dedicated dashboard, The platform focuses on delivering a fast, responsive, and user-friendly experience for both renters and property managers,",
    challenge:
      "Building a scalable property listing structure, Managing user authentication and protected routes, Designing an intuitive property search and filtering experience, Connecting the React frontend with the Node.js backend and MongoDB database, Handling responsive layouts for property cards and dashboards, Managing application state across multiple pages.",
    approach:
      "Designed a modular component-based architecture using React, Implemented React Router for seamless navigation, Built a REST API with Node.js and Express, Used MongoDB to store users and property listings, Added authentication for secure user access, Created reusable UI components for consistency, Deployed the frontend and backend separately for better scalability.",
    stack: ["React.js", "React Router", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "CSS3", "Vercel", "Railway", "Socket.io", "Cloudinary"],
    lessons:
      "Building full-stack applications from end to end, Integrating React with REST APIs, Structuring backend routes and database models, Managing authentication and protected pages, Organizing larger codebases for maintainability, Deploying frontend and backend independently.",
    improve:
      "Add property image uploads with cloud storage, Integrate interactive maps for property locations, Add favorites and saved properties, Implement real-time messaging between renters and landlords, Add booking/request-to-view functionality, Improve SEO and performance optimization, Introduce role-based access for landlords and tenants, Add multilingual support for international users.",
    live: "https://huisverhuuer.vercel.app",
    github: "https://github.com/captaincarl01",
  },
  {
    slug: "royalty-gadgets",
    title: "Royalty Gadgets",
    image: "/images/project3.png",
    category: "Business Platforms",
    status: "Client Project",
    overview:
      "An e-commerce platform for a gadget seller in Ibadan, initially prototyped as PlugPoint before becoming a full client build.",
    challenge:
      "Build a working storefront — product catalog, cart, and checkout — paired with a real backend and image storage, for a client selling physical inventory.",
    approach:
      "Built the React and Vite frontend myself, paired with a Node/Express backend, MongoDB Atlas, Cloudinary for images, and JWT auth — learning each backend command step by step during the build.",
    stack: ["React", "Vite", "Node.js", "MongoDB", "Cloudinary"],
    lessons:
      "Working through the backend piece by piece, rather than copying a template, made the parts I did understand actually stick.",
    improve:
      "I'd add automated tests before the next client project — this one was validated mostly by hand.",
    live: "https://gadget-dem.vercel.app",
    github: "https://github.com/captaincarl01",
  },
  {
    slug: "survey icon",
    title: "Survey Icon",
    image: "/images/project2.png",
    category: "React Apps",
    status: "Live",
    overview:
      "Survey Icon, a web-based survey platform designed to help individuals and organizations create, share, and manage surveys with ease, The application provides an intuitive interface for building surveys, collecting responses, and organizing survey data while delivering a responsive and user-friendly experience",
    challenge:
      "Designing a flexible survey structure for different question types, Managing dynamic form creation and validation, Handling user input efficiently, Organizing survey data for easy retrieval, Creating a clean and responsive interface, Maintaining reusable and scalable components.",
    approach:
      "Designed the application with a component-based architecture, Built dynamic forms that adapt to different survey questions, Structured the application for scalability and maintainability, Focused on responsive UI and smooth user interactions, Organized survey data efficiently for future backend integration, Implemented reusable components to reduce code duplication.",
    stack: ["React.js", "JavaScript (ES6+)", "CSS3", "React Router", "Vite"],
    lessons:
      "Building dynamic form-based applications, Managing complex component state, Improving reusable component design, Structuring scalable React applications, Enhancing user experience through responsive interfaces, Writing cleaner and more maintainable code.",
    improve:
      "Add user authentication, Store surveys and responses in a database, Generate analytics and response charts, Export survey results as PDF or CSV, Support multiple question types, Enable survey sharing via unique links, Add response limits and deadlines, Integrate email notifications, Implement role-based access control.",
    live: "https://survey-icon.vercel.app",
    github: "https://github.com/captaincarl01",
  },
  {
    slug: "jk solar",
    title: "JK Solar",
    image: "/images/project4.png",
    category: "React Apps",
    status: "Live",
    overview:
      "JK Solar, a modern business website developed for a solar energy company to showcase its services, products, and expertise, The platform helps potential customers learn about renewable energy solutions, explore available solar services, and easily get in touch for consultations and installations, The website emphasizes professionalism, responsiveness, and a clean user experience.",
    challenge:
      "Presenting technical solar services in a simple and engaging way, Creating a professional brand image that builds customer trust, Organizing service information for easy navigation, Ensuring the website performs well across all devices, Designing reusable sections for future expansion.",
    approach:
      "Designed a clean and modern user interface focused on usability, Built reusable React components for consistency, Structured the website with clear navigation and service-focused pages, Optimized layouts for responsiveness across mobile and desktop devices, Focused on performance and maintainable code architecture.",
    stack: ["React.js", "JavaScript (ES6+)", "CSS3", "React Router", "Vite"],
    lessons:
      "Designing websites for service-based businesses, Structuring content to improve user engagement, Building reusable React components, Improving responsive design techniques, Optimizing frontend performance, Creating professional business-focused interfaces.",
    improve:
      "Add a quote request form, Integrate a backend-powered contact system, Showcase completed solar projects and case studies, Add customer testimonials, Implement a blog for solar energy insights, Improve SEO for better search visibility, Add live chat support, Integrate Google Maps and appointment booking.",
    live: "https://www.jksolarenergy.com.ng/",
    github: "https://github.com/captaincarl01",
  },
  {
    slug: "boma lxr",
    title: "Boma LXR",
    image: "/images/project8.png",
    category: "React Apps",
    status: "Live",
    overview:
      "Boma LXR, a modern fashion e-commerce landing page created for a clothing brand to establish a strong online presence and showcase its products, The website focuses on presenting the brand identity, highlighting fashion collections, and creating an engaging shopping experience through a clean and visually appealing interface, The goal was to build a premium-looking digital storefront that helps customers discover the brand and connect with the business.",
    challenge:
      "Creating a visually attractive design that matches a fashion brand’s identity, Balancing image-heavy content with website performance, Designing layouts that highlight products effectively, Creating a smooth user experience across different screen sizes, Building a modern interface that feels premium and professional.",
    approach:
      "Designed a minimalist and stylish interface focused on the brand’s visual identity, Created reusable React components for consistent design patterns, Structured sections to showcase products, collections, and brand information, Optimized the layout for mobile and desktop users, Focused on creating an engaging user journey from brand discovery to customer interaction.",
    stack: ["React.js", "JavaScript (ES6+)", "CSS3", "React Router", "Vite"],
    lessons:
      "Designing websites for creative industries, Understanding the importance of visual storytelling in web design, Improving UI decisions for brand-focused projects, Creating responsive layouts for image-driven websites, Building interfaces that balance aesthetics and usability.",
    improve:
      "Add full e-commerce functionality, Implement shopping cart and checkout system, Add user accounts and order tracking, Integrate payment gateways, Add product filtering and search, Build an admin dashboard for inventory management, Add customer reviews and testimonials, Implement product image galleries and animations, Improve SEO and performance optimization.",
    live: "https://bomalxr.netlify.app/",
    github: "https://github.com/captaincarl01",
  },
];

export { CATEGORIES };
export default projects;