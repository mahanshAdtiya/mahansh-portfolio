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
    title: "Spring Boot · Golang · Next.js · Node.js",
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
    "Freelance builds — web apps, storefronts, internal tools — taken from architecture to interface, by one person who does everything.",
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
      value: "Spring Boot, Golang, PostgreSQL, Kafka, Redis, Next.js, Node.js",
    },
    {
      label: "Also happy doing",
      value:
        "Full-stack product work end to end — architecture, API, and the interface on top",
    },
  ],
  metrics: [
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
    place: "Bengaluru",
    tech: ["Spring Boot","PostgreSQL","Kafka","AWS Lambda","BigQuery"],
    changed: [
      "Reduced booking dashboard data lag from ~60 minutes to at most 5 minutes by identifying and switching to a fresher source dataset, avoiding a more complex split-query architecture.",
      "Migrated the Spring Boot platform from 2.5.11 to 3.5.4 and replaced H2-based tests with PostgreSQL containers for production-like integration testing.",
      "Reworked redemption instructions from manually maintained Markdown into structured data, migrating existing listings while coordinating the migration strategy across design, product, and customer operations.",
      "Replaced five independent synchronous, long-running workflows with a unified asynchronous job system backed by Kafka and a shared job model, covering exports, LLM listing generation, vendor catalog processing, combined-entity generation, and listing classification.",
      "Integrated Experience Bank into the LLM-powered listing generation pipeline by translating its APIs into LLM tools and recipes, validating generated listing data against the expected workflow.",
      "Introduced structured retries, logging, and Grafana metrics across Slack alerts and BigQuery events, making failures traceable down to individual operations and error causes.",
      "Re-architected the BigQuery events service around Kafka, allowing it to acknowledge incoming events immediately, retry failed processing, and batch writes into BigQuery instead of synchronously writing every event."
    ],
    daily: [
      "End-to-end backend feature development using Kotlin and Spring Boot, with PostgreSQL, Kafka, and BigQuery.",
      "Designing and implementing asynchronous workflows, integrations, data migrations, and event-driven systems.",
      "Investigating production issues through logs and metrics, optimizing services, and working with product, design, and operations teams on technical solutions."
    ]
  },
  {
    company: "Lila Games",
    title: "Full-Stack Developer",
    years: "2025",
    dates: "Mar 2025 — Aug 2025",
    place: "Bengaluru",
    tech: ["Golang","React","Express","FastAPI","Redis","Nakama"],
    changed: [
      "Built a visual branching editor that replaced manually edited JSON configurations for interactive gameplay videos, reducing the time to configure a chapter from ~1 day to under 2 hours.",
      "Built and shipped the Valor Points system from scratch, allowing players to complete missions, earn Valor Points, unlock rewards, and claim rewards in bulk, with season-based resets.",
      "Built automated end-to-end integration tests and unit tests across 10+ game features, running on every PR and across staging, testing, and production branches to catch configuration and system-level issues before they reached players.",
      "Built a non-blocking event ingestion pipeline for CleverTap using Go channels and worker goroutines, buffering and batching events for bulk ingestion with retry handling while keeping event tracking from adding latency to the main application flow.",
      "Fixed OAuth session expiry for Google and Apple login by moving token refresh handling to the server, allowing expired access tokens to be refreshed using refresh tokens without logging users out.",
    ],

    daily: [
      "Developing gameplay and backend features across Golang, Nakama, and supporting services.",
      "Writing automated tests, investigating failures, and debugging issues across game logic and configuration-driven systems.",
      "Working with product and game teams on feature requirements, gameplay configuration, and internal tooling."
    ]
  },
  {
    company: "Plunes Healthcare",
    title: "Full-Stack Developer",
    years: "2024",
    dates: "Jun 2024 — Sep 2024",
    place: "Gurugram",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    changed: [
      "Built an insurance CRM from scratch, supporting the workflow from customer insurance requests through operations processing, insurance-provider review, and financial settlement.",
      "Built and shipped a client-facing website from scratch using React and Tailwind CSS.",
      "Improved slow APIs by reducing unnecessary MongoDB document retrieval, moving filtering from application memory into database queries, and adding indexes for frequently queried fields.",
      "Introduced caching for data that changed infrequently, reducing repeated database work on frequently accessed APIs.",
    ],

    daily: [
      "Built features end-to-end across React, Node.js, Express, and MongoDB, from UI components to APIs and database changes.",
      "Worked across both internal tools and customer-facing products, integrating frontend interfaces with backend APIs.",
      "Debugged and optimized application performance by profiling API behavior, inspecting database queries, and addressing bottlenecks."
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
    caption: string;
    initialOn: boolean;
    button: { off: string; on: string };
    state: {
      off: DemoState;
      on: DemoState;
    };
  };
};

export type DemoState = {
  label?: string;
  primary: string;
  note: string;
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
  icon: string;
  skills: Skill[];
};

export type Skill = {
  label: string;
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
    href: "https://github.com/mahanshAdtiya/Msh-Custom-Shell",
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
