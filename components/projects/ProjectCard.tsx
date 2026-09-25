import Link from "next/link";

import type { Project } from "@/types/common";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-52 bg-gradient-to-br from-emerald-500 via-emerald-600 to-slate-900" />
      <div className="p-5">
        <p className="text-sm text-emerald-600">{project.location}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">{project.name}</h3>
        <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
      </div>
    </Link>
  );
}
