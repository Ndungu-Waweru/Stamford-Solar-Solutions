"use client";

import { Bell, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div>
        <p className="admin-header-label">
          Stamford Solar Solutions
        </p>

        <h2>Administration</h2>
      </div>

      <div className="admin-header-actions">
        <Link
          href="/"
          target="_blank"
          className="admin-view-site"
        >
          <ExternalLink size={16} />
          View Website
        </Link>

        <button
          type="button"
          className="admin-notification"
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span />
        </button>

        <div className="admin-user">
          <div className="admin-user-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </header>
  );
}
