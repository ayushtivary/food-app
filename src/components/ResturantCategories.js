import { useState } from "react"
import { ItemList } from "./ItemList"

export const ResturantCategories = ({ data ,showItems, setShowIndex}) => {

    // const [showItems, setShowItems] = useState(false)
    console.log("showItesm",showItems)
    console.log("datacards",data)
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-xl p-4 rounded-lg">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg cursor-pointer">
                    {data?.title}
                </span>
                <span className="cursor-pointer">
                    ⬇️
                </span>
                </div>
               {showItems && <ItemList items={data.itemCards}/> }
        </div>
    )
}
