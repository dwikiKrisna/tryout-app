import React from "react";
import TryoutCard from "./TryoutCard";

const Tryout = () => {
  return (
    <div>
      <h4 className="text-xl font-bold dark:text-white mb-5">Daftar Tryout </h4>
      <div className="flex flex-wrap gap-5">
        <TryoutCard />
        <TryoutCard />
        <TryoutCard />
        <TryoutCard />
        <TryoutCard />
        <TryoutCard />
      </div>
    </div>
  );
};

export default Tryout;
