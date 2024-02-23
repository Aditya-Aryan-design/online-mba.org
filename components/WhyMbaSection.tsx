import whymbaItemData from "@/data/whymbaItemData"
import { memo } from "react"
import KeyItem from "./KeyItem"

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
                            return <KeyItem key={i} title={e.title} desc={e.desc}/>
                        })
                    }

                </div>

            </div>
        </section>
    )
}

export default memo(WhyMbaSection)
