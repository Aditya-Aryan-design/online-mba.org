"use client"
import { memo } from "react"
import {FidgetSpinner} from "react-loader-spinner"

const Loader = () => {
  return (
    <div className='h-full flex items-center justify-center'>
    <FidgetSpinner ballColors={["tomato","tomato","tomato"]} backgroundColor="black"/>
    </div>
  )
}

export default memo(Loader)
