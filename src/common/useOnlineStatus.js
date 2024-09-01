import { useEffect, useState } from "react"

export const useOnlineStatus = () => {
    const [OnlineStatus,setOnlineStatus] = useState(true)

    useEffect(()=> {
        window.addEventListener("online", ()=> {
            setOnlineStatus(true)
        })
        window.addEventListener("offline", ()=> {
            setOnlineStatus(false)
        })
    },[])

    return OnlineStatus
}