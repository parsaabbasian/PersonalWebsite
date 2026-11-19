interface Props {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: Props) {
  return (
    <header className="mb-12 md:mb-16 pb-10 border-b border-border">
      <p className="section-label mb-3">{label}</p>
      <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
        {title}
      </h1>
      {description && <p className="text-lg text-muted max-w-2xl leading-relaxed">{description}</p>}
    </header>
  );
}
