export type ProjectCategory = "all" | "fullstack" | "ai" | "aiagent" | "mobile"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Crystal Cosmetics - E-Commerce Platform",
    description:
      "Developed a full-featured cosmetics e-commerce platform with product catalog, categories, cart, checkout, and user authentication. Implemented admin-side product and order management with a clean and scalable architecture.",
    image: "/projects/Screenshot (196).png",
    category: ["fullstack"],
    technologies: ["React", "Redux Toolkit", "Bootstrap", "JavaScript"],
    liveUrl: "https://crystalcosmetics.netlify.app/",
  },
  {
    id: 2,
    title: "Lahori Food - Online Food Ordering System",
    description:
      "Built a food ordering website with dynamic menus, category-based filtering, cart functionality, and order placement. Focused on responsive UI and smooth user experience for restaurant customers.",
    image: "/projects/Screenshot (197).png",
    category: ["fullstack"],
    technologies: ["React", "Redux Toolkit", "Bootstrap", "JavaScript"],
  },
  {
    id: 3,
    title: "All Nation Driving School Management System",
    description:
      "Developed a driving school management system to handle student registrations, lesson scheduling, and instructor management. Improved administrative efficiency through centralized data handling.",
    image: "/projects/allnation_driving.png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap","Articlate Storyline 360"],
  },
  {
    id: 4,
    title: "Kingdom Rides - Transport & Booking Website",
    description:
      "Created a professional transport booking website with service listings, inquiry forms, and booking flow. Optimized for performance and SEO to support business growth in the UK market.",
    image: "/projects/Screenshot (198).png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    liveUrl: "https://kingdomrides.co.uk/",
  },
    {
    id: 5,
    title: "Binkyit - Online Food Delivery Platform",
    description:
      "Built an online food delivery platform with  menu management, and order handling. Designed a scalable backend structure to support multiple vendors.",
    image: "/projects/foodyxpress.png",
    category: ["fullstack"],
    technologies: ["Node js", "React", "MongoDb", "JavaScript"],
    // liveUrl: "http://foodyxpress.com/",
  },
  {
    id: 5,
    title: "FoodyXpress - Online Food Delivery Platform",
    description:
      "Built an online food delivery platform with restaurant listings, menu management, and order handling. Designed a scalable backend structure to support multiple vendors.",
    image: "/projects/Screenshot (199).png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "JavaScript"],
    liveUrl: "http://foodyxpress.com/",
  },
  {
    id: 6,
    title: "FoodyDesign - Restaurant Website Builder",
    description:
      "Developed a restaurant-focused website showcasing menus, services, and branding elements. Emphasized clean UI design and fast loading performance.",
    image: "/projects/Screenshot (200).png",
    category: ["fullstack"],
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    liveUrl: "http://foodydesign.com/",
  },
  {
    id: 7,
    title: "Getshopin - Multi-Tenancy Healthcare Management System",
    description:
      "Worked on a multi-tenancy Laravel project for healthcare management. Implemented tenant isolation, role-based access, and scalable architecture to support multiple organizations within a single codebase.",
    image: "/projects/image.png",
    category: ["fullstack"],
    technologies: ["Laravel", "Multi-Tenancy", "MySQL", "Blade","JavaScript","Vue js"],
  },
]


export default projects
