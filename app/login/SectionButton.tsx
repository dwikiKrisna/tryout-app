"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

export const SectionButton = () => {
  return (
    // make button for google social login
    <button
      className=" bg-white text-black font-bold py-2 px-4 rounded"
      onClick={() => signIn("google")}
    >
      Google
    </button>

    // <Button variant="ghost" size="lg" className='p-0 text-lg' onClick={()=>signIn('google')}><Image src={"/btn_google.png"} alt="google login" width={200} height={100}/></Button>
  );
};
