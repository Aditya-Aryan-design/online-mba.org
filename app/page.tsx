import { memo } from "react"
import Hero from "@/components/Hero"
import MainAboutSection from "@/components/MainAboutSection"
import WhyMbaSection from "@/components/WhyMbaSection"
import Courses from "@/components/Courses"
import MainForm from "@/components/MainForm"
import MainConsultancy from "@/components/MainConsultancy"
import MainUniversityDetails from "@/components/MainUniversityDetails"
import MainTestimonials from "@/components/MainTestimonials"



function page() {
  return (
    <>
      <Hero />
      <hr />
      <MainForm />
      <hr />
      <WhyMbaSection />
      <hr />
      <MainAboutSection />
      <hr />
      <Courses />
      <hr />
      <MainConsultancy />
      <hr />
      <MainUniversityDetails />
      <hr />
      <MainTestimonials />
    </>
  )
}

export default memo(page)
