import { useState } from "react"

// this is for functional component example 
export const User = ({name}) =>{
    const {count} = useState()
    return (
        <div className="User-Info">
            <h2>name: {name}</h2>
            <h3>Address : Odisha</h3>
        </div>
    )
}