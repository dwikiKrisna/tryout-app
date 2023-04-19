import "./globals.css";
import ProviderWrapper from "./ProviderWrapper";
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
      <body>{children}</body>
    </html>
  );
}
