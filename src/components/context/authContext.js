import { createContext, useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const location = useLocation();

  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  useEffect(() =>{
    if(currUser){
      
        const getNewToken = async () =>{
          try {
            const res = await fetch("https://blogapi-cgoa.onrender.com/api/auth/refresh_token", { method: "POST", credentials: "include"});
            const data = await res.json();
            if(data.status)
              setCurrUser(data);
            else
              logout();
          } catch (error) {
              console.log(error.message)
          }
      }
      getNewToken();
    }
    else if(!currUser && JSON.parse(localStorage.getItem("user")))
      logout();

  }, [location]);

  const signin = async (inputs, setErr) => {
      const res = await fetch("https://blogapi-cgoa.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
        credentials: "include",
      })
      
      const data = await res.json();
      if(data.status){     
        setCurrUser(data);
      }
      setErr(data.message);
  };

  const logout = async () => {
    try{
      const res = await fetch("https://blogapi-cgoa.onrender.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      await res.json();
      setCurrUser(null);
    }
    catch(error){
      console.log(error.message)
    }
   
  };

  return (
    <AuthContext.Provider value={{ currUser, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

