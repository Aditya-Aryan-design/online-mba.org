import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";




export const metadata: Metadata = {
  title: "Online MBA admission in best university",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <TopHeader />
        <Header />
        <div className="flex-1 flex flex-col overflow-auto">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}