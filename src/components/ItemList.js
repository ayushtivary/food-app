import { useDispatch } from "react-redux"
import { CDN } from "../common/contants"
import { addItem } from "../common/cartSlice"

export const ItemList = ({ items }) => {

    // dispatcher to send data 
    const dispatch = useDispatch()
    const handleClickItems = (item) => {
        dispatch(addItem(item))
    } 
    return (
        <div>
            {items.map((item) => (
                <><div key={item.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-8/12">
                        <div className="py-2">
                            <span className="font-medium">{item.card?.info?.name}</span>
                            <span className="pl-4 font-medium">Rs. {item.card?.info?.defaultPrice ? item.card?.info?.defaultPrice/100 : item.card?.info?.price/100}</span>
                        </div>
                        <p className="text-xs">
                                {item.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-2">
                    <div className="absolute">
                        <button className="p-2 bg-orange-100 rounded-md shadow-lg m-auto"
                        onClick={() => handleClickItems(item)}
                        >Add +</button>
                    </div>
                        <img src={CDN + item.card?.info?.imageId} className="w-full"/>
                       
                    </div>
                    </div> </>
            ))}
        </div>
    )
}