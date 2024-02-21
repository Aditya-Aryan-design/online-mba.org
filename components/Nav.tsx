"use client"
import navlinkData from "@/data/navlinkData"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { memo } from "react";


function Nav() {

    const path = usePathname()
    const [showNav, setShowNav] = useState(false)


    return (
        <nav className="font-semibold text-white text-[2vmin]">
            <ul className="hidden md:flex text-gray-300">
                {
                    navlinkData.map((e, i) => {
                        return (
                            <li key={i} className={`px-[2vmin] py-[2vmin] border-b-[0.5vmin] hover:text-orange-600 ${path === e.link ? "text-orange-600 border-white" : "border-transparent text-gray-300"}`}><Link href={e.link}>{e.title}</Link></li>
                        )
                    })
                }


            </ul>

            <div className="md:hidden">

                <div className="py-[2vmin] text-[4vmin]">
                {
                    showNav?<button onClick={()=>setShowNav(false)}>
                        <RxCross1 />
                    </button>:<button onClick={()=>setShowNav(true)}>
                        <GiHamburgerMenu />
                    </button>
                }
                </div>

                {showNav && <ul onClick={()=>setShowNav(false)} className="flex flex-col absolute right-[3vmin] bg-white text-[4vmin] shadow-md">
                {
                    navlinkData.map((e, i) => {
                        return (
                            <Link href={e.link} key={i}>
                                <li className={`px-[2vmin] py-[2vmin] hover:bg-zinc-100 ${path === e.link ? "text-orange-600" : "text-gray-500"}`}>{e.title}</li>
                            </Link>
                        )
                    })
                }
                </ul>}
            </div>
        </nav>
    )
}

export default memo(Nav)
