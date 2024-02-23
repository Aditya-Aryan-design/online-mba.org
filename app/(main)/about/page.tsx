import Image from "next/image"
import aboutData from "@/data/aboutData"
import { memo } from "react"
import KeyItem from "@/components/KeyItem"

const page = () => {
  return (
    <main className="text-gray-600 body-font overflow-hidden max-w-[30rem] m-auto lg:max-w-[110rem] flex flex-col">

        <h1 className="sectionHeading mt-5 text-center">About <span className="text-orange-600 font-bold">OnlineMBA</span></h1>

  <div className="py-10 mx-auto px-5">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        
      <Image height={400} width={400} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={aboutData.image1}/>
      <div className="lg:w-1/2 text-center lg:text-start w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

        
        <p className="leading-relaxed lg:text-lg">{aboutData.article1}</p>

        <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">

        </div>
        </div>
        </div>
        </div>
        <hr />
      <h1 className="sectionHeading text-center"><span className="font-bold text-orange-600">OnlineMBA:</span> Your Career Partner</h1>

      <div className="py-10 mx-auto px-5">
    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse justify-center items-center">
        
      
      <div className="lg:w-1/2 text-center lg:text-end w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">

        
        <p className="leading-relaxed lg:text-lg">{aboutData.article2}</p>

        <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">

        </div>
        </div>
        <Image height={400} width={400} alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={aboutData.image2}/>
        </div>
        </div>
        <hr />
        <div className="my-3">
          <p className="text-xl font-bold text-center">Key Highlights</p>
          <div className="flex flex-wrap justify-center">
            {
              aboutData.highlights.map((e,i)=><KeyItem key={i} desc={e}/>)
            }
          </div>
        </div>
</main>
  )
}

export default memo(page)
