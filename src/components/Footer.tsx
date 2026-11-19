import Link from "next/link";
import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { siteLinks, socialLinks } from "@/lib/site";

const icons = { Mail, Linkedin, Github, GraduationCap };

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            Parsa<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted mt-3 leading-relaxed max-w-xs">
            Computer Engineering at Lassonde, York University. Building across full-stack, AI and research.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="section-label mb-3">Explore</p>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="section-label mb-3">Elsewhere</p>
          <ul className="space-y-2">
            {socialLinks.map((l) => {
              const Icon = icons[l.icon];
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" /> {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="max-w-5xl mx-auto px-6 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Parsa Abbasian · Toronto, Canada
        </p>
      </div>
    </footer>
  );
}
