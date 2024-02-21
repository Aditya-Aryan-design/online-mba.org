import { memo } from "react"

const CourcesItemTable = ({th,tb}:{th:string,tb:string}) => {
  return (
                    <div className="flex justify-between border-b-2 space-x-2 items-center">
                        <div className="font-bold">{th}</div>
                        <div className="px-4 py-2 text-end">{tb}</div>
                    </div>
  )
}

export default memo(CourcesItemTable)
