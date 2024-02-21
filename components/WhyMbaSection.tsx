import whymbaItemData from "@/data/whymbaItemData"
import { memo } from "react"

const WhyMbaSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">

                    <h2 className="sectionHeading">Why online MBA program ?</h2>

                </div>
                <div className="flex flex-wrap -m-4">


                    {
                        whymbaItemData.map((e, i) => {
                            return (
                                <div key={i} className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-200 p-6 rounded-lg bg-orange-50">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{e.title}</h2>
                                        <p className="leading-relaxed text-base">{e.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}

export default memo(WhyMbaSection)
