"use client";
import { SignInButton } from "@clerk/nextjs";
const SignInBtn = (props: any) => {
  return (
    <div className="text-red-800 ">
      <SignInButton />
    </div>
  );
};

export default SignInBtn;
