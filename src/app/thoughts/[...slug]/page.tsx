import type { Metadata } from "next";
import { ArchiveArticle } from "@/components/ArchiveArticle";
import { archiveSlugs, getArchivePage } from "@/lib/archive";

type Params = { params: Promise<{ slug: string[] }> };

const titleFromSlug = (slug: string[]) =>
  slug[slug.length - 1].split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

export function generateStaticParams() {
  return archiveSlugs("thoughts");
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getArchivePage(["thoughts", ...slug].join("/"));
  return { title: page?.title ?? titleFromSlug(slug), description: page?.description || undefined };
}

export default async function ThoughtDetailPage({ params }: Params) {
  const { slug } = await params;
  const route = ["thoughts", ...slug].join("/");
  return (
    <ArchiveArticle
      route={route}
      page={getArchivePage(route)}
      back={{ href: "/thoughts", label: "All thoughts" }}
      fallbackTitle={titleFromSlug(slug)}
    />
  );
}
