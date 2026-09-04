/**
 * Writes the Simple Icons we use into public/icons/skills/.
 *
 * Run once with `node scripts/build-skill-icons.mjs`. simple-icons is a
 * devDependency and is never imported by app code — these become plain
 * static files, so the icons cost zero client JavaScript.
 */
import { mkdir, writeFile } from "node:fs/promises";
import * as si from "simple-icons";

const SLUGS = {
  react: "React.js",
  nextdotjs: "Next.js",
  javascript: "JavaScript",
  kotlin: "Kotlin",
  springboot: "Spring Boot",
  go: "Golang",
  openjdk: "Java",
  python: "Python",
  cplusplus: "C / C++",
  nodedotjs: "Node.js",
  express: "Express.js",
  fastapi: "FastAPI",
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  redis: "Redis",
  googlebigquery: "BigQuery",
  apachekafka: "Apache Kafka",
  docker: "Docker",
  git: "Git",
  github: "GitHub",
};

const OUT = "public/icons/skills";
await mkdir(OUT, { recursive: true });

for (const slug of Object.keys(SLUGS)) {
  const key = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) {
    console.warn(`missing: ${slug}`);
    continue;
  }
  // No fill: these are used as CSS masks, where only the alpha matters.
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${icon.path}"/></svg>`;
  await writeFile(`${OUT}/${slug}.svg`, svg + "\n");
}

console.log(`wrote ${Object.keys(SLUGS).length} icons to ${OUT}`);
