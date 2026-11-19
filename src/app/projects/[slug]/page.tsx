import { getProjectBySlug } from "@/lib/data";
import { DynamicIcon } from "@/components/DynamicIcon";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <article className="max-w-4xl mx-auto">
        <header className="mb-10 border-b border-border pb-10">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/#current-projects" 
              className="p-2 rounded-full bg-accent text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            {project.status && (
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-accent text-primary border border-border">
                {project.status}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 mb-6">
             {project.customIcon ? (
              <img src={project.customIcon} alt={`${project.title} icon`} className="w-12 h-12 rounded-xl shadow-md border border-black/5 dark:border-white/10 shrink-0 object-cover" />
            ) : (
              <DynamicIcon name={project.icon || 'zap'} className={`w-12 h-12 ${project.color || 'text-yellow-500'}`} />
            )}
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">{project.title}</h1>
          </div>
          

          <div className="flex flex-wrap gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              View Live Project <ExternalLink className="w-4 h-4" />
            </a>
            <a href={project.repo || "https://github.com/parsaabbasian"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-foreground font-bold rounded-xl hover:bg-accent transition-all">
              Source Code <Github className="w-4 h-4" />
            </a>
            {project.devpost && (
              <a href={project.devpost} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-foreground font-bold rounded-xl hover:bg-accent transition-all">
                Devpost <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-flat p-6 md:col-span-2">
            <p className="section-label mb-3">Overview</p>
            <p className="text-muted leading-relaxed">{project.desc}</p>
          </div>
          <div className="card-flat p-6">
            <p className="section-label mb-3">Built with</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-accent border border-border rounded-md text-sm text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
