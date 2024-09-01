import {React,useEffect,useState} from 'react'
import { MENU_API } from '../common/contants';

export const useMenuList = (resId) => {
    const [ResturantMenu, setMenuItems] = useState([])

    resId = Number(resId)
    useEffect(()=> {
        fetchMenu()
    },[])

    const fetchMenu =  async() => {
        console.log(resId)
        const data = await fetch(
            MENU_API +
            resId)
        const json = await data.json()
        setMenuItems(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)

    }
    return ResturantMenu
}