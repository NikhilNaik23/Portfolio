import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCSS",
    "Bootstrap",
    "HTML",
    "CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "Socket.io",
  ];
  const certifications = [
    {
      name: "Web Development Certification",
      from: "Internshala",
      link: "https://drive.google.com/file/d/1gKZxqUB0GTz8CQIwgGwDJgA_NF666jRt/view",
    },
    {
      name: "Full-Stack Web Developer Certification",
      from: "LinkedIn Learning",
      link: "https://drive.google.com/file/d/12Z-KZ1Z_CR8kBTFlXOgRILOb5wCgqfGr/view",
    },
    {
      name: "Data Structures and Algorithms in C++",
      from: "Coding Ninjas",
      link: "https://drive.google.com/file/d/1RhDAIjQ072XfiPtQ96_RSisa-VavpzML/view",
    },
    {
      name: "Python, Data Science & Machine Learning Integrated Course",
      from: "Cipher Schools",
      link: "https://drive.google.com/file/d/16Yyfxt1j0lwJvPl0ShgYeKT1979z8xDc/view",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <p className="text-gray-300 mb-6">
              I'm a B.Tech CSE graduate with a strong foundation in web development, skilled in both frontend and backend technologies. I build responsive and dynamic applications using HTML, CSS, JavaScript, and React, with backend expertise in Node.js, Express.js, and MongoDB. I’m passionate about creating seamless user experiences and solving real-world problems through clean, efficient, and modern web solutions. Currently, I’m exploring full-stack development, UI/UX best practices, and performance optimization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science and Engg.</strong>- Lovely Professional University (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structure and Algorithms, Web Development
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold">{cert.name}</span> from{" "}
                      <span className="italic">{cert.from}</span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-xs text-white mx-1 py-1 w-25 px-4 rounded-lg  hover:bg-blue-600 transition"
                    >
                      View Certificate
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
