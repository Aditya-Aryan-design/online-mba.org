import mainconsultancyData from "@/data/mainconsultancyData"
import { FaHandPointRight } from "react-icons/fa";
import { memo } from "react";


const MainConsultancy = () => {
  return (
    <div className="px-10 py-8 space-y-3">
      <p className="sectionHeading text-center">{mainconsultancyData.title}</p>

        {
            mainconsultancyData.points.map((e,i)=>{
                return(
                    
                    <div key={i} className="flex justify-around"><FaHandPointRight className="flex-[0.3]"/><p className="w-2/3 text-xs sm:text-sm">{e}</p></div>
                
                )
            })
        }
    </div>
  )
}

export default memo(MainConsultancy)
