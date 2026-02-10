import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build & Bloom | Web Development & Digital Marketing Courses",
  description: "Expert Next.js development services and comprehensive courses in Social Media Marketing, Canva, Video Editing, Amazon PPC, and more by Build & Bloom.",
  keywords: "Next.js, TypeScript, Tailwind CSS, Web Development, Social Media Marketing, Canva, Video Editing, Amazon PPC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
