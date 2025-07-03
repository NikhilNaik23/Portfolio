import { useEffect,useState } from "react";
import { Helmet } from "react-helmet-async";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Nikhil Naik | MERN Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Nikhil Naik — Full Stack MERN Developer skilled in React, Node.js, MongoDB, Android, and Machine Learning."
        />
        <meta
          name="keywords"
          content="Nikhil Naik, MERN Developer, React, Node.js, MongoDB, Android Developer, Machine Learning"
        />
        <meta name="author" content="Nikhil Naik" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Nikhil Naik | Portfolio" />
        <meta
          property="og:description"
          content="Explore MERN, Android, and Machine Learning projects built by Nikhil Naik."
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nikhil Naik | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore MERN Stack and Android projects developed by Nikhil Naik."
        />
        <meta name="twitter:image" content="/preview.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nikhil Naik",
            "url": "https://yourdomain.com",
            "sameAs": [
              "https://github.com/yourgithub",
              "https://linkedin.com/in/yourlinkedin"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          }
        `}
        </script>
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />

      {!isLoaded && <LoadingScreen onComplete={() => window.location.replace(
              "https://nikhil-s-portfolio-pqsb.onrender.com"
            )} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
