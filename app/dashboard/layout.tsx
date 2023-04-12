import Link from "next/link";

const dashboardMenu = [
  {
    name: "Home",
    path: "/dashboard",
  },
  {
    name: "Try Out",
    path: "/dashboard/tryout",
  },
  {
    name: "Shop",
    path: "/dashboard/shop",
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
  },
  {
    name: "Logout",
    path: "/Logout",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container max-w-screen-md mx-auto ">
        <h1 className="text-2xl font-bold py-4">Dashboard</h1>
        <ul className="flex gap-4 py-4 mb-10">
          {dashboardMenu.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {children}

        <div className="mt-20">Ini Footer Dashboard</div>
      </div>
    </>
  );
}
