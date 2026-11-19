import { PageHeader } from "@/components/PageHeader";
import { certificateData } from "@/lib/data";
import { CertificateCard } from "@/components/CertificateCard";

export default function CertificatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <PageHeader label="Credentials" title="Certificates" description="Professional certifications and academic achievements." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateData.map((cert, i) => (
          <CertificateCard key={i} item={cert} />
        ))}
      </div>
    </main>
  );
}
