import { memo } from "react"

const Map = () => {
  return <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: "grayscale(0.5) contrast(1.2) opacity(0.4)"}}></iframe>
}

export default memo(Map)
