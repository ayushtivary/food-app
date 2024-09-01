import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "./ItemList"
import { clearCart } from "../common/cartSlice"

export const Cart = () => {
    const cartitems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = (item) => {
        dispatch(clearCart())
    } 
    return (
        <div className="text-center font-bold m-3">
            Cart
            <div className="w-6/12 m-auto">
            <button className="rounded-lg bg-green-400 text-white m-2 p-2" onClick={handleClearCart}>Clear cart</button>

            {cartitems.length == 0 
                ?
                <h1>Please add items to cart</h1>
                :
                <ItemList items={cartitems}/>   
            }
            </div>
            
        </div>
    )
}