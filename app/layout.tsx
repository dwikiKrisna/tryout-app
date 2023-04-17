import { ClerkProvider } from "@clerk/nextjs/app-beta";
import "./globals.css";

export const metadata = {
  title: "Tryout App",
  description: "A simple app to tryout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
