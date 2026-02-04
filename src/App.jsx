import { useEffect, useState } from "react";
export default function Portfolio() {
  // --- DATA ---
  const projects = [
    {
      title: "Online Train Reservation System",
      description:
      "Dynamic web-based ticket booking with auth, schedules, and secure bookings.",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      links: {code:"https://github.com/ahemanth1/Online-Train-Reservation-System" },
      image: "/train-project.jpg",
    },
    {
      title: "Flip Cards Web Component",
      description:
        "Interactive flip-card UI with smooth 3D transitions and DOM manipulation.",
      tech: ["HTML", "CSS", "JavaScript"],
      links: {code: "https://github.com/ahemanth1/FlipCards" },
      image: "/flipcard.jpg",
    },
  ];

  const skillCategories = [
  {
    title: "Programming",
    items: [
      { name: "Python", level: 4, icon: "fa-brands fa-python" },
      { name: "C", level: 3, icon: "fa-sollid fa-c" },
      { name: "Java", level:3, icon: "fa-brands fa-java"},
    ],
  },
  {
    title: "Web",
    items: [
      { name: "HTML", level: 4, icon: "fa-brands fa-html5" },
      { name: "CSS", level: 4, icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", level: 3, icon: "fa-brands fa-js" },
      { name: "PHP", level: 3, icon: "fa-brands fa-php" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", level: 3, icon: "fa-solid fa-database" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "GitHub", level: 3, icon: "fa-brands fa-github" },
      { name: "VS Code", level: 4, icon: "fa-solid fa-code" },
      { name: "Orange", level: 3, icon: "fa-solid fa-chart-simple" },
    ],
  },
];
// Theme state
  const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
});

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

  // --- EFFECTS ---
  // Animation Effects
useEffect(() => {
  // Reveal on scroll
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));

  // Animate meters
  const meters = document.querySelectorAll('[data-meter]');
  requestAnimationFrame(() => {
    meters.forEach((m) => {
      if (!(m instanceof HTMLElement)) return;
      const pct = m.getAttribute('data-meter') || '0';
      m.classList.add('meter-animate');
      m.style.setProperty('--meter-target', pct + '%');
    });
  });

  return () => io.disconnect();
}, []);



  return (
    <>
      {/* Animation styles */}
      <style>{`
        /* reveal-on-scroll */
        [data-reveal] { opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
        [data-reveal].is-visible { opacity: 1; transform: none; }

        /* soft float for hero card */
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }

        /* button micro-interactions */
        .btn { will-change: transform; }
        .btn:active { transform: translateY(0) scale(.98); }

        /* meters */
        .meter { height: 8px; background: #1a1a1a; border: 1px solid var(--border); border-radius: 999px; overflow: hidden; }
        .meter-fill { height: 100%; width: var(--meter-now, 0%); background: linear-gradient(90deg, #fff, #9ca3af); transition: width 1.2s ease .15s; }
        .meter-animate .meter-fill { width: var(--meter-target, 0%); }

        /* fancy background ornament for hero */
        .hero-ornament {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          border-radius: 16px;
        }
        .hero-ornament::before {
          content: "";
          position: absolute; inset: -20%;
          background: radial-gradient(60% 40% at 20% 30%, rgba(255,255,255,.06), transparent 60%),
                      radial-gradient(40% 30% at 80% 70%, rgba(255,255,255,.05), transparent 60%);
          filter: blur(10px);
          z-index: -1;
          animation: drift 14s linear infinite alternate;
        }
        @keyframes drift {
          0% { transform: translateX(-2%) translateY(-2%) scale(1.02); }
          100% { transform: translateX(2%) translateY(2%) scale(1.05); }
        }
      `}</style>

      {/* Header */}
      <header className="header" data-reveal>
        <div className="wrap nav">
          <a href="#home" className="brand">Hemanth Adigopula</a>
          <nav className="navlinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#internships">Internships</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn">Let’s talk</a>
          <button
            className="btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
            style={{ marginRight: 8 }}
>
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>

        </div>
      </header>

      {/* Hero */}
        {/* Hero */}
<section id="home" className="section">
  <div className="wrap hero hero-ornament" data-reveal>
    <div style={{ textAlign: 'center', width: '100%' }}>
      <span className="chip">Aspiring Software Engineer</span>
      <h1 className="title" style={{
        fontSize: '52px',
        fontWeight: '900',
        color: '#ffffff',
        marginTop: '20px',
        letterSpacing: '-1px',
        textShadow: '0 0 15px rgba(255,255,255,0.3)'
      }}>
        Hi, I’m <span className="highlight" style={{ color: '#00bcd4' }}>Hemanth Adigopula</span>
      </h1>

      <p className="subtitle" style={{
        marginTop: '16px',
        fontSize: '18px',
        maxWidth: '700px',
        marginInline: 'auto',
        lineHeight: '1.6'
      }}>
        Computer Science and Engineering student at Seshadri Rao Gudlavalleru Engineering College.<br />
      </p>

      <div className="row" style={{
        marginTop: 24,
        justifyContent: 'center',
        gap: '16px'
      }}>
        <a href="#contact" className="btn">Contact Me</a>
        <a href="/resume.pdf" className="btn">Download Resume</a>
      </div>

      <p className="subtitle" style={{
        marginTop: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color: '#9ca3af'
      }}>
        <i className="fa-solid fa-location-dot" style={{ color: '#00bcd4' }}></i>
        Repalle, Andhra Pradesh
      </p>
    </div>
  </div>
</section>



      {/* About */}
      <section id="about" className="section" data-reveal>
        <div className="wrap">
          <h2 className="section-title">About</h2>
          <p className="subtitle" style={{ marginTop: 12, maxWidth: 780 }}>
            I am a dedicated B.Tech student specializing in Computer Science and Engineering. With a solid academic background and a strong passion for technology, I aim to leverage my programming skills and problem-solving abilities to develop innovative solutions. My internships have honed my practical experience, and I thrive in collaborative settings. I am eager to contribute my skills and continue learning.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section" data-reveal>
        <div className="wrap">
          <h2 className="section-title">Skills</h2>

          {/* Local styles just for the skills UI */}
          <style>{`
            .skill-grid { display: grid; gap: 18px; grid-template-columns: repeat(2, 1fr); }
            @media (max-width: 860px){ .skill-grid { grid-template-columns: 1fr; } }
            .skill-card { background: var(--panel); border: 1px solid var(--border); border-radius: 16px; padding: 18px; }
            .skill-card h3 { margin: 0 0 8px 0; font-size: 18px; }
            .skill-list { display: grid; gap: 10px; }
            .skill-item { display: grid; grid-template-columns: 140px 1fr 60px; align-items: center; gap: 10px; }
            @media (max-width: 520px){ .skill-item { grid-template-columns: 1fr; } }
            .skill-level { color: var(--muted); font-size: 12px; text-align: right; }
            .legend { color: var(--muted); font-size: 12px; margin-top: 8px; }
          `}</style>

          <div className="skill-grid" style={{ marginTop: 16 }}>
            {skillCategories.map((cat) => (
              <div key={cat.title} className="skill-card" data-reveal>
                <h3>{cat.title}</h3>
                <div className="skill-list">
                  {cat.items.map((it) => {
                    const pct = Math.round((it.level / 5) * 100);
                    const label = it.level >= 4 ? "Advanced" : it.level === 3 ? "Intermediate" : "Beginner";
                    return (
                      <div key={it.name} className="skill-item">
                        <strong><i className={it.icon} style={{ marginRight: 8, color: '#9ca3af' }}></i>{it.name}</strong>
                        <div className="meter" data-meter={pct}>
                          <div className="meter-fill" />
                        </div>
                        <span className="skill-level">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="legend">Scale: Beginner (1–2) • Intermediate (3) • Advanced (4–5)</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="wrap">
          <h2 className="section-title">Projects</h2>
          <div className="grid projects" style={{ marginTop: 18 }}>
            {projects.map((p, i) => (
              <article key={p.title} className="project-card" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
  <div className="card-inner card">
    {p.image ? (
      <img src={p.image} alt={p.title} />
    ) : (
      <div className="card-media" style={{height:140, border:"1px solid var(--border)", borderRadius:12, background:"#1a1a1a"}} />
    )}
    <div style={{ padding: 16 }}>
      <h3 style={{ marginTop: 10 }}>{p.title}</h3>
      <p className="subtitle" style={{ marginTop: 6 }}>{p.description}</p>
      <div className="tags" style={{ marginTop: 8 }}>
        {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <a className="btn" href={p.links.code}>Code</a>
      </div>
    </div>
  </div>
</article>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="section" data-reveal>
        <div className="wrap">
          <h2 className="section-title">Internships</h2>
          <div className="grid" style={{ marginTop: 18 }}>
            <div className="card" data-reveal>
              <strong>Artificial Intelligence Intern – AIMERS Society</strong>
              <p className="subtitle">June – July 2024 • Remote</p>
            </div>
            <div className="card" data-reveal>
              <strong>AI & ML Intern – SmartBridge Educational Services Pvt. Ltd.</strong>
              <p className="subtitle">June – July 2025 • Remote</p>
            </div>
          </div>
        </div>
      </section>
      {/* Certificates */}
<section id="certificates" className="section" data-reveal>
  <div className="wrap">
    <h2 className="section-title">Certificates</h2>

    {/* Local styles for certificate layout */}
    <style>{`
      .cert-grid { display:grid; gap:18px; grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 860px){ .cert-grid { grid-template-columns: 1fr; } }
      .cert { display:flex; gap:14px; align-items: flex-start; }
      .cert .badge { width:44px; height:44px; display:grid; place-items:center; border-radius:12px; background: #1a1a1a; border:1px solid var(--border); font-size:18px; }
      :root[data-theme="light"] .cert .badge { background: #f3f4f6; }
    `}</style>

    <div className="cert-grid" style={{marginTop:16}}>
      <div className="card cert" data-reveal>
        <div className="badge">🎓</div>
        <div>
          <strong>Internet of Things (NPTEL)</strong>
          <p className="subtitle">Scored 73% • 2024</p>
        </div>
      </div>

      <div className="card cert" data-reveal>
        <div className="badge">⌨️</div>
        <div>
          <strong>Typewriting English Lower</strong>
          <p className="subtitle">First Class</p>
        </div>
      </div>

      <div className="card cert" data-reveal>
        <div className="badge">🤝</div>
        <div>
          <strong>Peer Mentoring Program</strong>
          <p className="subtitle">Acted as Mentor</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="section" data-reveal>
        <div className="wrap">
          <h2 className="section-title">Contact</h2>
          <p className="subtitle" style={{ marginTop: 12 }}>
            Reach out via email, phone, or connect with me on LinkedIn and GitHub.
          </p>
          <div className="row" style={{ marginTop: 16 }}>
            <a className="btn" href="mailto:ahemanth59@gmail.com">📧 Email Me</a>
            <a className="btn" href="tel:+918885385616">📞 Call Me</a>
            <a className="btn" href="https://github.com/ahemanth1">💻 GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/hemanth-adigopula-469219225/">🔗 LinkedIn</a>
          </div>
          <p className="subtitle" style={{ marginTop: 20 }}>
            📱 <strong>Phone:</strong> <a href="tel:+918885385616" style={{ color: 'var(--text)' }}>+91 88853 85616</a><br/>
            ✉️ <strong>Email:</strong> <a href="mailto:ahemanth59@gmail.com" style={{ color: 'var(--text)' }}>ahemanth59@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">© {new Date().getFullYear()} Hemanth Adigopula</footer>
    </>
  );
}
