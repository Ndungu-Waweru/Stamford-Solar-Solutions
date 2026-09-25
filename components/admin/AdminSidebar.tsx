"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Home,
  Package,
  Sun,
  FolderKanban,
  Building2,
  Phone,
  ShoppingCart,
  Users,
  CalendarDays,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

import "./Admin.css";

const websiteLinks = [
  {
    name: "Home Page",
    href: "/admin/dashboard/home",
    icon: Home,
  },
  {
    name: "Products",
    href: "/admin/dashboard/products",
    icon: Package,
  },
  {
    name: "Solutions",
    href: "/admin/dashboard/solutions",
    icon: Sun,
  },
  {
    name: "Projects",
    href: "/admin/dashboard/projects",
    icon: FolderKanban,
  },
  {
    name: "About Us",
    href: "/admin/dashboard/about",
    icon: Building2,
  },
  {
    name: "Contact",
    href: "/admin/dashboard/contact",
    icon: Phone,
  },
];

const businessLinks = [
  {
    name: "Orders",
    href: "/admin/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    href: "/admin/dashboard/customers",
    icon: Users,
  },
  {
    name: "Meetings",
    href: "/admin/dashboard/meetings",
    icon: CalendarDays,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="admin-sidebar">
      {/* BRAND */}
      <div className="admin-sidebar-brand">
        <div className="admin-sidebar-logo">
          <Sun size={23} />
        </div>

        <div>
          <h1>Stamford</h1>
          <span>Solar Solutions</span>
        </div>
      </div>

      {/* MAIN */}
      <nav className="admin-sidebar-nav">

        <Link
          href="/admin/dashboard"
          className={`admin-nav-link ${
            isActive("/admin/dashboard")
              ? "admin-nav-link-active"
              : ""
          }`}
        >
          <LayoutDashboard size={18} />

          <span>Dashboard</span>
        </Link>

        {/* WEBSITE */}
        <div className="admin-nav-section">
          <p>Website</p>

          {websiteLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-nav-link ${
                  isActive(item.href)
                    ? "admin-nav-link-active"
                    : ""
                }`}
              >
                <Icon size={17} />

                <span>{item.name}</span>

                {isActive(item.href) && (
                  <ChevronRight
                    size={14}
                    className="admin-nav-active-arrow"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* BUSINESS */}
        <div className="admin-nav-section">
          <p>Business</p>

          {businessLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-nav-link ${
                  isActive(item.href)
                    ? "admin-nav-link-active"
                    : ""
                }`}
              >
                <Icon size={17} />

                <span>{item.name}</span>

                {isActive(item.href) && (
                  <ChevronRight
                    size={14}
                    className="admin-nav-active-arrow"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* SYSTEM */}
        <div className="admin-nav-section">
          <p>System</p>

          <Link
            href="/admin/dashboard/settings"
            className={`admin-nav-link ${
              isActive("/admin/dashboard/settings")
                ? "admin-nav-link-active"
                : ""
            }`}
          >
            <Settings size={17} />

            <span>Settings</span>
          </Link>
        </div>
      </nav>

      {/* LOGOUT */}
      <div className="admin-sidebar-bottom">
        <button
          type="button"
          className="admin-logout"
          onClick={() => {
            window.location.href = "/admin/login";
          }}
        >
          <LogOut size={17} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
