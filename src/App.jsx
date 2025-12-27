import { useEffect, useMemo, useState } from "react";
import { portfolio as p } from "./data";
import Particles from "./components/Particles";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "interests", label: "INTERESTS" },
  { id: "skills", label: "SKILLS" },
  { id: "education", label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "achievements", label: "ACHIEVEMENTS" },
  { id: "contact", label: "CONTACT" },
];

function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "home");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.4, 0.55] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  return active;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Typed({ prefix, words }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const w = words[idx] || "";
    const speed = dir === 1 ? 42 : 24;
    const pause = 900;

    const t = setTimeout(() => {
      if (dir === 1) {
        if (sub < w.length) setSub((s) => s + 1);
        else setTimeout(() => setDir(-1), pause);
      } else {
        if (sub > 0) setSub((s) => s - 1);
        else {
          setDir(1);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [idx, sub, dir, words]);

  const word = (words[idx] || "").slice(0, sub);

  return (
    <div className="heroTyped">
      {prefix} <span className="typedAccent">{word}</span>
      <span className="caret" />
    </div>
  );
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="sectionTitle">
      <div className="kicker">{kicker}</div>
      <h2 className="h2">{title}</h2>
      <div className="rule" />
    </div>
  );
}

export default function App() {
  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useScrollSpy(sectionIds);

  const [drawerOpen, setDrawerOpen] = useState(false);

  // set accent
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", p.accent);
  }, []);

  // close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setDrawerOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const aboutParagraphs = (p.about || "").split("\n\n").filter(Boolean);

  const go = (id) => {
    setDrawerOpen(false);
    scrollToId(id);
  };

  return (
    <div className="app">
      {/* background */}
      <div className="bg">
        <div className="bgGlow" />
      </div>

      {/* animated network */}
      <Particles accent={p.accent} />

      {/* MOBILE TOP BAR */}
      <header className="mobileTopbar">
        <div className="mobileLeft">
          <img className="mobileAvatar" src={p.photoPath} alt={p.name} />
          <div className="mobileNameWrap">
            <div className="mobileName">{p.shortSidebarName}</div>
            <div className="mobileBadge">{p.roleBadge}</div>
          </div>
        </div>

        <button
          className="hamburger"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`drawerOverlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* SIDEBAR (desktop + mobile drawer) */}
      <aside className={`sidebar ${drawerOpen ? "open" : ""}`}>
        <div className="profile">
          <div className="avatarWrap">
            <img className="avatar" src={p.photoPath} alt={p.name} />
          </div>

          <div className="profileName">{p.shortSidebarName}</div>
          <div className="badge">{p.roleBadge}</div>

          <nav className="nav">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className={`navItem ${active === s.id ? "active" : ""}`}
                onClick={() => go(s.id)}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="sideIcons">
          <a className="iconBtn" href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GH
          </a>
          <a className="iconBtn" href={p.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a className="iconBtn" href={`mailto:${p.email}`} aria-label="Email">
            @
          </a>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* HOME */}
        <section id="home" className="section hero">
          <div className="heroInner">
            <h1 className="h1">
              {p.hero.hello}
              <br />
              I’m {p.hero.shortName}
            </h1>

            <Typed prefix={p.hero.typedPrefix} words={p.taglineTyped} />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <SectionTitle kicker="ABOUT" title="ABOUT" />
          <div className="textCard">
            {aboutParagraphs.map((txt, i) => (
              <p className="p" key={i}>
                {txt}
              </p>
            ))}
          </div>
        </section>

        {/* INTERESTS */}
        <section id="interests" className="section">
          <SectionTitle kicker="INTERESTS" title="INTERESTS" />
          <div className="grid cards">
            {p.interestsCards.map((c) => (
              <div className="miniCard" key={c.title}>
                <div className="emoji" style={{ color: c.color }}>
                  {c.icon}
                </div>
                <div className="miniTitle">{c.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionTitle kicker="SKILLS" title="SKILLS" />
          <div className="skillsGrid">
            {Object.entries(p.skills).map(([k, list]) => (
              <div className="skillBlock" key={k}>
                <div className="skillHead">{k}</div>
                <ul className="skillList">
                  {list.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <SectionTitle kicker="EDUCATION" title="EDUCATION" />
          <div className="stack">
            {p.education.map((e) => (
              <div className="rowCard" key={e.school + e.degree}>
                <div className="rowTop">
                  <div className="rowTitle">
                    <span className="strong">{e.degree}</span>
                    <span className="muted">{"  "}at {e.school}</span>
                  </div>
                  <div className="rowDate">{e.date}</div>
                </div>
                <div className="rowSub">{e.location}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionTitle kicker="EXPERIENCE" title="WORK EXPERIENCE" />
          <div className="stack">
            {p.experience.map((x) => (
              <div className="rowCard" key={x.company + x.title}>
                <div className="rowTop">
                  <div className="rowTitle">
                    <span className="strong">{x.title}</span>
                    <span className="muted">{"  "}at {x.company}</span>
                  </div>
                  <div className="rowDate">{x.date}</div>
                </div>

                <div className="rowSub">
                  <span className="strong">Project:</span> {x.project}
                </div>
                <div className="rowSub">{x.projectSummary}</div>

                <ul className="bullets">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS (show 4 only) */}
        <section id="projects" className="section">
          <SectionTitle kicker="PROJECTS" title="PROJECTS" />
          <div className="projectsGrid">
            {p.projects.slice(0, 4).map((proj) => (
              <a
                className="projectCard"
                key={proj.name}
                href={proj.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="projectImgWrap">
                  <img className="projectImg" src={`/` + proj.image} alt={proj.name} />
                </div>
                <div className="projectBody">
                  <div className="projectName">{proj.name}</div>
                  <div className="projectStack">{proj.stack}</div>
                  <div className="projectDesc">{proj.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="viewMore">
            <a className="viewMoreLink" href={p.github} target="_blank" rel="noreferrer">
              View more on GitHub →
            </a>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="section">
          <SectionTitle kicker="ACHIEVEMENTS" title="ACHIEVEMENTS" />
          <div className="textCard">
            <ul className="bullets" style={{ marginTop: 0 }}>
              {p.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <SectionTitle kicker="CONTACT" title="GET IN TOUCH" />

          <div className="contactStack">
            <div className="contactRow">
              <div className="contactIcon">✉</div>
              <div className="contactText">
                <a href={`mailto:${p.email}`}>{p.email}</a>
              </div>
            </div>

            <div className="contactRow">
              <div className="contactIcon">📍</div>
              <div className="contactText">{p.location}</div>
            </div>

            <div className="contactRow">
              <div className="contactIcon">in</div>
              <div className="contactText">
                <a href={p.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <div className="footerSpace" />
        </section>
      </main>
    </div>
  );
}
