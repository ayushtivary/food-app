import { resobj } from "../common/mockdata"
import { Resturantcard } from "./ResturantCard"
import { useState , useEffect} from "react"
import { Shimmer } from "./Shimmer"
import { Link } from "react-router-dom"
import { useOnlineStatus } from "../common/useOnlineStatus"


export const Body = () => {
   // here listofResturant is containing the restaurants details and setListRes is called state variable which helps in re-rendering of component when state changes 
   let [listofResturant,setListRes] = useState([]);

   // useEffect is used to fetch the data from API, subscribing to event, cleaning resources
   // basically if anything changes with respect to data from API we need to use useEffect to render on UI 
   useEffect(() => {
     fetchData()
   }, [
      // cleanup code part (optional)
   ])
   
   // below function is used as async and await to fetch the data from API and then passed to useEffect 
   const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.260423&lng=84.8535844&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      setListRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
   
   }

   //function to show loader component if API is yet provide data.
   //We can use skrimmis concept which is basically generating a fake layout of page till the API sends response, its similar to having loader.
   // for now we are using simple card skrimmis 



   // custom hook to check online and offline status 
   const online = useOnlineStatus()
   if(!online) return <h1>You are offline</h1>

   return listofResturant.length == 0 ? (<Shimmer/>) : (
       <div className="flex-wrap">
          <div className="Search flex m-2 p-4">
          <div className="search-based-names">
            <input type="text" className="search-box border-black border-2 rounded-md"/>
            <button className="bg-green-200 px-4 py-1 m-4 rounded-md"
               // onClick={() => {

               // }
               // }
            >Search</button>
          </div>
          <div  className="Search  p-4 flex items-center">
          <button className="bg-gray-200 px-4 py-1 rounded-md"
               onClick={() => {
                  listofResturant = listofResturant?.filter((ele) => ele.info.avgRating>4.5)
                  setListRes(listofResturant)}}
             >
               Top Rated Resturants
             </button>
          </div>
          </div>
          <div className="flex flex-wrap">
                  {
                  listofResturant.map((res) => 
                  (
                     <Link to={`/resturantmenu/${res.info.id}`} className="Link-type" key={res.info.id}>
                     <Resturantcard 
                     resData={res}
                  /> 
                     </Link>

                  ))
                  }
             {/* <Resturantcard/> */}
          </div>
       </div>
    )
 }