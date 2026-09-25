import Link from "next/link";

import { projects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section className="container py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Projects</p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900">Recent project highlights</h2>
        </div>
        <Link href="/projects" className="text-sm font-semibold text-emerald-600">See all projects →</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-slate-900" />
            <div className="mt-5">
              <p className="text-sm text-emerald-600">{project.location}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
