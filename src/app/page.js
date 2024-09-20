import About from "@/components/about/About";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="h-full pt-20 ">
      <Hero />;
      <ProjectsSection/>
      <About/>
    </div>
  );
}
