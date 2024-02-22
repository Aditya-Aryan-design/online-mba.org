import Image from "next/image"
import { memo } from "react"

const UniversityItem = ({title,desc,image}:{
    title:string,
    desc:string,
    image:string
}) => {
  return (
    <div className="bg-orange-50 shadow-lg p-6 rounded-lg m-auto my-3 max-w-[25rem] space-y-2">
          <Image height={400} width={500} className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt=""/>
          <h2 className="tracking-widest text-orange-600 text-base sm:text-xl title-font font-bold">{title}</h2>
          
          <p className="leading-relaxed text-sm">{desc}</p>
        </div>
  )
}

export default memo(UniversityItem)
