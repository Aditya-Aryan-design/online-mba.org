import React from 'react'

const KeyItem = ({desc,title}:{
    desc?:string,
    title?:string
}) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border shadow-md border-gray-200 p-6 rounded-lg bg-orange-50">
                {title && <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>}
                <p className="leading-relaxed text-base">{desc}</p>
            </div>
        </div>
    )
}

export default KeyItem
