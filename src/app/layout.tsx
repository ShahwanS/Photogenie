import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhotoGenie | Home",
  description:
    " photography portal, showcasing the enchanting beauty of Marburg, Germany. Dive into our captivating collection of images that bring to life Marburgs historic architecture, vibrant culture, and picturesque landscapes. Discover the unique charm of this German gem through our lens, and find inspiration for your next visit or photography project. Stay updated with our latest galleries, events, and photography tips. Experience the essence of Marburg through stunning visuals that celebrate its rich heritage and natural splendor.",
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
