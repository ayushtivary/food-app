import { createContext } from "react";

// context logic/approach to avoid prop drilling 
export const userContext = createContext({
    loggedInUser : "Ayush"
})