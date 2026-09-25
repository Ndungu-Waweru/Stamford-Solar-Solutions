import type { Solution } from "@/types/common";

export const solutions: Solution[] = [
  {
    id: "1",
    name: "Residential solar systems",
    slug: "residential-solar-systems",
    description: "Lower household energy bills with a tailored rooftop system designed around your usage and available space.",
    benefits: ["Reduced bills", "Battery backup", "Smart monitoring"],
  },
  {
    id: "2",
    name: "Commercial energy upgrades",
    slug: "commercial-energy-upgrades",
    description: "Support commercial operations with scalable solar and storage strategy that improves resilience and cost control.",
    benefits: ["Lower operational cost", "Reduced peak demand", "Carbon reduction"],
  },
  {
    id: "3",
    name: "Off-grid and remote power",
    slug: "off-grid-and-remote-power",
    description: "Reliable renewable power for remote sites, farms, telecom points, and temporary project installations.",
    benefits: ["Stand-alone systems", "Remote monitoring", "Fast deployment"],
  },
];
