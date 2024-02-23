import Nav from "./Nav"
import Link from "next/link"
import { memo } from "react"
import Image from "next/image"

function Header() {
  return (
    <header className='text-white z-50 px-[4vmin] flex justify-between items-center shadow-sm shadow-orange-600 select-none' style={{backgroundImage:"linear-gradient(to right,#000,#630)"}}>
      <Link href="/" className="flex space-x-[1vmin]">
        <Image src="/icon.jpg" height={50} width={50} alt="" className="h-[7vmin] w-auto"/>
        <h1 className='title1'>Online<span>MBA</span></h1>
      </Link>

      <Nav />
    </header>
  )
}

export default memo(Header)
