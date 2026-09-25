import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { getProjectBySlug } from "@/lib/projects";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container py-16">
      <div className="mb-8">
        <Link href="/projects" className="text-sm font-medium text-emerald-600">
          ← Back to projects
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="h-72 bg-gradient-to-br from-emerald-500 via-emerald-600 to-slate-900" />
        <div className="p-8 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{project.location}</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900">{project.name}</h1>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              {project.category}
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg text-slate-600">{project.summary}</p>
              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Highlights</h2>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    {project.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Impact</h2>
                  <p className="mt-3 text-slate-600">{project.impact}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">Project metrics</h3>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-sm text-slate-500">System size</dt>
                  <dd className="mt-1 text-xl font-semibold text-slate-900">{project.capacity}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Annual savings</dt>
                  <dd className="mt-1 text-xl font-semibold text-slate-900">{project.savings}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Button href="/quote">Book a feasibility review</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
