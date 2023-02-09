import { createContext, useContext, useState } from "react";
import { users } from "../utils/users";



const User = createContext()

export const UserProvider = ({children})=>{
  const [userData, setUserData] = useState(users[0]);

  return (
    <User.Provider value={{userData, setUserData}}>
      {children}
    </User.Provider>
  )
}

export const useUser = () =>{
  let {userData, setUserData} = useContext(User)
  return {userData, setUserData}
}