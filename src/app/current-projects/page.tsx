import { PageHeader } from "@/components/PageHeader";
import { currentProjectData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function CurrentProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <PageHeader label="Projects" title="Current Projects" description="What I'm currently building and maintaining." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjectData.map((project, i) => (
          <ProjectCard key={i} item={project} />
        ))}
      </div>
    </main>
  );
}
