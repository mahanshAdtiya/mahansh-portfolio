import { ROLES } from "@/lib/content";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { RolePanel } from "./role-panel";
import { RoleTabLabel } from "./role-tab-label";
import { RoleTabs } from "./role-tabs";

export function Experience() {
  return (
    <section id="experience">
      <Reveal className="mx-auto max-w-page px-gutter pb-[clamp(56px,10vh,120px)]">
        <SectionHeading
          num="02"
          title="Where the work happened"
          className="mb-[clamp(24px,5vh,56px)]"
        />

        <RoleTabs
          items={ROLES.map((role) => ({
            id: role.company.toLowerCase().replace(/\s+/g, "-"),
            label: <RoleTabLabel role={role} />,
            panel: <RolePanel role={role} />,
          }))}
        />
      </Reveal>
    </section>
  );
}
