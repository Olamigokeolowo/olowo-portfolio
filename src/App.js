import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:covenantolamigoke69@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    "Python",
    "Bash",
    "Docker",
    "GitHub Actions",
    "SQL",
    "Git",
    "React",
    "HTML/CSS",
    "Flask",
    "Power BI",
    "Pandas",
    "CI/CD",
  ];

  const stats = [
    { number: "90%", label: "Deployment Error Reduction" },
    { number: "1M+", label: "Records Processed" },
    { number: "60%", label: "Time Savings Achieved" },
    { number: "98%", label: "CI/CD Success Rate" },
  ];

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "NLPC Pension Administrator",
      location: "Lagos, Nigeria",
      date: "Mar 2025 - Aug 2025",
      achievements: [
        "Deployed secure VPN access across 6+ departments, enabling remote work capabilities and seamless inter-branch communication, resulting in a 30% improvement in operational flexibility",
        "Configured and installed wireless printers and scanners in 10+ departments, reducing document processing time by 40% and streamlining administrative workflows",
        "Collaborated with the QA team to document step-by-step requirements for multiple in-house applications, enhancing testing accuracy and accelerating development cycles by 20%",
        "Maintained technical documentation of daily tasks, deployments, and learnings via Substack and LinkedIn, growing personal brand reach by 300% and increasing audience engagement across tech communities",
        "Provided first-level IT support and troubleshooting for 40+ staff, resolving hardware/software issues and reducing downtime across business-critical systems by 35%",
        "Participated in infrastructure planning meetings, contributing to the optimization of internal network topology and recommending tools that improved system performance by 15%",
      ],
    },
    {
      title: "DevOps Engineer Intern",
      company: "Inventors Community",
      location: "Ogun State, Nigeria",
      date: "Oct 2024 - Dec 2024",
      achievements: [
        "Overhauled legacy deployment pipeline by integrating Docker and GitHub Actions, reducing deployment errors by 90% and cutting build time from 15 minutes to under 5 minutes, saving over 100 developer hours in 3 months",
        "Diagnosed and resolved recurring CI failures caused by environment mismatches, introducing container-based builds and achieving a 98% success rate in automated testing and deployment",
        "Engineered a data ingestion and cleaning pipeline that processed 1M+ records from 5 different sources using Python and Pandas; reduced manual data wrangling time by 60% and improved data integrity by 25%",
        "Developed and deployed a business workflow dashboard for a logistics client using Power BI and Flask, which cut report preparation time from 3 days to 4 hours and increased cross-functional collaboration by 40%",
        "Created version-controlled, modular infrastructure documentation and onboarding guides, decreasing team ramp-up time from 7 days to 2 days and improving team velocity by 35%",
        "Spearheaded a workflow migration initiative that resulted in a 30% increase in model retraining frequency, which directly led to a 27% improvement in the client's fraud detection precision score",
      ],
    },
  ];

  // Added projects array for Projects section
  const projects = [
    {
      id: "traffichatbot",
      name: "TrafficChatBot",
      description:
        "AI-powered chat assistant that provides real-time traffic updates, routing suggestions, and incident alerts. Integrates with traffic APIs with the backend using python.",
      tech: ["Python", "Flask", "Twilio", "Google Maps API", "Docker"],
      live: "https://traffichat.vercel.app",
    },
    {
      id: "quasest",
      name: "Quasest",
      description:
        "A server-rendered e-commerce platform built with  quasar, optimized for performance and SEO. A mobile app version was also developed.",
      tech: ["Python", "Vite", "Javascript/Typescript", "Node.js"],
      live: "https://quasest.onrender.com",
    },
    {
      id: "prochecka",
      name: "ProChecka",
      description:
        "A personalized Diabetes prevention platform journey app to help users stay fit and healthy. This is a health assistant app focused on diabetes awareness and prevention, tailored for the african community.",
      tech: ["Next.js", "Python", "PostgresSQL", "React"],
      live: "https://prochecka.vercel.app",
    },
  ];

  return (
    <div className={`portfolio ${theme}`}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          --primary-color: #2563eb;
          --secondary-color: #1e40af;
          --text-primary: #1f2937;
          --text-secondary: #6b7280;
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --accent: #3b82f6;
          --border: #e5e7eb;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: var(--text-primary);
          background-color: var(--bg-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .portfolio.dark {
          --text-primary: #f9fafb;
          --text-secondary: #d1d5db;
          --bg-primary: #111827;
          --bg-secondary: #1f2937;
          --border: #374151;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          transition: background-color 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          list-style: none;
        }

        /* Hamburger for small screens */
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        .hamburger .bar {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          position: relative;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .hamburger .bar::before,
        .hamburger .bar::after {
          content: '';
          position: absolute;
          left: 0;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .hamburger .bar::before { top: -7px; }
        .hamburger .bar::after { top: 7px; }

        /* Mobile: hide default nav-links and show mobile menu when open */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          /* When menuOpen, show vertical mobile nav */
          .nav-links.open {
            display: flex;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background-color: var(--bg-primary);
            flex-direction: column;
            gap: 0;
            padding: 1rem 1.5rem 1.5rem 1.5rem;
            border-bottom: 1px solid var(--border);
          }

          .nav-links.open li {
            width: 100%;
            padding: 0.5rem 0;
          }

          .nav-links.open button {
            width: 100%;
            text-align: left;
            font-size: 1rem;
            padding: 0.75rem 0.5rem;
            background: none;
            border: none;
          }

          /* Transform hamburger to X when open */
          .hamburger.open .bar {
            transform: rotate(45deg);
          }

          .hamburger.open .bar::before {
            transform: rotate(90deg) translateX(0);
            top: 0;
          }

          .hamburger.open .bar::after {
            opacity: 0;
          }
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary-color), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background-color: var(--primary-color);
          color: white;
        }

        .btn-primary:hover {
          background-color: var(--secondary-color);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-secondary:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .about-text h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-card {
          background-color: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          border: 1px solid var(--border);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: var(--primary-color);
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .skill-tag {
          background-color: var(--bg-secondary);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          text-align: center;
          border: 1px solid var(--border);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .experience-item {
          position: relative;
          padding-bottom: 3rem;
          border-left: 2px solid var(--border);
          padding-left: 2rem;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -0.5rem;
          top: 0;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--primary-color);
        }

        .experience-header {
          margin-bottom: 1rem;
        }

        .experience-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--text-primary);
        }

        .experience-company {
          color: var(--primary-color);
          font-weight: 500;
        }

        .experience-date {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .experience-achievements {
          list-style: none;
          padding-left: 0;
        }

        .experience-achievements li {
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .experience-achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        .education-card {
          background-color: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          margin-bottom: 2rem;
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .education-title {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .education-grade {
          background-color: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
        }

        .coursework {
          margin-top: 1rem;
        }

        .coursework-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .coursework-list {
          color: var(--text-secondary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info {
          background-color: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
        }

        .contact-info h3 {
          margin-bottom: 1.5rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          font-family: inherit;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        footer {
          background-color: var(--bg-secondary);
          padding: 2rem;
          text-align: center;
          border-top: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .social-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          /* When menuOpen, show vertical mobile nav */
          .nav-links.open {
            display: flex;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background-color: var(--bg-primary);
            flex-direction: column;
            gap: 0;
            padding: 1rem 1.5rem 1.5rem 1.5rem;
            border-bottom: 1px solid var(--border);
          }

          .nav-links.open li {
            width: 100%;
            padding: 0.5rem 0;
          }

          .nav-links.open button {
            width: 100%;
            text-align: left;
            font-size: 1rem;
            padding: 0.75rem 0.5rem;
            background: none;
            border: none;
          }

          /* Transform hamburger to X when open */
          .hamburger.open .bar {
            transform: rotate(45deg);
          }

          .hamburger.open .bar::before {
            transform: rotate(90deg) translateX(0);
            top: 0;
          }

          .hamburger.open .bar::after {
            opacity: 0;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          section {
            padding: 3rem 1rem;
          }

          .experience-timeline {
            padding-left: 1rem;
          }

          .experience-item {
            padding-left: 1.5rem;
          }
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection("home")}>
            Olowo Covenant Olamigoke
          </div>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <span className="bar" />
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <button onClick={() => handleNavClick("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("about")}>About</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("experience")}>
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("education")}>
                Education
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contact")}>Contact</button>
            </li>
            <li>
              <button
                className="theme-toggle"
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home">
        <div className="hero-content">
          <h1>Software Engineer </h1>
          <p className="hero-subtitle">
            Specializing in CI/CD automation, infrastructure optimization, and
            scalable systems. Passionate about building efficient pipelines and
            delivering high-impact solutions.
          </p>
          <div className="cta-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("experience")}
            >
              View My Work
            </button>
            <a
              href="mailto:covenantolamigoke69@gmail.com?subject=Resume Request"
              className="btn btn-secondary"
            >
              Request Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <h3>Software Engineer & Problem Solver</h3>
            <p>
              I'm a Computer Science undergraduate from Bells University of
              Technology with a Second Class Upper degree, recognized on the
              Dean's List for 2023-2024. My journey in tech has been driven by a
              passion for automation, system optimization, and creating
              efficient workflows that make a real difference.
            </p>
            <p>
              My experience spans software development and solution providing,
              where I've successfully reduced deployment errors by 90%, cut
              build times from 15 minutes to under 5 minutes, and engineered
              data pipelines processing over 1 million records. I thrive on
              solving complex technical challenges and transforming inefficient
              processes into streamlined, automated systems.
            </p>
            <p>
              Beyond technical skills, I bring leadership experience as former
              President of Bells University Student's Association, where I honed
              my ability to collaborate, communicate, and drive initiatives that
              impact communities.
            </p>
          </div>
          <div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <h4 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              Technical Skills
            </h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-title">{exp.title}</div>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-date">
                  {exp.date} | {exp.location}
                </div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Projects section */}
      <section id="projects">
        <h2 className="section-title"> Projects</h2>
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="education-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.description}
                </div>
                <div
                  style={{
                    marginBottom: "0.75rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <strong>Tech:</strong> {p.tech.join(" • ")}
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}
              >
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education">
        <h2 className="section-title">Education & Achievements</h2>
        <div className="education-card">
          <div className="education-header">
            <div>
              <div className="education-title">
                Bachelor of Technology in Computer Science
              </div>
              <div
                style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}
              >
                Bells University of Technology | Ogun State, Nigeria
              </div>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginTop: "0.25rem",
                }}
              >
                Nov 2021 - Jul 2026
              </div>
            </div>
            <div className="education-grade">
              Second Class Upper
              <br />
              Dean's List 2023-2024
            </div>
          </div>
          <div className="coursework">
            <div className="coursework-title">Relevant Coursework:</div>
            <div className="coursework-list">
              Operating Systems • Automation Scripting with Bash • Security
              Systems Implementation • CI/CD Pipeline Development and
              Implementation • Collaboration and Communication
            </div>
          </div>
        </div>

        <div className="education-card">
          <h3 style={{ marginBottom: "1rem" }}>Certifications & Recognition</h3>
          <ul className="experience-achievements">
            <li>
              Bells University Student's Association (BUSA) Recognition of
              Exemplary Leadership
            </li>
            <li>President, Bells University Student's Association</li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology and innovation.
            </p>
            <div className="contact-method">
              <span>📧</span>
              <span>covenantolamigoke69@gmail.com</span>
            </div>
            <div className="contact-method">
              <span>🔗</span>
              <span>https://www.linkedin.com/in/covenant-olowo</span>
            </div>
            <div className="contact-method">
              <span>💻</span>
              <span>https://github.com/Olamigokeolowo</span>
            </div>
            <div className="contact-method">
              <span>📝</span>
              <span>substack.com/@olowocovenant</span>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">
              Send Message
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Olowo Covenant. All rights reserved.</p>
        <div className="social-links">
          <a href="mailto:covenantolamigoke69@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/covenant-olowo">LinkedIn</a>
          <a href="https://github.com/Olamigokeolowo">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
