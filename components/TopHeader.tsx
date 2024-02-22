import ownerDetails from "@/data/ownerDetails"
import { memo } from "react"
import { IoMdCall,IoMdMail } from "react-icons/io";



const TopHeader = () => {
  return (
    <header className="flex justify-between pt-[1vmin] pb-[0.5vmin] px-[4vw] text-[2.3vmin] sm:text-[2vmin] md:text-[1.7vmin] bg-orange-950 font-semibold text-white">

      <a href={`tel:${ownerDetails.phone}`} className="flex items-center "><IoMdCall /><span className="px-[1vmin]">{ownerDetails.phone}</span></a>

      <a href={`mailto:${ownerDetails.email}`} className="flex items-center "><IoMdMail /><span className="px-[1vmin]">{ownerDetails.email}</span></a>


    </header>
  )
}

export default memo(TopHeader)
