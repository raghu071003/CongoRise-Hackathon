import { useState } from "react"
import UserContext from "./Context"

function ContextProvider({children }) {
    const [isLoggedin,setIsLoggedin] = useState(false);
     
  return (
    <UserContext.Provider value={{isLoggedin,setIsLoggedin}}>
     {children} 
    </UserContext.Provider>
  )
}

export default ContextProvider