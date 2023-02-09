import { createContext, useContext, useState } from "react";




const User = createContext()

export const UserProvider = ({children})=>{
  const [userData, setUserData] = useState();

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