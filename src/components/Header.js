import { useState , useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import { userContext } from "../common/useContext";
import { useSelector } from "react-redux";

export const Header = () => {

   // dynamically changing the login to logout and vice verse to check the use of useState 
   const [changeBtn, setBtnStatus] = useState("Login");


   // get data from context hook
   const dummydata = useContext(userContext)


   // subsctibing the items part from store 
   const cartItems = useSelector((store) => store.cart.items)
   console.log(cartItems)
   // if there is no dependency array then use effect will be called for every render cycle
   // if there is a empty dependency array then use effect will be called only at initial render 
   // if there is dependency then it will be called every time changeBtn is called 
   useEffect(() => {
      console.log("use effect called")
   },[changeBtn] )
    return (
       <div className="flex justify-between  shadow-lg m-2 sm:bg-pink-50 bg-green-200">
          <div className="logo-container">
             <img className="w-32 shadow-lg" src="data:image/png;base64,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"></img>
             </div>
             <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                  <li className="px-4">
                   <Link to='/'>
                   Home
                   </Link>
                   </li>
                   <li className="px-4">
                   <Link to="/about">About</Link></li>
                   <li className="px-4">
                   <Link to='/contact'>Contact us</Link>
                   </li>
                   <li className="px-4">
                   <Link to='/grocery'>Grocery</Link>
                   </li>
                   <li className="px-4 font-bold">
                   <Link to='/cart'>Cart ({cartItems.length})</Link>
                   </li>
                   {/* <li className="px-4 font-bold">Cart ({cartItems.length})</li> */}
                     <button className="btn-login" 
                     // onclick function to render the component when button is clicked 
                     onClick={() => {
                           changeBtn === "Login" ?
                           setBtnStatus("Logout") :
                           setBtnStatus("Login");
                        }
                     }>
                     {/* data binding in react  */}
                        {changeBtn} 
                     </button>
                  <li className="px-4 font-bold">{dummydata.loggedInUser}</li>
                </ul>
             </div>
       </div>
    )
 }