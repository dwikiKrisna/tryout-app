"use client";
import { useSession } from "next-auth/react";
import React from "react";

const TestPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return <div>TestPage</div>;
};

export default TestPage;
