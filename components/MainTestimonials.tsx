import TestimonialItem from "./TestimonialItem"
import testimonialData from "@/data/testimonialData"
import { memo } from "react"

const MainTestimonials = () => {
  return (
    <section className="flex flex-col space-y-4 text-center py-8 px-4">
        <p className="sectionHeading">What Students says!</p>
        <div className="flex italic items-center overflow-auto snap-mandatory space-x-5">

            {
                testimonialData.map((e,i)=>{
                    return <TestimonialItem key={i} msg={e.msg} name={e.name} occup={e.occup}/>
                })
            }
            
        </div>
    </section>
  )
}

export default memo(MainTestimonials)
