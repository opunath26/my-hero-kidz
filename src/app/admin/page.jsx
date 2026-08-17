import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export const metadata = {
  title: "Admin Dashboard | HeroKidz",
  description: "Overview and analytics for HeroKidz Admin Panel.",
};

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login?callbackUrl=/admin");
  }

  const userEmail = session.user.email?.trim().toLowerCase();
  const isAdmin = ADMIN_EMAILS.some(
    (email) => email.trim().toLowerCase() === userEmail
  );

  if (!isAdmin) {
    redirect("/");
  }

  return <AdminDashboardClient />;
}