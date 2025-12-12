import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Portfolio.jsx — Clean Minimal White Theme (Dark Mode Fully Removed)
// - No dark mode classes
// - No dark mode logic
// - Minimal clean UI
// - Smooth scroll + hover animations + loading animation kept

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: "FixIt — Local Services Marketplace",
      desc: "A platform that connects users with local service providers for repairs, home services, and on-demand assistance. Includes user authentication, provider listings, booking flow, and service management dashboard.",
      tech: ["React", "Node", "MongoDB", "Express"],
      repo: "https://github.com/Shifan03/fixit-worker-booking",
      demo: "https://fixit-demo.example.com",
      image: "/projects/fixit-screenshot.png",
    },
  ];

  useEffect(() => {
    // Enable smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = "smooth";

    // Basic SEO meta tags useful for link previews
    document.title = "Shifankhan Pathan — Full Stack Developer (MERN)";
    let desc = document.querySelector("meta[name=description]");
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute(
      "content",
      "MERN Full Stack Developer — FixIt project and production-ready web applications."
    );

    // Simulate a short loading state for the fade-in effect
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin border-slate-600" />
            <div className="text-sm text-slate-600">Loading portfolio...</div>
          </div>
        </div>
      )}

      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">Shifankhan Pathan</h4>
        </div>

        <nav className="hidden sm:flex gap-4 text-sm text-slate-700">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight"
            >
              Full Stack Developer (MERN)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="mt-4 text-base text-slate-700 max-w-2xl"
            >
              I’m a MERN stack developer who builds clean, maintainable, and efficient web applications. I focus on clear architecture, practical UX, and writing code that’s easy to scale.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
            <a
             href="/Shifankhan_Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-4 py-2 rounded-md border text-sm bg-transparent"
            >
            Download Resume
            </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="w-36 h-36 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border"
            >
              <img src="/headshot.jpg" alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-8">
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-semibold">Selected projects</h3>
            <a href="https://github.com/Shifan03?tab=repositories" className="text-sm text-slate-600 hover:underline">View all on GitHub</a>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col p-4 bg-white rounded-xl shadow-sm border transform transition hover:-translate-y-1 hover:shadow-lg duration-200"
              >
                <div className="w-full rounded-md overflow-hidden bg-slate-100">
                  <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                </div>

                <div className="mt-4 flex-1">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed max-w-prose">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs bg-transparent px-2 py-1 rounded-full border text-slate-600">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex gap-3">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-block px-3 py-2 rounded-md border text-sm">Repo</a>
                </div>
              </article>
            ))}

            <article className="flex flex-col p-4 bg-white rounded-xl shadow-sm border items-center justify-center text-center">
              <div className="w-full rounded-md overflow-hidden bg-slate-100 h-44 flex items-center justify-center">
                <div className="text-sm text-slate-500">Coming Soon......</div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">More projects coming soon</h4>
                <p className="mt-2 text-sm text-slate-700">I'm actively building new applications — check back soon or view my GitHub.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a href="https://github.com/Shifan03" className="text-sm underline">View GitHub</a>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="py-8">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "HTML5 & CSS3",
              "JavaScript (ES6+)",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB & Mongoose",
              "REST API Development",
              "JWT Authentication",
              "Git & GitHub",
            ].map((s) => (
              <div key={s} className="p-3 bg-white rounded-lg border text-sm">{s}</div>
            ))}
          </div>
        </section>

        <section id="about" className="py-8">
          <h3 className="text-2xl font-semibold">About me</h3>
          <p className="mt-4 text-sm text-slate-700 max-w-2xl">I’m an IT student (B.Tech 2026) and a passionate MERN Stack Developer who enjoys turning ideas into clean, functional, and user-friendly web applications. I focus on writing maintainable code, improving performance, and continuously learning new technologies to grow as a full stack engineer.</p>
        </section>

        <section id="contact" className="py-8">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-3 text-sm text-slate-700">Interested in collaborating or hiring? Reach out — I typically respond within 24–48 hours.</p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="mailto:pathanshifan773@gmail.com" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Email Me</a>
            <a href="https://github.com/Shifan03" className="px-4 py-2 rounded-lg border text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/shifankhan-pathan-b62794202/" className="px-4 py-2 rounded-lg border text-sm">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 border-t">
        <div className="max-w-5xl mx-auto px-6 text-sm text-slate-600">© {new Date().getFullYear()} Shifankhan Pathan. </div>
      </footer>
    </div>
  );
}









