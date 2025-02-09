import "@radix-ui/themes/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import NavBar from "@/ui/layout/navbar";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="light">
          <NavBar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
