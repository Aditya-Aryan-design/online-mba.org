import UniversityItem from "./UniversityItem"
import mainUniversityData from "@/data/mainUniversityData"
import { memo } from "react"


const MainUniversityDetails = () => {
  return (
    <div className="py-8 px-10 flex flex-wrap">
      <h2 className="sectionHeading text-center w-screen">Top universities for online MBA BBA BCA and MCA</h2>
      {
        mainUniversityData.map((e,i)=>{
            return(
                <UniversityItem key={i} title={e.title} image={e.image} desc={e.desc}/>
            )
        })
      }
    </div>
  )
}

export default memo(MainUniversityDetails)
