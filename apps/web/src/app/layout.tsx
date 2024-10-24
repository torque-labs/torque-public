import "./globals.css";
import "@torque-labs/torque-ui/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SolanaWalletProvider } from "../components/SolanaWalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SolanaWalletProvider>{children}</SolanaWalletProvider>
      </body>
    </html>
  );
}
