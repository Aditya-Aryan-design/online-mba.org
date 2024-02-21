import mainCoursesData from "@/data/mainCoursesData"
import Image from "next/image"
import CourcesItemTable from "./CourcesItemTable"
import { memo } from "react"



const Courses = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">

            <h2 className="sectionHeading pt-7 text-center">Online Classes from NAAC A++ universities</h2>
            
                <div className="flex flex-wrap justify-center">

                    {
                        mainCoursesData.map((e, i) => {
                            return (
                                <div className="max-w-[30rem] min-w-[20rem] p-5 text-xs sm:text-sm lg:text-lg" key={i}>
                                    <div className="shadow-md h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">


                                        <Image height={400} width={400} className="h-auto w-full object-cover object-center" src={e.img} alt="" />

                                        <div className="p-5 flex flex-col justify-between">
                                            
                                            <h2 className="title-font text-lg md:text-xl font-medium text-gray-900 mb-3">{e.title}</h2>

                                            <p className="leading-relaxed mb-3">{e.desc}</p>
                                            <div className="flex items-center flex-wrap ">

                                            <div className="text-gray-600 body-font py-4">

<div className="w-full mx-auto overflow-auto flex flex-col justify-center">
    
    
      
      {
        e.table.map((val,index)=><CourcesItemTable key={index} th={val.th} tb={val.tb}/>)
      }
      
  
</div>

</div>

                                                <div className="w-full">
                                                <a href="#form" className="text-orange-600 inline-flex items-center md:mb-2 lg:mb-0 font-semibold">Join Now
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


        </section>
    )
}

export default memo(Courses)
