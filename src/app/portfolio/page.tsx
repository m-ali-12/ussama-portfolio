import { SectionHeader } from "@/components/section-header";
import { ProjectGrid } from "@/components/project-grid";

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Portfolio"
        subtitle="A collection of work that shows my UI taste, structure, and real-world build quality."
      />
      <ProjectGrid />
    </div>
  );
}
