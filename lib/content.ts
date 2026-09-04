export const SITE = {
  name: "Mahansh Aditya",
  role: "Software Engineer",
  location: "Bengaluru, IND",
  email: "singh.mahansh@gmail.com",
  phone: "+91 8076326534",
  phoneHref: "tel:+918076326534",
  linkedin: "https://www.linkedin.com/in/mahansh-aditya/",
  github: "https://github.com/mahanshAdtiya",
  resume: "/mahansh_resume.pdf",
  education: "IIIT Delhi, B.Tech CSE (Design) 2021–2025",
  copyright: "© 2026 Mahansh Aditya · Bengaluru",
} as const;

export type NavItem = {
  num: string;
  label: string;
  href: string;
};

export const NAV: NavItem[] = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Work", href: "#work" },
  { num: "04", label: "Stack", href: "#stack" },
  { num: "05", label: "Projects", href: "#projects" },
  { num: "06", label: "Contact", href: "#contact" },
];

/* ── Hero ─────────────────────────────────────────────────── */

export type HeroCard = {
  label: string;
  title: string;
  detail: string;
  href?: string;
  external?: boolean;
};

const heroCards: HeroCard[] = [
  {
    label: "Now",
    title: "Software Engineer at Headout",
    detail: "API optimization, service architecture, observability",
  },
  {
    label: "Stack",
    title: "Kotlin · Spring Boot · Golang · Next.js",
    detail: "PostgreSQL, Kafka, Redis, AWS",
  },
  {
    label: "Shipped",
    title: "Anarchist",
    href: "https://www.anarchist.co.in/",
    external: true,
    detail: "D2C storefront and CMS, built solo",
  },
];

export const HERO = {
  cards: heroCards,
  meta: ["Bengaluru, IND", "Headout · since Aug 2025"],
  metaAccent: "Available for freelance work",
  headline: "One engineer,",
  headlineEmphasis: "the whole stack.",
  intro:
    "Freelance builds — web apps, storefronts, internal tools — taken from architecture to interface, by one person who does both.",
  scrollLabel: "Scroll",
} as const;

/* ── About ────────────────────────────────────────────────── */

export const ABOUT = {
  lead: "Two years spent where the load is: queues, jobs, and the dashboards that depend on them.",
  body: "B.Tech CSE with a Specialisation in Design, IIIT Delhi. The design half shows up in the tools other teams use every day — admin panels, flow editors, CRMs.",
  facts: [
    {
      label: "Works on",
      value:
        "Async job orchestration, event ingestion pipelines, data freshness, notification delivery",
    },
    {
      label: "Reaches for",
      value: "Kotlin + Spring Boot, Golang, PostgreSQL, Kafka, Redis, Next.js",
    },
    {
      label: "Also happy doing",
      value:
        "Full-stack product work end to end — architecture, API, and the interface on top",
    },
  ],
  metrics: [
    {
      figure: "5 min",
      countTo: 5,
      suffix: " min",
      caption: "Cap on booking-dashboard data lag, replacing a BigQuery source",
    },
    {
      figure: "70%",
      countTo: 70,
      suffix: "%",
      caption: "API latency cut by relocating backend and database closer to users",
    },
    {
      figure: "1 day → hrs",
      countTo: null,
      suffix: "",
      caption:
        "Chapter setup time, after a visual branching-flow editor replaced JSON config",
    },
    {
      figure: "25%",
      countTo: 25,
      suffix: "%",
      caption: "Faster initial load from lazy-loading and deferred API calls",
    },
  ],
} as const;

/* ── Experience ───────────────────────────────────────────── */

export type Role = {
  company: string;
  title: string;
  years: string;
  dates: string;
  place: string;
  tech: string[];
  changed: string[];
  daily: string[];
};

export const ROLES: Role[] = [
  {
    company: "Headout",
    title: "Software Engineer",
    years: "2025—now",
    dates: "Aug 2025 — Present",
    place: "Sarjapur, Bengaluru",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL", "Kafka", "AWS Lambda", "BigQuery"],
    changed: [
      "Improved booking dashboard data freshness by replacing a BigQuery source with a dataset capped at 5-minute lag, reducing supplier booking visibility by 80%.",
      "Migrated booking dashboard exports from the application server to AWS Lambda, isolating resource-intensive BigQuery workloads from core APIs and improving service resource utilization.",
    ],
    daily: [
      "Designed a modular, state-driven async job orchestration layer using Spring Boot, Kotlin, PostgreSQL, and Kafka, decoupling workflows from feature-specific services, while leading the migration from Spring Boot 2.5 to 3.x.",
      "Re-architected Slack notifications into a fire-and-forget dispatcher with 3 retries, exponential jitter, and Grafana metrics, standardizing event types with Kotlin sealed classes and enabling failure tracking by event and error reason.",
    ],
  },
  {
    company: "Lila Games",
    title: "Full-Stack Developer",
    years: "2025",
    dates: "Mar 2025 — Aug 2025",
    place: "Indiranagar, Bengaluru",
    tech: ["Golang", "React", "Node.js", "Express", "Redis", "Nakama"],
    changed: [
      "Led the development of a visual branching-flow editor using React, Node.js, Express.js, and Redis, replacing manual JSON-based configuration, reducing setup time per chapter from 1 day to a few hours.",
      "Developed integration tests across game features using Golang and Nakama, uncovering and resolving multiple system-level bugs and improving overall system reliability.",
    ],
    daily: [
      "Built an asynchronous event ingestion pipeline with batching and retry mechanisms in Golang using goroutines and channels, decoupling event generation from downstream processing and batching events.",
      "Built an internal admin panel using Next.js for game configuration, enabling QA teams to configure test environments and provision in-game resources without developer intervention.",
    ],
  },
  {
    company: "Plunes Healthcare",
    title: "Full-Stack Developer",
    years: "2024",
    dates: "Jun 2024 — Sep 2024",
    place: "Gurugram, Haryana",
    tech: ["Node", "Express", "MongoDB", "Next.js"],
    changed: [
      "Optimized page load performance by lazy-loading non-critical data and deferring API calls until required, reducing initial loading time by 25%.",
      "Optimized APIs by reducing unnecessary MongoDB data retrieval and introducing caching for frequently accessed data.",
    ],
    daily: [
      "Built an internal insurance CRM panel using Node, Express, and MongoDB, from scratch.",
    ],
  },
];

/* ── Selected work ────────────────────────────────────────── */

export type SelectedWork = {
  slug: string;
  title: string;
  meta: string[];
  summary: string;
  tech: string[];
  demo: {
    kind: "latency" | "retrieval";
    /** Small mono line above the widget */
    caption: string;
    /** Which state the demo opens in */
    initialOn: boolean;
    /** Toggle label per state; identical for both if it does not change */
    button: { off: string; on: string };
    state: {
      off: DemoState;
      on: DemoState;
    };
  };
};

export type DemoState = {
  /** Accent line above the widget. Omitted when the widget speaks for itself. */
  label?: string;
  /** Footer, left */
  primary: string;
  /** Footer, right */
  note: string;
  /** Fine print under the rule */
  detail: string;
};

export const SELECTED_WORK: SelectedWork[] = [
  {
    slug: "anarchist",
    title: "Anarchist",
    meta: ["Aug 2026", "Deployed"],
    summary:
      "A full-stack D2C e-commerce platform with its own CMS panel, architecture and build owned solo — then tuned for multi-region deployment.",
    tech: ["Next.js", "Spring Boot", "Kotlin", "PostgreSQL"],
    demo: {
      kind: "latency",
      caption: "Region latency · try it",
      initialOn: false,
      button: { off: "Switch region ⇄", on: "Switch region ⇄" },
      state: {
        off: {
          label: "Before · US-East origin",
          primary: "baseline latency",
          note: "every call crosses an ocean",
          detail:
            "Backend and PostgreSQL relocated closer to Indian users, with the storefront served from the Vercel edge network.",
        },
        on: {
          label: "After · India-region origin + Vercel edge",
          primary: "70% lower latency",
          note: "backend + Postgres near users",
          detail:
            "Backend and PostgreSQL relocated closer to Indian users, with the storefront served from the Vercel edge network.",
        },
      },
    },
  },
  {
    slug: "mahansh-ai",
    title: "mahansh.AI",
    meta: ["Nov 2024", "Deployed", "GitHub"],
    summary:
      "An AI conversational platform with RAG-based long-term memory — OpenAI embeddings and semantic search over pgvector for context-aware replies.",
    tech: ["Kotlin", "pgvector", "OpenAI embeddings", "Next.js"],
    demo: {
      kind: "retrieval",
      caption: "Context sent to the LLM",
      initialOn: true,
      button: { off: "Token-aware retrieval", on: "Send full history" },
      state: {
        off: {
          primary: "Full conversation history",
          note: "48 / 48 chunks sent",
          detail:
            "Sending everything burns tokens on history the model does not need for this turn.",
        },
        on: {
          primary: "Token-aware retrieval",
          note: "14 / 48 chunks sent",
          detail:
            "Semantic search over pgvector picks only the chunks that matter, cutting tokens and API cost while keeping relevant context.",
        },
      },
    },
  },
];

/* ── Stack ────────────────────────────────────────────────── */

export type StackGroup = {
  key: string;
  label: string;
  blurb: string;
  /** Path under public/, served at this URL. Not an import — public/ is
      served as static files, not bundled as modules. */
  icon: string;
  skills: Skill[];
};

export type Skill = {
  label: string;
  /** Omitted where no logo exists — Foundations concepts, and AWS, whose
      marks Simple Icons no longer carries. Those render as text chips. */
  icon?: string;
};

export const STACK_CORE = {
  title: "Software Engineer",
  label: "Core",
} as const;

export const STACK_HINT =
  "Hover a group to read what it is used for. Tap on a touch screen.";

export const STACK_GROUPS: StackGroup[] = [
  {
    key: "foundations",
    label: "Foundations",
    blurb:
      "The parts that outlast any framework: data structures and algorithms, OOP, REST API design, and distributed-systems thinking.",
    icon: "/icons/foundations.svg",
    skills: [
      { label: "DSA" },
      { label: "OOP" },
      { label: "REST APIs" },
      { label: "Distributed sys." },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    blurb:
      "React and Next.js for the interface — storefronts, admin panels and internal tools that other teams use daily.",
    icon: "/icons/frontend.svg",
    skills: [
      { label: "React.js", icon: "/icons/skills/react.svg" },
      { label: "Next.js", icon: "/icons/skills/nextdotjs.svg" },
      { label: "JavaScript", icon: "/icons/skills/javascript.svg" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    blurb:
      "Kotlin with Spring Boot day to day, Golang for concurrent pipelines, Node and Express or FastAPI where they fit better.",
    icon: "/icons/backend.svg",
    skills: [
      { label: "Kotlin", icon: "/icons/skills/kotlin.svg" },
      { label: "Spring Boot", icon: "/icons/skills/springboot.svg" },
      { label: "Golang", icon: "/icons/skills/go.svg" },
      { label: "Java", icon: "/icons/skills/openjdk.svg" },
      { label: "Python", icon: "/icons/skills/python.svg" },
      { label: "C / C++", icon: "/icons/skills/cplusplus.svg" },
      { label: "Node.js", icon: "/icons/skills/nodedotjs.svg" },
      { label: "Express.js", icon: "/icons/skills/express.svg" },
      { label: "FastAPI", icon: "/icons/skills/fastapi.svg" },
    ],
  },
  {
    key: "database",
    label: "Database",
    blurb:
      "PostgreSQL as the default store, MongoDB where documents suit, Redis for caching, Kafka for events, BigQuery for analytical loads.",
    icon: "/icons/database.svg",
    skills: [
      { label: "PostgreSQL", icon: "/icons/skills/postgresql.svg" },
      { label: "MongoDB", icon: "/icons/skills/mongodb.svg" },
      { label: "Redis", icon: "/icons/skills/redis.svg" },
      { label: "BigQuery", icon: "/icons/skills/googlebigquery.svg" },
    ],
  },
  {
    key: "cloud",
    label: "Cloud & tools",
    blurb:
      "AWS for compute and Lambda workloads, Docker for parity between local and production, Git and GitHub for everything else.",
    icon: "/icons/cloud.svg",
    skills: [
      { label: "AWS" },
      { label: "Docker", icon: "/icons/skills/docker.svg" },
      { label: "Git", icon: "/icons/skills/git.svg" },
      { label: "GitHub", icon: "/icons/skills/github.svg" },
    ],
  },
];

/* ── Other projects ───────────────────────────────────────── */

export type Project = {
  title: string;
  description: string;
  tech: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    title: "BingeHub",
    description:
      "Tracks everything you've watched, want to watch, and rate — movies, shows, anime.",
    tech: "Next.js · MongoDB · Next-Auth",
    href: SITE.github,
  },
  {
    title: "msh-custom-shell",
    description: "A shell written in C, running the basic Linux commands.",
    tech: "C · Linux",
    href: SITE.github,
  },
  {
    title: "Tank-Star",
    description: "A PvP tank game built on OOP design principles.",
    tech: "Java · LibGDX",
    href: SITE.github,
  },
];

/* ── Contact ──────────────────────────────────────────────── */

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const CONTACT = {
  heading: "Have something that needs building?",
  links: [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { label: "Phone", value: SITE.phone, href: SITE.phoneHref },
    { label: "LinkedIn", value: "Connect →", href: SITE.linkedin, external: true },
    { label: "GitHub", value: "See the code →", href: SITE.github, external: true },
  ] satisfies ContactLink[],
  resumeLabel: "Résumé",
  resumeCta: "Download résumé",
} as const;

/* ── Footer ───────────────────────────────────────────────── */

export const FOOTER = {
  watermark: "Mahansh",
  copyright: SITE.copyright,
  education: SITE.education,
} as const;
