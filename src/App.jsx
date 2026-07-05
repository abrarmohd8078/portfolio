import { useEffect, useState } from "react";
import "./App.css";
import { Mail, FileText, ArrowUpRight, MapPin, GraduationCap, ExternalLink } from "lucide-react";

const Github = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const RESUME_URL = "/Abrar_s_Resume.pdf";
const HERO_IMG = "/abrar_hero.png";

const NAV = [
  { id: "about", label: "About", num: "01" },
  { id: "skills", label: "Skills", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "certs", label: "Certifications", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

const SKILLS = {
  "DevOps & Cloud": [
    { name: "Kubernetes", desc: "Container orchestration, rolling deployments, service networking." },
    { name: "Docker", desc: "Multi-stage builds, image optimization, compose-driven local stacks." },
    { name: "Terraform", desc: "Infrastructure as Code, provider modules, remote state management." },
    { name: "GitHub Actions", desc: "CI pipelines, test automation, artifact publishing workflows." },
    { name: "GitLab CI/CD", desc: "Runner-based build pipelines and staged deployment gates." },
    { name: "Ansible", desc: "Server provisioning, configuration playbooks, idempotent rollouts." },
    { name: "Azure", desc: "Resource groups, VM provisioning, cloud fundamentals baseline." },
    { name: "GCP", desc: "Compute, storage buckets, and identity-aware networking layers." },
  ],
  "Languages": [
    { name: "Python", desc: "ML pipelines, data preprocessing, automation scripting." },
    { name: "Java", desc: "OOP, algorithmic problem solving, backend service logic." },
    { name: "Rust", desc: "Systems-level tooling and performance-oriented experiments." },
    { name: "C", desc: "Low-level memory management and OS interface fundamentals." },
    { name: "JavaScript", desc: "ES6+ scripting for interactive frontends and Node runtimes." },
    { name: "TypeScript", desc: "Typed application code, safer refactors, scalable modules." },
    { name: "SQL", desc: "Query design, joins, indexing, execution plan analysis." },
  ],
  "Web Frameworks": [
    { name: "React", desc: "Component architecture, hooks, state-driven UIs." },
    { name: "Node.js", desc: "Async REST APIs, filesystem tooling, server layers." },
    { name: "Tauri", desc: "Rust-powered desktop shells with web-based UI layers." },
    { name: "HTML5", desc: "Semantic markup, accessible layouts, responsive structure." },
    { name: "Tailwind CSS", desc: "Utility-first styling with responsive design tokens." },
    { name: "RESTful APIs", desc: "Endpoint design, payload validation, auth patterns." },
  ],
  "Databases & Tools": [
    { name: "PostgreSQL", desc: "Relational modeling, joins, transactional workloads." },
    { name: "MySQL", desc: "Production SQL schemas, indexing, query tuning." },
    { name: "MongoDB", desc: "Document stores, aggregation pipelines, flexible schemas." },
    { name: "Git / GitHub", desc: "Branching strategy, code reviews, collaborative workflows." },
    { name: "Linux", desc: "Shell scripting, process management, server administration." },
    { name: "Prometheus / Grafana", desc: "Metric collection, dashboards, alerting rules." },
  ],
};

const PROJECTS = [
  {
    name: "FluxGit",
    desc: "Cross-platform desktop Git client with an integrated multi-provider AI engine. Built on a native Rust core with libgit2 bindings for sub-50ms tree parsing and a memory footprint under 150MB. Orchestrates Gemini and local Ollama inference for commit summaries and repo intelligence.",
    tags: ["Tauri", "Rust", "SvelteKit", "Gemini AI"],
    github: "https://github.com/abrarmohd8078",
  },
  {
    name: "RepoSage",
    desc: "Enterprise repository analyzer packaged as containerized microservices. Uses blue-green rollouts on Kubernetes and secure GitHub Actions pipelines targeting AWS clusters, cutting repo evaluation cycles by roughly 35%.",
    tags: ["Next.js", "Kubernetes", "Docker", "AWS"],
    github: "https://github.com/abrarmohd8078",
  },
  {
    name: "Loan Repayment ML Platform",
    desc: "Fintech analytics toolkit that visualizes repayment strategies through a KNN-based model on a Streamlit dashboard. Underlying cloud infrastructure is fully declarative via Terraform, eliminating server drift across environments.",
    tags: ["Python", "Streamlit", "KNN", "Terraform"],
    github: "https://github.com/abrarmohd8078",
  },
];

const INTERNSHIPS = [
  {
    role: "AWS Generative AI Internship",
    org: "AWS Academy",
    period: "Oct – Dec 2025",
    bullets: [
      "Configured generative model infrastructure and scaling patterns on AWS environments.",
      "Explored inference workload orchestration and cost-aware deployment strategies.",
    ],
  },
  {
    role: "AWS Cloud Internship",
    org: "AWS Academy",
    period: "Oct – Dec 2024",
    bullets: [
      "Practiced core infrastructure orchestration across VPC, IAM, EC2, and CloudWatch.",
      "Built hands-on labs covering identity, networking, and observability primitives.",
    ],
  },
  {
    role: "Google AI-ML Internship",
    org: "Google",
    period: "Apr – Jun 2024",
    bullets: [
      "Worked through ML pipelines, training architectures, and neural network operations.",
      "Built familiarity with model evaluation and end-to-end training workflows.",
    ],
  },
];

const CERTS = [
  { name: "Certified Kubernetes Administrator (CKA)", org: "Linux Foundation" },
  { name: "Docker Certified Associate", org: "Mirantis / Docker Inc" },
  { name: "AWS Certified Solutions Architect", org: "Amazon Web Services" },
  { name: "Microsoft Azure Fundamentals", org: "Microsoft" },
  { name: "Google Cloud Facilitator", org: "Google Cloud (2024–25)" },
];

const Section = ({ id, num, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-24 lg:py-32 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-baseline gap-4 mb-14">
        <span className="mono text-teal text-sm">{num}.</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-fg">{title}</h2>
        {subtitle && <span className="hidden md:block flex-1 h-px bg-white/10 ml-6" />}
      </div>
      {children}
    </div>
  </section>
);

const Nav = ({ active }) => (
  <nav data-testid="main-nav" className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0a0e14]/70 border-b border-white/5">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" className="mono text-teal text-sm tracking-wider">abrar<span className="text-fg-muted">@dev</span>:~$</a>
      <div className="hidden md:flex items-center gap-8">
        {NAV.map(n => (
          <a
            key={n.id}
            href={`#${n.id}`}
            data-testid={`nav-${n.id}`}
            className={`mono text-xs tracking-wider transition-colors ${active === n.id ? "text-teal" : "text-fg-muted hover:text-fg"}`}
          >
            <span className="text-teal">{n.num}.</span> {n.label}
          </a>
        ))}
      </div>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noreferrer"
        data-testid="nav-resume-btn"
        className="mono text-xs px-4 py-2 border border-teal/40 text-teal rounded hover:bg-teal/10 transition-colors"
      >
        Résumé
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="top" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-teal/[0.03] blur-3xl" />
    </div>
    <div className="max-w-6xl mx-auto px-6 hero-grid gap-12 items-center relative">
      <div className="space-y-7">
        <p data-testid="hero-greeting" className="mono text-teal text-sm">Hi, my name is</p>
        <h1 data-testid="hero-name" className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-fg leading-[1.05]">
          Mohammed Abrar.
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-fg-muted leading-[1.1]">
          I build <span className="text-teal">AI systems</span> with production-grade DevOps.
        </h2>
        <p className="max-w-xl text-fg-muted leading-relaxed">
          Aspiring AI & DevOps Engineer based in Hyderabad. I design end-to-end AI solutions, automate delivery pipelines, and ship containerized workloads on cloud-native infrastructure.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            data-testid="hero-projects-btn"
            className="group mono text-sm px-6 py-3 border border-teal text-teal rounded hover:bg-teal/10 transition-all inline-flex items-center gap-2"
          >
            View Projects <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="hero-resume-btn"
            className="mono text-sm px-6 py-3 border border-white/15 text-fg rounded hover:border-white/30 transition-all inline-flex items-center gap-2"
          >
            <FileText size={16} /> Resume
          </a>
          <a
            href="#contact"
            data-testid="hero-contact-btn"
            className="mono text-sm px-6 py-3 border border-white/15 text-fg rounded hover:border-white/30 transition-all inline-flex items-center gap-2"
          >
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 border-2 border-teal rounded-lg translate-x-4 translate-y-4" />
          <div className="absolute inset-0 rounded-lg overflow-hidden bg-card border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-teal/10 via-transparent to-transparent" />
            <img
              data-testid="hero-photo"
              src={HERO_IMG}
              alt="Mohammed Abrar"
              className="w-full h-full object-cover object-top "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" num="01" title="About Me" subtitle>
    <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
      <div className="space-y-5 text-fg-muted leading-relaxed">
        <p>
          I&apos;m an <span className="text-fg">AI & DevOps engineer</span> focused on building end-to-end machine learning solutions and shipping them through automated, reproducible pipelines. My work sits at the intersection of applied AI and reliable cloud infrastructure.
        </p>
        <p>
          I&apos;m currently pursuing a <span className="text-fg">B.E. in Artificial Intelligence and Data Science</span> at ISL Engineering College, graduating in 2026. Along the way I&apos;ve built ML-driven analytics tools, worked through cloud internships, and gone deep on the DevOps toolchain — from containers and orchestration to Infrastructure as Code.
        </p>
        <p>
          <span className="mono text-teal">// currently exploring</span> DevOps on Kubernetes and LLM orchestration workflows.
        </p>

        <div className="pt-4 grid grid-cols-2 gap-3 mono text-sm">
          {["Python", "Docker", "Kubernetes", "Terraform", "AWS", "React"].map(t => (
            <div key={t} className="flex items-center gap-2 text-fg-muted">
              <span className="text-teal">▸</span> {t}
            </div>
          ))}
        </div>
      </div>

      <aside className="bg-card border border-white/5 rounded-lg p-6 space-y-5">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-teal mt-0.5" />
          <div>
            <p className="mono text-xs text-fg-muted uppercase tracking-wider">Location</p>
            <p className="text-fg mt-1">Hyderabad, India</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <GraduationCap size={18} className="text-teal mt-0.5" />
          <div>
            <p className="mono text-xs text-fg-muted uppercase tracking-wider">Education</p>
            <p className="text-fg mt-1">B.E. AI & Data Science</p>
            <p className="text-fg-muted text-sm">ISL Engineering College · 2026</p>
            <p className="text-fg-muted text-sm mono mt-1">CGPA <span className="text-teal">8.5</span></p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-teal mono mt-0.5">⌘</span>
          <div>
            <p className="mono text-xs text-fg-muted uppercase tracking-wider">Focus Areas</p>
            <p className="text-fg mt-1 text-sm">AI · MLOps · Cloud · DevOps</p>
          </div>
        </div>
      </aside>
    </div>
  </Section>
);

const Skills = () => {
  const groups = Object.keys(SKILLS);
  const [tab, setTab] = useState(groups[0]);
  return (
    <Section id="skills" num="02" title="Skills & Stack" subtitle>
      <div className="flex flex-wrap gap-2 mb-10 border-b border-white/5">
        {groups.map(g => (
          <button
            key={g}
            data-testid={`skill-tab-${g.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            onClick={() => setTab(g)}
            className={`mono text-xs md:text-sm px-4 py-3 border-b-2 -mb-px transition-colors ${
              tab === g ? "border-teal text-teal" : "border-transparent text-fg-muted hover:text-fg"
            }`}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS[tab].map((s, i) => (
          <div
            key={s.name}
            className="group bg-card border border-white/5 rounded-lg p-5 hover:border-teal/30 hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-fg font-semibold">{s.name}</h3>
              <span className="mono text-xs text-teal opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
            </div>
            <p className="text-fg-muted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Projects = () => (
  <Section id="projects" num="03" title="Featured Projects" subtitle>
    <div className="space-y-10">
      {PROJECTS.map((p, idx) => (
        <div
          key={p.name}
          data-testid={`project-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className={`grid md:grid-cols-12 gap-6 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
        >
          <div className="md:col-span-5">
            <div className="relative bg-card border border-white/5 rounded-lg p-8 h-52 flex items-center justify-center overflow-hidden group hover:border-teal/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="mono text-6xl md:text-7xl font-bold text-teal/20 group-hover:text-teal/40 transition-colors">
                0{idx + 1}
              </span>
              <div className="absolute bottom-3 left-4 mono text-xs text-fg-muted">
                {p.tags[0]} · {p.tags[1]}
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-4">
            <p className="mono text-teal text-sm">Project · 0{idx + 1}</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-fg">{p.name}</h3>
            <div className="bg-card border border-white/5 rounded-lg p-6 text-fg-muted leading-relaxed">
              {p.desc}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mono text-xs text-fg-muted">
              {p.tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-github-${idx}`}
                className="text-fg-muted hover:text-teal transition-colors inline-flex items-center gap-1.5 text-sm"
              >
                <Github size={16} /> GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" num="04" title="Experience & Internships" subtitle>
    <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-10">
      {INTERNSHIPS.map((exp, i) => (
        <div key={exp.role} data-testid={`exp-${i}`} className="relative">
          <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-teal ring-4 ring-[#0a0e14]" />
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <h3 className="text-lg font-semibold text-fg">{exp.role}</h3>
            <span className="text-teal mono text-sm">@ {exp.org}</span>
          </div>
          <p className="mono text-xs text-fg-muted mb-4">{exp.period}</p>
          <ul className="space-y-2">
            {exp.bullets.map((b, j) => (
              <li key={j} className="text-fg-muted text-sm leading-relaxed flex gap-3">
                <span className="text-teal mono flex-shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const Certs = () => (
  <Section id="certs" num="05" title="Certifications" subtitle>
    <div className="grid md:grid-cols-2 gap-4">
      {CERTS.map((c, i) => (
        <div
          key={c.name}
          data-testid={`cert-${i}`}
          className="bg-card border border-white/5 rounded-lg p-5 flex items-start justify-between gap-4 hover:border-teal/30 transition-colors group"
        >
          <div>
            <h3 className="text-fg font-medium">{c.name}</h3>
            <p className="mono text-xs text-fg-muted mt-1">{c.org}</p>
          </div>
          <span className="mono text-teal text-sm shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
            0{i + 1}
          </span>
        </div>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" num="06" title="Get In Touch" subtitle>
    <div className="max-w-2xl mx-auto text-center py-8">
      <p className="mono text-teal text-sm mb-4">// what&apos;s next</p>
      <h3 className="text-4xl md:text-5xl font-bold text-fg mb-6 tracking-tight">Let&apos;s build something.</h3>
      <p className="text-fg-muted leading-relaxed mb-10">
        I&apos;m open to internships, collaborations, and roles focused on AI, MLOps, and DevOps engineering. If you have an idea, a role, or just want to chat about infrastructure — my inbox is open.
      </p>
      <a
        href="mailto:abrarmohd8078@gmail.com"
        data-testid="contact-email-btn"
        className="mono text-sm px-8 py-4 border border-teal text-teal rounded hover:bg-teal/10 transition-all inline-flex items-center gap-2"
      >
        <Mail size={16} /> abrarmohd8078@gmail.com
      </a>
      <div className="flex items-center justify-center gap-8 mt-14">
        <a
          href="https://github.com/abrarmohd8078"
          target="_blank"
          rel="noreferrer"
          data-testid="social-github"
          className="text-fg-muted hover:text-teal hover:-translate-y-1 transition-all"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/abrar8078"
          target="_blank"
          rel="noreferrer"
          data-testid="social-linkedin"
          className="text-fg-muted hover:text-teal hover:-translate-y-1 transition-all"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:abrarmohd8078@gmail.com"
          data-testid="social-email"
          className="text-fg-muted hover:text-teal hover:-translate-y-1 transition-all"
        >
          <Mail size={22} />
        </a>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
      <p className="mono text-xs text-fg-muted">Designed & built by Mohammed Abrar · © 2026</p>
      <p className="mono text-xs text-fg-muted">Crafted with React & Tailwind</p>
    </div>
  </footer>
);

const SideRails = () => (
  <>
    <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center gap-6 z-40">
      <a href="https://github.com/abrarmohd8078" target="_blank" rel="noreferrer" className="text-fg-muted hover:text-teal hover:-translate-y-1 transition-all"><Github size={18} /></a>
      <a href="https://linkedin.com/in/abrar8078" target="_blank" rel="noreferrer" className="text-fg-muted hover:text-teal hover:-translate-y-1 transition-all"><Linkedin size={18} /></a>
      <a href="mailto:abrarmohd8078@gmail.com" className="text-fg-muted hover:text-teal hover:-translate-y-1 transition-all"><Mail size={18} /></a>
      <span className="w-px h-24 bg-white/15" />
    </div>
    <div className="hidden lg:flex fixed right-6 bottom-0 flex-col items-center gap-4 z-40">
      <a href="mailto:abrarmohd8078@gmail.com" className="mono text-xs text-fg-muted hover:text-teal transition-colors" style={{ writingMode: "vertical-rl" }}>
        abrarmohd8078@gmail.com
      </a>
      <span className="w-px h-24 bg-white/15" />
    </div>
  </>
);

function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e14] text-fg antialiased">
      <Nav active={active} />
      <SideRails />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
