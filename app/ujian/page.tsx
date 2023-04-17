"use client";
import { Button } from "flowbite-react";

import React from "react";
import CardSoal from "./CardSoal";

const Ujian = () => {
  return (
    <div className="flex gap-5 bg-slate-50">
      <aside className="w-3/12 p-5 h-screen sticky top-0 ">
        <h1 className="text-xl font-bold ">Try Out SKD #1</h1>
        <p className="text-md font-bold text-blue-600">
          waktu tersisa: 1 jam 30 menit 40 detik
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          <Button color="gray">1</Button>
          <Button color="gray">2</Button>
          <Button color="gray">3</Button>
          <Button color="gray">4</Button>
          <Button color="gray">5</Button>
          <Button color="gray">6</Button>
          <Button color="gray">7</Button>
          <Button color="gray">8</Button>
          <Button color="gray">9</Button>
          <Button color="gray">10</Button>
          <Button color="gray">11</Button>
          <Button color="gray">12</Button>
          <Button color="gray">13</Button>
          <Button color="gray">14</Button>
          <Button color="gray">15</Button>
          <Button color="gray">16</Button>
          <Button color="gray">17</Button>
          <Button color="gray">18</Button>
          <Button color="gray">19</Button>
          <Button color="gray">20</Button>
          <Button color="gray">21</Button>
          <Button color="gray">22</Button>
          <Button color="gray">23</Button>
          <Button color="gray">24</Button>
          <Button color="gray">25</Button>
          <Button color="gray">26</Button>
          <Button color="gray">27</Button>
          <Button color="gray">28</Button>
          <Button color="gray">29</Button>
          <Button color="gray">30</Button>
        </div>
        <Button className="mt-10">Kumpulkan</Button>
      </aside>

      <div className="flex-1  p-5 ">
        <CardSoal />
        <CardSoal />
        <CardSoal />
        <CardSoal />
        <CardSoal />
        <CardSoal />
        <CardSoal />
      </div>
    </div>
  );
};

export default Ujian;
