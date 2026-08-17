import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";
import AddProductClient from "@/components/admin/AddProductClient";

export const metadata = {
  title: "Add Product | HeroKidz Admin",
  description: "Add a new product to HeroKidz store.",
};

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login?callbackUrl=/admin/add-product");
  }

  const userEmail = session.user.email?.trim().toLowerCase();
  const isAdmin = ADMIN_EMAILS.some(
    (email) => email.trim().toLowerCase() === userEmail
  );

  if (!isAdmin) {
    redirect("/");
  }

  return <AddProductClient />;
}