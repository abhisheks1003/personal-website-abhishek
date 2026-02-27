import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abhishek — Full-Stack Engineer",
    template: "%s | Abhishek",
  },
  description:
    "Full-stack engineer building products at the intersection of AI, analytics, and great user experience.",
  openGraph: {
    title: "Abhishek — Full-Stack Engineer",
    description:
      "Full-stack engineer building products at the intersection of AI, analytics, and great user experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
