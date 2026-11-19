import { PageHeader } from "@/components/PageHeader";
import { thoughtData } from "@/lib/data";
import { ThoughtCard } from "@/components/ThoughtCard";

export default function ThoughtsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <PageHeader label="Thoughts" title="Thoughts on Life" description="Personal insights and lessons learned along the way." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thoughtData.map((thought, i) => (
          <ThoughtCard key={i} item={thought} />
        ))}
      </div>
    </main>
  );
}
