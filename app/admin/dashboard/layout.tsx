import "../../../components/admin/Admin.css";
import { AdminHeader } from "../../../components/admin/AdminHeader";
import { AdminSidebar } from "../../../components/admin/AdminSidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell">
      <AdminSidebar />

      <div className="admin-content">
        <AdminHeader />
        <div className="admin-page">{children}</div>
      </div>
    </div>
  );
}
