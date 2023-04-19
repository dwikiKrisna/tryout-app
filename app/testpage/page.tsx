"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const TestPage = () => {
  const { data: session } = useSession();
  console.log(session);
  // jika tidak ada session maka akan di redirect ke halaman login
  if (!session) {
    redirect("/login");
  }

  return <div>TestPage</div>;
};

export default TestPage;
