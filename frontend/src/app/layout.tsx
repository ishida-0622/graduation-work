import type { Metadata } from "next";

import { Footer } from "@/components/layouts/Footer";
import { WithApollo } from "@/components/layouts/WithApollo";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <WithApollo>{children}</WithApollo>
        <Footer />
      </body>
    </html>
  );
}
