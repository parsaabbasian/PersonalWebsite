import { PageHeader } from "@/components/PageHeader";
import { blogData } from "@/lib/data";
import { BlogCard } from "@/components/BlogCard";

export default function BlogsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <PageHeader label="Writing" title="My Writing" description="Thoughts on engineering, code, and university life." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, i) => (
          <BlogCard key={i} item={blog} />
        ))}
      </div>
    </main>
  );
}
