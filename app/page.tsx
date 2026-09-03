import { SiteHeader } from "./_components/site-header";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Experience } from "./_components/experience";
import { SelectedWork } from "./_components/selected-work";
import { Stack } from "./_components/stack";
import { Projects } from "./_components/projects";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <SelectedWork />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
