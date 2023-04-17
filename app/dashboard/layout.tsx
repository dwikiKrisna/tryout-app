import Link from "next/link";
import SideBar from "./SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-2">
        <SideBar />
        <div className="flex-1 container p-10 bg-slate-50 min-h-screen ">
          {children}
        </div>
      </div>
    </>
  );
}
