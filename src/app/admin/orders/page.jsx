import React from "react";
import AdminOrdersClient from "@/components/admin/AdminOrdersClient";

export const metadata = {
  title: "Admin Orders | HeroKidz",
  description: "Manage and update customer orders on HeroKidz.",
};

export default function AdminOrdersPage() {
  return <AdminOrdersClient />;
}