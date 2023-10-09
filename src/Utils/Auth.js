import { createContext, useContext, useState } from "react";

const AuthContext=createContext(null);

export const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    const [pass,setPass]=useState(null);
    const login=(user,pass)=>{
        setUser(user);
        setPass(pass)
    }
    const logout=(user,pass)=>{
        setUser(null);
        setPass(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}