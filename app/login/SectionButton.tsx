"use client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const SectionButton = () => {
  return (
    <button className="p-0 text-lg" onClick={() => signIn("google")}>
      Login
    </button>
  );
};
export default SectionButton;
