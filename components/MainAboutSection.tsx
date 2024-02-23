import Image from "next/image"
import Link from "next/link"
import mainAboutData from "@/data/mainAboutData"
import { FaHandPointRight } from "react-icons/fa";
import { memo } from "react";



const MainAboutSection = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden max-w-[30rem] m-auto lg:max-w-[110rem] flex flex-col">

<h1 className="sectionHeading mt-5 text-center">About <span className="text-orange-600 font-bold">OnlineMBA</span></h1>

  <div className="py-24 mx-auto px-5">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        
      <Image height={400} width={400} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={mainAboutData.img1}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

        <h2 className="text-gray-900 text-xl title-font font-medium mb-1">{mainAboutData.title}</h2>
        
        <p className="leading-relaxed">{mainAboutData.desc}</p>

        <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">

        </div>

        <div className="flex">

          <Link href="/about" className="flex ml-auto text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded">Learn More</Link>

        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default memo(MainAboutSection)
