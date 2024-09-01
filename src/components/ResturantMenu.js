import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { MENU_API } from '../common/contants';
import useResturantAPI from '../common/useResturantAPI';
import { useMenuList } from '../common/useMenuList';
import { ResturantCategories } from './ResturantCategories';

export const RestaurantMenu = () => {
    let {resId} = useParams();
    let ResInfo = useResturantAPI(resId) //use of custom hook for resturant card details like name, cuisnes etc
    let ResMenuList = useMenuList(resId)
 

    const {name,costForTwoMessage,cuisines,avgRating} = ResInfo
    // const {itemCards}  = ResMenuList.cards?.[2].card?.card ?? ["Test","test"]
    const categories = ResMenuList.cards?.filter(
        (c)=> 
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    const [showIndex,setShowIndex] = useState(0)
    return (
        <div className="menu text-center ">
            <h1 className='font-bold m-2'>{name}</h1>
            <h4>{cuisines} - {costForTwoMessage}</h4>
            <h4>Avg Ratings - {avgRating}</h4>
            {/* <h1 className='mt-3 font-medium'>Menu</h1> */}
            {/* <div>{itemCards[0].card.info.name}</div> */}
            {/* <ul>
                {
                    itemCards?.map((items) => (
                    <li key={items?.card?.info?.id}>
                        {items?.card.info.name}   
                    </li>
                )
                )}
            </ul> */}
            {/* <div className='font-extrabold'>Categories</div> */}
            <div>
                {/* controlled component setShowIndex is used to send data from child component to parent here child - categories and parent - resturantmenu component */}
                {
                    categories?.map((categorie, index)=> (<ResturantCategories key={categorie?.card.card.title} data={categorie?.card?.card}
                    showItems={index == showIndex ? true : false} 
                    setShowIndex = {()=>setShowIndex(index)}
                     />))
                }
            </div>
        </div>
    )
}