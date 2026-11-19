import archive from "@/content/archive.json";

export interface ArchiveLesson {
  route: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ArchivePage {
  title: string;
  description: string;
  tags: string[];
  meta: string[];
  html: string;
  children?: ArchiveLesson[];
}

// Posts ported from the pre-Next.js static site (archive-pages/), keyed by route
// without a leading slash, e.g. "learning/golang/days/day01".
const pages = archive as Record<string, ArchivePage>;

export function getArchivePage(route: string): ArchivePage | undefined {
  return pages[route];
}

export function archiveSlugs(section: "blogs" | "thoughts" | "learning"): { slug: string[] }[] {
  return Object.keys(pages)
    .filter((r) => r.startsWith(section + "/"))
    .map((r) => ({ slug: r.split("/").slice(1) }));
}

/** For a lesson page, the course it belongs to plus its previous/next lessons. */
export function lessonContext(route: string) {
  const parts = route.split("/");
  if (parts[0] !== "learning" || parts.length !== 4) return null;
  const courseRoute = parts.slice(0, 2).join("/");
  const course = pages[courseRoute];
  const lessons = course?.children ?? [];
  const i = lessons.findIndex((l) => l.route === route);
  if (!course || i === -1) return null;
  return {
    course: { route: courseRoute, title: course.title },
    index: i,
    total: lessons.length,
    prev: lessons[i - 1],
    next: lessons[i + 1],
  };
}
