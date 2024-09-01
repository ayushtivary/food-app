// custom hook to fetch the API 

import {React,useEffect,useState} from 'react'
import { MENU_API } from '../common/contants';

export default useResturantAPI = (resId) => {
    const [ResturantMenuList, setList] = useState([])


    resId = Number(resId)
    useEffect(() => {
        fetchMenu()
    },[]);

    const fetchMenu = async() => {
        console.log(resId)
        const data = await fetch(
            MENU_API +
            resId)
        const json = await data.json()

        console.log("API response",json)
        setList(json.data.cards[2]?.card?.card?.info)
    }
    return ResturantMenuList
}
