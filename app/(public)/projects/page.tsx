import { ProjectGrid } from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="container py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Projects</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Recent installations and commercial wins</h1>
      </div>
      <ProjectGrid />
    </main>
  );
}
