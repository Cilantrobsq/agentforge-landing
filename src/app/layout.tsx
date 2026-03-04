import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SapienStream | AI Agents That Actually Work",
  description:
    "Autonomous AI agents built, deployed, and managed for your business. Lead generation, CRM, outreach, and operations running 24/7.",
  openGraph: {
    title: "SapienStream | AI Agents That Actually Work",
    description:
      "Autonomous AI agents built, deployed, and managed for your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
