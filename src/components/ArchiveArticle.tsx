import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, FileText } from "lucide-react";
import { type ArchivePage, lessonContext } from "@/lib/archive";

interface Props {
  route: string;
  page?: ArchivePage;
  back: { href: string; label: string };
  fallbackTitle: string;
}

export function ArchiveArticle({ route, page, back, fallbackTitle }: Props) {
  const lesson = page ? lessonContext(route) : null;
  const backLink = lesson ? { href: `/${lesson.course.route}`, label: lesson.course.title } : back;

  return (
    <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10 pb-10 border-b border-border">
          <Link
            href={backLink.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {backLink.label}
          </Link>

          {(page?.tags.length || lesson) && (
            <div className="flex flex-wrap gap-2 mb-5">
              {lesson && (
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent border border-border text-muted">
                  Lesson {lesson.index + 1} of {lesson.total}
                </span>
              )}
              {page?.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent border border-border text-primary">
                  {t}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-5">
            {page?.title ?? fallbackTitle}
          </h1>
          {page?.description && <p className="text-lg text-muted leading-relaxed">{page.description}</p>}

          {page && page.meta.length > 0 && (
            <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-muted">
              {page.meta.map((m, i) => (
                <span key={m} className="inline-flex items-center gap-2">
                  {i === 0 ? <Calendar className="w-4 h-4" /> : <Clock className="w-4 h-4" />} {m}
                </span>
              ))}
            </div>
          )}
        </header>

        {page ? (
          page.html && <div className="article-body" dangerouslySetInnerHTML={{ __html: page.html }} />
        ) : (
          <div className="card-flat p-10 text-center">
            <FileText className="w-10 h-10 text-primary mx-auto mb-4 opacity-60" />
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Coming soon</h2>
            <p className="text-muted max-w-md mx-auto">This page is still being written. Check back soon.</p>
          </div>
        )}

        {page?.children && (
          <section className={page.html ? "mt-14" : ""}>
            <p className="section-label mb-4">
              {page.children.length > 0 ? `${page.children.length} lessons` : "Lessons"}
            </p>
            {page.children.length > 0 ? (
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.children.map((c, i) => (
                  <li key={c.route}>
                    <Link href={`/${c.route}`} className="card card-interactive h-full p-4 flex gap-4 group">
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-accent border border-border flex items-center justify-center text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {c.title}
                        </span>
                        {c.description && <span className="block text-xs text-muted mt-1 line-clamp-2">{c.description}</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="card-flat p-8 text-center text-muted">Lessons for this course are still being written.</div>
            )}
          </section>
        )}

        {lesson && (
          <nav aria-label="Lesson navigation" className="mt-16 pt-8 border-t border-border grid grid-cols-2 gap-4">
            {lesson.prev ? (
              <Link href={`/${lesson.prev.route}`} className="card card-interactive p-4 group">
                <span className="flex items-center gap-1.5 text-xs text-muted mb-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous
                </span>
                <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                  {lesson.prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {lesson.next && (
              <Link href={`/${lesson.next.route}`} className="card card-interactive p-4 text-right group">
                <span className="flex items-center justify-end gap-1.5 text-xs text-muted mb-1">
                  Next <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                  {lesson.next.title}
                </span>
              </Link>
            )}
          </nav>
        )}
      </article>
    </main>
  );
}
