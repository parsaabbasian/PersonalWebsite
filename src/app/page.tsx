import Image from "next/image";
import {
  experienceData,
  educationData,
  volunteeringData,
  highlightsData,
  publicationsData,
  scholarUrl,
  skillsData,
  currentProjectData,
} from "@/lib/data";
import { socialLinks } from "@/lib/site";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillSection } from "@/components/SkillSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DynamicIcon } from "@/components/DynamicIcon";
import {
  Cpu,
  Briefcase,
  Layers,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Award,
  HandHeart,
  MapPin,
  BookOpenText,
  ExternalLink,
  FileText,
} from "lucide-react";

const socialIcons = { Mail, Linkedin, Github, GraduationCap };

export default function Home() {
  const current = experienceData.filter((e) => e.date.includes("Present"));

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <p className="hero-rise section-label mb-4 inline-flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Toronto · Lassonde, York University
            </p>

            <h1 className="hero-rise hero-rise-delay-1 font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6">
              Parsa Abbasian
            </h1>

            <p className="hero-rise hero-rise-delay-2 text-lg sm:text-xl text-muted max-w-xl leading-relaxed mb-4">
              Second-year Computer Engineering student at Lassonde, building{" "}
              <span className="text-foreground font-semibold">full-stack products</span> and{" "}
              <span className="text-foreground font-semibold">AI systems</span>, and researching how{" "}
              <span className="text-foreground font-semibold">AI coding agents</span> perform.
            </p>

            <p className="hero-rise hero-rise-delay-2 text-sm sm:text-base text-muted max-w-xl leading-relaxed mb-8">
              AI Product Engineer @ <span className="text-foreground font-medium">Diamond AI</span>
              <span className="mx-2 text-border">·</span>
              Webmaster @ <span className="text-foreground font-medium">IEEE YorkU</span>
              <span className="mx-2 text-border">·</span>
              Ops Lead @ <span className="text-foreground font-medium">GDG on Campus</span>
              <span className="mx-2 text-border">·</span>
              Researcher @ <span className="text-foreground font-medium">EXINES Lab</span>
            </p>

            <div className="hero-rise hero-rise-delay-3 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1 ml-1">
                {socialLinks.map((l) => {
                  const Icon = socialIcons[l.icon];
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={l.icon === "Mail" ? "Email" : l.label}
                      className="p-2.5 rounded-lg text-muted hover:text-primary hover:bg-accent transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hero-portrait flex flex-col items-center lg:items-end gap-8">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-surface shadow-[0_8px_28px_rgba(0,0,0,0.2)]">
              <Image
                src="/assets/images/parsa-portrait.png"
                alt="Parsa Abbasian"
                fill
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 256px"
                className="object-cover object-center"
              />
            </div>

            <div className="card-flat w-full max-w-sm p-5">
              <p className="section-label mb-3 flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                </span>
                Currently
              </p>
              <ul className="space-y-3">
                {current.map((role) => (
                  <li key={role.title + role.subtitle} className="flex items-start gap-3">
                    <DynamicIcon name={role.icon} className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-tight">{role.title}</p>
                      <p className="text-xs text-muted">{role.subtitle.split(" — ")[0]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20 md:pb-28 space-y-24 md:space-y-28">
        <ScrollReveal>
          <section id="experience">
            <SectionHeading icon={Briefcase} title="Experience" index="01" />
            <div>
              {experienceData.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="projects">
            <SectionHeading
              icon={Layers}
              title="Featured Projects"
              index="02"
              action={
                <a href="/current-projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors">
                  All projects <ArrowRight className="w-4 h-4" />
                </a>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentProjectData.slice(0, 4).map((project, i) => (
                <ProjectCard key={i} item={project} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="research">
            <SectionHeading
              icon={BookOpenText}
              title="Research & Publications"
              index="03"
              action={
                <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors">
                  Google Scholar <ArrowRight className="w-4 h-4" />
                </a>
              }
            />
            <ol className="space-y-4">
              {publicationsData.map((pub) => (
                <li key={pub.link} className="card p-5 md:p-6">
                  <p className="text-[10px] text-muted font-mono uppercase tracking-widest mb-2">
                    {pub.year} · Preprint
                  </p>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-2">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted mb-1">
                    {pub.authors.map((a, i) => (
                      <span key={a}>
                        {i > 0 && ", "}
                        {a === "Parsa Abbasian" ? <strong className="text-foreground font-semibold">{a}</strong> : a}
                      </span>
                    ))}
                    {pub.moreAuthors && ", et al."}
                  </p>
                  <p className="text-sm italic text-primary mb-3">{pub.venue}</p>
                  {pub.summary && <p className="text-sm text-muted leading-relaxed mb-4">{pub.summary}</p>}
                  <div className="flex flex-wrap gap-2">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-border text-foreground hover:bg-accent transition-colors">
                      arXiv <ExternalLink className="w-3 h-3" />
                    </a>
                    {pub.pdf && (
                      <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-border text-foreground hover:bg-accent transition-colors">
                        PDF <FileText className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="highlights">
            <SectionHeading icon={Award} title="Awards & Highlights" index="04" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlightsData.map((h, i) => (
                <div key={i} className="card p-5 flex gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-border ${h.bg || "bg-accent"} ${h.color || "text-primary"}`}>
                    <DynamicIcon name={h.icon} className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted font-mono uppercase tracking-widest mb-1">{h.date}</p>
                    <h3 className="font-display text-base font-bold text-foreground leading-snug">{h.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-2">{h.subtitle}</p>
                    <p className="text-sm text-muted leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="background" className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
            <div id="education">
              <SectionHeading icon={GraduationCap} title="Education" index="05" />
              {educationData.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </div>
            <div id="volunteering">
              <SectionHeading icon={HandHeart} title="Volunteering" index="06" />
              {volunteeringData.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="skills">
            <SectionHeading icon={Cpu} title="Skills" index="07" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((category, i) => (
                <SkillSection key={i} item={category} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="contact" className="card-flat p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              <div>
                <p className="section-label mb-3">Contact</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Let&apos;s build something
                </h2>
                <p className="text-muted mb-8 leading-relaxed max-w-sm">
                  Open to internships, research and collaborations. Have a question, a project idea, or just want to say hi? I&apos;d love to hear from you.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((l) => {
                    const Icon = socialIcons[l.icon];
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group w-fit"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {l.label}
                        </span>
                      </a>
                    );
                  })}
                </div>

              </div>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-3">
                <input type="hidden" name="access_key" value="8a8c7bdb-5ee1-4733-b958-e31a433577b9" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="sr-only" htmlFor="c-name">Name</label>
                  <input id="c-name" type="text" name="name" placeholder="Name" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                  <label className="sr-only" htmlFor="c-email">Email</label>
                  <input id="c-email" type="email" name="email" placeholder="Email" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <label className="sr-only" htmlFor="c-msg">Message</label>
                <textarea id="c-msg" name="message" rows={6} placeholder="Your message..." required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
