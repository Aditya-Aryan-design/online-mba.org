import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";




export const metadata: Metadata = {
  title: "Best online MBA, BBA, MCA colleges in Pune admission-OnlineMBA",
  description: "Looking to enroll in online programs like MBA, BBA, MCA, or BCA? Look no further! We have partnered with best leading universities offering top-notch online courses such as Dr. D. Y. Patil University, Amity University, Manipal University, and Suresh GyanVihar University. Don't hesitate any longer! Take the next step in advancing your career by joining one of our courses today.",
  keywords:[
    "online mba admission in pune",
    "dy patil mba admission",
    "dy patil university pune mba",
    "amity mba admission criteria",
    "amity online",
    "manipal mba",
    "manipal mba online",
    "suresh gyan vihar university course admissions",
    "educational consultant in pune",
    "best college for mba in pune",
    "yahi bba or mca ke liye",
    "mba admission for working professional",
    "why online admission is good choice",
    "mba in it mba in finance mba in hr mba in sales",
    "online mca colleges in pune",
    "online bca colleges in pune",
    "online mba colleges in pune",
    "online bba colleges in pune",
  ]
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
