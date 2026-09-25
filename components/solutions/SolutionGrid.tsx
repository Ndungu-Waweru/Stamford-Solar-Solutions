import { solutions } from "@/data/solutions";

import { SolutionCard } from "./SolutionCard";

export function SolutionGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {solutions.map((solution) => (
        <SolutionCard key={solution.id} solution={solution} />
      ))}
    </div>
  );
}
