import "./globals.css";
import ProvidersWrapper from "./providersWrapper";

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
      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
