import React, { useState, useEffect } from "react";
import "../App.css";

/**
 * Sample data — replace with API fetch if needed.
 * Images referenced like "images/course1.jpg" should exist in your public/images folder.
 */
const sampleData = {
  hero: {
    title: "Learn the Technologies That Shape Tomorrow",
    subtitle:
      "Hands-on courses, industry mentors, and project-based learning in AI, Cloud, DevOps, and Web3.",
    backgroundImage: "images/hero-edtech.jpg",
    ctaText: "Browse Courses",
    ctaAnchor: "#courses",
  },
  courses: [
    {
      id: "c-ai",
      title: "Practical AI & ML",
      category: "AI",
      level: "Intermediate",
      duration: "8 weeks",
      image: "images/Artificial-Intelligence-versus-Machine-Learning.png",
      description: "Build real-world ML models and deploy them to production.",
    },
    {
      id: "c-cloud",
      title: "Cloud Engineering Foundations",
      category: "Cloud",
      level: "Beginner",
      duration: "6 weeks",
      image: "images/cloud.jpg",
      description:
        "Foundations of cloud architecture, infra-as-code & scaling.",
    },
    {
      id: "c-devops",
      title: "DevOps & CI/CD",
      category: "DevOps",
      level: "Intermediate",
      duration: "6 weeks",
      image: "images/images.png",
      description: "Automate pipelines, monitoring, and container workflows.",
    },
    {
      id: "c-web3",
      title: "Blockchain & Web3",
      category: "Web3",
      level: "Advanced",
      duration: "8 weeks",
      image: "images/blockchain.jpg",
      description:
        "Smart contracts, tokens, and decentralized app architecture.",
    },
    // add more courses...
  ],
  instructors: [
    {
      id: "i1",
      name: "Dr. Priya R.",
      title: "AI Mentor",
      image: "images/instructor1.jpg",
    },
    {
      id: "i2",
      name: "Ramesh K.",
      title: "Cloud Architect",
      image: "images/instructor2.jpg",
    },
    {
      id: "i3",
      name: "Sara L.",
      title: "DevOps Lead",
      image: "images/instructor3.jpg",
    },
  ],
  stats: [
    { label: "Learners", value: "12,000+" },
    { label: "Courses", value: "85+" },
    { label: "Industry Mentors", value: "120+" },
  ],
  testimonials: [
    {
      quote:
        "The hands-on projects helped me get a job in cloud engineering in 3 months.",
      author: "Anita — Cloud Engineer",
    },
  ],
  events: [
    {
      id: "e1",
      title: "Bootcamp: Intro to Generative AI",
      date: "2025-10-18",
      location: "Online (Live)",
    },
  ],
};

export default function Home() {
  const [courses] = useState(sampleData.courses);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(courses);

  // derive categories
  const categories = [
    "All",
    ...Array.from(new Set(courses.map((c) => c.category))),
  ];

  // filter logic (search + category)
  useEffect(() => {
    const q = query.trim().toLowerCase();
    setFiltered(
      courses.filter((c) => {
        const matchCat =
          activeCategory === "All" || c.category === activeCategory;
        const matchQuery =
          !q ||
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q);
        return matchCat && matchQuery;
      })
    );
  }, [courses, query, activeCategory]);

  // Optional: replace sampleData with API fetch:
  // useEffect(() => {
  //   fetch("/api/home")
  //     .then(res => res.json())
  //     .then(data => { /* set courses and other state */ })
  //     .catch(console.error);
  // }, []);

  return (
    <main className="page home">
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(6,12,34,0.45), rgba(6,12,34,0.45)), url(${sampleData.hero.backgroundImage})`,
        }}
        aria-label="Hero: Learn new technology courses"
      >
        <div className="hero-inner">
          <h1>{sampleData.hero.title}</h1>
          <p className="lead">{sampleData.hero.subtitle}</p>

          <div className="hero-actions">
            <a className="btn-primary" href={sampleData.hero.ctaAnchor}>
              {sampleData.hero.ctaText}
            </a>

            <div
              className="hero-search"
              role="search"
              aria-label="Search courses"
            >
              <input
                type="search"
                placeholder="Search courses, topics or instructors..."
                aria-label="Search courses"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="btn-ghost"
                onClick={() => {
                  setQuery("");
                }}
                aria-label="Clear search"
                title="Clear search"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="stats">
        {sampleData.stats.map((s) => (
          <div key={s.label} className="stat-card" aria-hidden="false">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* COURSES */}
      <section id="courses" className="courses">
        <div className="section-head">
          <h2>Featured Courses</h2>
          <p className="muted">
            Project-led learning, mentor support, and certificate paths.
          </p>
        </div>

        {/* category filters */}
        <div
          className="category-filters"
          role="tablist"
          aria-label="Course categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses-grid" role="list">
          {filtered.length === 0 && (
            <div className="empty">No courses match your search.</div>
          )}
          {filtered.map((course) => (
            <article key={course.id} className="course-card" role="listitem">
              <img src={course.image} alt={course.title} loading="lazy" />
              <div className="course-body">
                <div className="course-meta">
                  <span className="badge">{course.category}</span>
                  <small className="muted">
                    {course.level} • {course.duration}
                  </small>
                </div>
                <h3>{course.title}</h3>
                <p className="muted small">{course.description}</p>
                <div className="course-actions">
                  <a href={`/courses/${course.id}`} className="btn-outline">
                    View
                  </a>
                  <a
                    href={`/enroll/${course.id}`}
                    className="btn-primary small"
                  >
                    Enroll
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="instructors">
        <h2>Meet Our Instructors</h2>
        <div className="instructor-grid">
          {sampleData.instructors.map((ins) => (
            <div key={ins.id} className="instructor-card">
              <img src={ins.image} alt={ins.name} loading="lazy" />
              <div>
                <strong>{ins.name}</strong>
                <div className="muted small">{ins.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          {sampleData.events.map((ev) => (
            <li key={ev.id}>
              <strong>{ev.title}</strong> —{" "}
              <span className="muted">
                {new Date(ev.date).toLocaleDateString()}
              </span>{" "}
              <span className="muted">· {ev.location}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <blockquote>"{sampleData.testimonials[0].quote}"</blockquote>
        <div className="muted">— {sampleData.testimonials[0].author}</div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready to start your tech career?</h2>
        <p className="muted">
          Join thousands of learners building real projects and getting hired.
        </p>
        <a href="/signup" className="btn-cta">
          Join Now
        </a>
      </section>
    </main>
  );
}
