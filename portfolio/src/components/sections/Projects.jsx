import { RevealOnScroll } from "../RevealOnScroll";
export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl mb-2 font-bold">
                {/* Project Name */} Portfolio
              </h3>
              <p className="text-gray-400 mb-4">
                {/* Project Description */}A sleek and responsive portfolio
                website built with React, Tailwind CSS, and JavaScript,
                showcasing projects, skills, and experience in an interactive
                UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {["React", "TailwindCSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between pt-8">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NikhilNaik23/Portfolio"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Code {"->"}{" "}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NikhilNaik23/Portfolio"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Site {"->"}{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl mb-2 font-bold">
                {/* Project Name */} GroupChat App
              </h3>
              <p className="text-gray-400 mb-4">
                {/* Project Description */}A real-time messaging platform built
                with Node.js, Express, Socket.io, and MongoDB, featuring group
                chats, authentication, and live updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "React",
                  "TailwindCSS",
                  "JavaScript",
                  "Node.js",
                  "MongoDB",
                  "socket.io",
                  "Express.js",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/NikhilNaik23/MernChatApp"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Code {"->"}{" "}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://mernchatapp-1-3kd0.onrender.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Site {"->"}{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
