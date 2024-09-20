import projectsData from "@/mocked/mockedData.json";
import ProjectCard from "./ProjectCard";
export default function ProjectsSection() {
  const mockedData = projectsData.data;
  const hasData = mockedData?.length > 0;

  return (
    <section className="gap-y-14 flex flex-col pt-8 text-center pb-24">
      <h2 id="proyectos" className="text-[45px] font-bold">
        Proyectos
      </h2>
      <div className="flex flex-col gap-y-8 md:flex-row">
        {hasData &&
          mockedData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              deploy={project.deploy}
              repo={project.repo}
            />
          ))}
      </div>
    </section>
  );
}
