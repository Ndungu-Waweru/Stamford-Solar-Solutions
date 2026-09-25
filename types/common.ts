export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  image: string;
  features: string[];
};

export type Project = {
  id: string;
  name: string;
  slug: string;
  category: string;
  location: string;
  summary: string;
  impact: string;
  capacity: string;
  savings: string;
  highlights: string[];
};

export type Solution = {
  id: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
};
