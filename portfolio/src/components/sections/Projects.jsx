import { RevealOnScroll } from "../RevealOnScroll";
import { Card } from "../utils/Card";
export function Projects() {

  const projects = [
    {
      name: "Portfolio",
      description:
        "A sleek and responsive personal portfolio website showcasing development projects, skills, and experience. Built using modern technologies with a focus on UI/UX and accessibility.",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/NikhilNaik23/Portfolio",
      site: "https://nikhils-portfolio-nnex.onrender.com",
      textClassName: "text-lg leading-relaxed mt-6",
      features: [
        "Responsive design optimized for all devices using TailwindCSS.",
        "Interactive UI sections for Projects, Skills, and Contact.",
        "Deployed with Render ensuring smooth navigation and fast load times.",
      ],
      accomplishments: [
        "Improved personal branding and professional presence online.",
        "Practiced component-driven development with React.",
        "Gained experience in deploying production-ready React apps.",
      ],
    },
    {
      name: "WishCart",
      description:
        "WishCart is an open-source e-commerce web app focused on CRUD operations. It allows users to explore products, add/remove items to the cart, and simulate a basic shopping experience.",
      technologies: ["React", "Chakra UI", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/NikhilNaik23/WishCart",
      site: "https://wishcart.onrender.com/",
      textClassName: "text-lg leading-relaxed mt-6",
      features: [
        "Full-featured cart system with product browse, add, and remove functionality.",
        "MongoDB for persistent product and cart data management.",
        "Modern UI built with Chakra UI for a clean and accessible design.",
      ],
      accomplishments: [
        "Completed a full-stack MERN project independently.",
        "Gained hands-on experience with RESTful APIs and MongoDB integration.",
        "Improved UI/UX design principles through Chakra UI.",
      ],
    },
    {
      name: "GroupChat App",
      description:
        "A real-time group messaging application designed for seamless communication between users. Implements live chat, authentication, and user management with a full-stack MERN setup.",
      technologies: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "socket.io",
        "Express.js",
      ],
      github: "https://github.com/NikhilNaik23/MernChatApp",
      site: "https://mernchatapp-1-3kd0.onrender.com",
      textClassName: "text-lg leading-relaxed mt-6",
      features: [
        "Real-time messaging using Socket.io with live group chat updates.",
        "JWT-based authentication system for secure user access.",
        "Chat room creation and user management capabilities.",
      ],
      accomplishments: [
        "Learned and implemented WebSocket communication.",
        "Handled multi-user authentication and real-time UI sync.",
        "Enhanced debugging and backend logging with Express middleware.",
      ],
    },
    {
      name: "Admin Dashboard",
      description:
        "An intuitive admin dashboard that allows admin users to perform full CRUD operations on user data. Built to streamline backend data management with a focus on simplicity and efficiency.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com/NikhilNaik23/AdminDashboard",
      site: "https://admindashboard-gohz.onrender.com/",
      textClassName: "text-lg leading-relaxed mt-6",
      features: [
        "Create, Read, Update, Delete operations on user/admin data.",
        "Dynamic table with filtering and inline editing capabilities.",
        "Fully responsive and accessible UI using TailwindCSS.",
      ],
      accomplishments: [
        "Mastered full CRUD implementation using React Hooks and Express.",
        "Developed reusable components and practiced clean code architecture.",
        "Improved understanding of admin roles and permission logic.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div
            className="text-white 

px-8 py-12 min-h-screen flex flex-col items-center justify-center "
          >
            {/* Content Section */}
            <div>
              {projects.map((data, idx) => (
                <Card
                  className="sticky"
                  name={data.name}
                  cn={idx === 0 ? "mt-0" : "mt-6 "}
                  textClassName={data.textClassName}
                  description={data.description}
                  technologies={data.technologies}
                  github={data.github}
                  site={data.site}
                  features={data.features}
                  accomplishments={data.accomplishments}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
