import type { Role } from "@/lib/content";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-[clamp(26px,4vh,38px)] border-b border-edge pb-3 font-mono text-eyebrow-sm tracking-[.16em] uppercase text-muted">
      {children}
    </h4>
  );
}

function Rows({ items, tone }: { items: string[]; tone: string }) {
  return (
    <ul className="grid">
      {items.map((text) => (
        <li
          key={text}
          className={`border-b border-hairline py-4 text-[15px] leading-[1.7] ${tone}`}
        >
          {text}
        </li>
      ))}
    </ul>
  );
}

export function RolePanel({ role }: { role: Role }) {
  return (
    <>
      <h3>{role.title}</h3>

      <p className="mt-3 flex flex-wrap gap-3 font-mono text-eyebrow tracking-[.12em] uppercase text-muted">
        <span className="text-accent">{role.company}</span>
        <span className="text-edge-strong">/</span>
        <span>{role.dates}</span>
        <span className="text-edge-strong">/</span>
        <span>{role.place}</span>
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {role.tech.map((label) => (
          <li
            key={label}
            className="border border-edge-strong px-2.5 py-1.5 font-mono text-eyebrow-sm tracking-[.08em] uppercase text-muted"
          >
            {label}
          </li>
        ))}
      </ul>

      <Eyebrow>What changed</Eyebrow>
      <Rows items={role.changed} tone="text-faint" />

      <Eyebrow>Day to day</Eyebrow>
      <Rows items={role.daily} tone="text-body" />
    </>
  );
}
