import Nav from "./Nav"
import Link from "next/link"
import { memo } from "react"

function Header() {
  return (
    <header className='text-white z-50 px-[4vmin] flex justify-between items-center shadow-sm shadow-orange-600' style={{backgroundImage:"linear-gradient(to right,#000,#630)"}}>
      <Link href="/"><h1 className='title1'>Online<span>MBA</span></h1></Link>

      <Nav />
    </header>
  )
}

export default memo(Header)
