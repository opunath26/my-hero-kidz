import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";
import ManageProductsClient from "@/components/admin/ManageProductsClient";

export const metadata = {
  title: "Manage Products | HeroKidz Admin",
};

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

export default async function ManageProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect("/login?callbackUrl=/admin/products");

  const userEmail = session.user.email?.trim().toLowerCase();
  const isAdmin = ADMIN_EMAILS.some((email) => email.trim().toLowerCase() === userEmail);

  if (!isAdmin) redirect("/");

  return <ManageProductsClient />;
}