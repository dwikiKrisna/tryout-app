"use client";

import { useClerk } from "@clerk/nextjs";
import { Sidebar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiShoppingBag,
  HiAdjustments,
  HiLogout,
} from "react-icons/hi";

const dashboardMenu = [
  {
    name: "Home",
    path: "/dashboard",
    icon: HiChartPie,
  },
  {
    name: "Try Out",
    path: "/dashboard/tryout",
    icon: HiViewBoards,
  },
  {
    name: "Shop",
    path: "/dashboard/shop",
    icon: HiShoppingBag,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: HiAdjustments,
  },
];

const SideBar = () => {
  const { signOut } = useClerk();
  return (
    <>
      <div className="w-fit ">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <h1 className="text-lg font-bold text-center my-5 ">
              💡 Tryout App
            </h1>
            <Sidebar.ItemGroup>
              {dashboardMenu.map((item) => (
                <Sidebar.Item
                  as={Link}
                  key={item.name}
                  icon={item.icon}
                  href={item.path}
                >
                  {item.name}
                </Sidebar.Item>
              ))}
              <div className="cursor-pointer">
                {" "}
                <Sidebar.Item icon={HiLogout} onClick={() => signOut()}>
                  <div className="cursor-pointer">Logout</div>
                </Sidebar.Item>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

export default SideBar;
