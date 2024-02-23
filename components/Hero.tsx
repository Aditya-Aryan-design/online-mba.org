import heroData from "@/data/heroData"
import Link from "next/link"
import Image from "next/image"
import { memo } from "react"



function Hero() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-16 lg:flex-row flex-col items-center">

    <div className="lg:flex-grow lg:w-1/2 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{heroData.mainTitle}
      </h1>

      <p className="mb-8 leading-relaxed">{heroData.desc}</p>

      <div className="flex justify-center">

        <Link href="/connect"><button className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">{heroData.button}</button></Link>

      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full lg:w-1/2 w-5/6">
      <Image height={500} width={600} className="object-cover object-center rounded" alt="hero" src={heroData.image}/>
    </div>
  </div>
</section>
  )
}

export default memo(Hero)
