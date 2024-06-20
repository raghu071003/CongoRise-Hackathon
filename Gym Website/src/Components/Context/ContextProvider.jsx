import { useState } from "react"
import UserContext from "./Context"

function ContextProvider({children }) {
    const [isLoggedin,setIsLoggedIn] = useState(false);
     
  return (
    <UserContext.Provider value={{isLoggedin,setIsLoggedIn}}>
     {children} 
    </UserContext.Provider>
  )
}

export default ContextProvider