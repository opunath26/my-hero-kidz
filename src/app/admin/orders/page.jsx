import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";
import AdminOrdersClient from "@/components/admin/AdminOrdersClient";

export const metadata = {
  title: "Admin Orders | HeroKidz",
  description: "Manage and update customer orders on HeroKidz.",
};

const ADMIN_EMAILS = [
  "admin@gmail.com",
  "artistop26@gmail.com",
];

export default async function AdminOrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login?callbackUrl=/admin/orders");
  }

  const isAdmin = ADMIN_EMAILS.includes(session.user.email);

  if (!isAdmin) {
    redirect("/");
  }

  return <AdminOrdersClient />;
}