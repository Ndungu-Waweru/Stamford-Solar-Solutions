import Link from "next/link";
import {
  Home,
  Package,
  Sun,
  FolderKanban,
  Building2,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

const websiteSections = [
  {
    title: "Home Page",
    description:
      "Manage the homepage hero, sections, CTAs and featured content.",
    href: "/admin/dashboard/home",
    icon: Home,
  },
  {
    title: "Products",
    description:
      "Add, edit and manage solar products and product categories.",
    href: "/admin/dashboard/products",
    icon: Package,
  },
  {
    title: "Solutions",
    description:
      "Manage residential, commercial, backup and installation solutions.",
    href: "/admin/dashboard/solutions",
    icon: Sun,
  },
  {
    title: "Projects",
    description:
      "Manage completed installations and project portfolio content.",
    href: "/admin/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "About Us",
    description:
      "Edit company information, mission, vision and values.",
    href: "/admin/dashboard/about",
    icon: Building2,
  },
  {
    title: "Contact",
    description:
      "Manage phone numbers, email, location and social links.",
    href: "/admin/dashboard/contact",
    icon: Phone,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="admin-layout">

      <AdminSidebar />

      <main className="admin-main">

        <AdminHeader />

        <div className="admin-content">

          {/* PAGE INTRO */}
          <section className="admin-welcome">
            <div>
              <p>Website Management</p>

              <h1>
                Welcome to your dashboard
              </h1>

              <span>
                Manage the content displayed across the
                Stamford Solar Solutions website.
              </span>
            </div>

            <Link
              href="/"
              target="_blank"
              className="admin-primary-button"
            >
              <ExternalLink size={16} />
              View Website
            </Link>
          </section>

          {/* WEBSITE */}
          <section className="admin-section">

            <div className="admin-section-heading">
              <div>
                <span>Content Management</span>

                <h2>Website Pages</h2>
              </div>
            </div>

            <div className="admin-page-grid">

              {websiteSections.map((section) => {
                const Icon = section.icon;

                return (
                  <Link
                    href={section.href}
                    key={section.href}
                    className="admin-page-card"
                  >
                    <div className="admin-page-card-top">

                      <div className="admin-page-icon">
                        <Icon size={21} />
                      </div>

                      <ArrowRight
                        size={17}
                        className="admin-page-arrow"
                      />

                    </div>

                    <h3>{section.title}</h3>

                    <p>
                      {section.description}
                    </p>

                    <span className="admin-edit-link">
                      Manage page
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                );
              })}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}
