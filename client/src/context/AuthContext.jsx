import { createContext, useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";

const AuthContext = createContext();
const AuthProvider = ({children}) =>{
    const [ currentUser, setCurrentUser ] = useState(null );

    const login = async (inputs) => {
        console.log(env.REACT_APP_API)
        const res = await axios(`${env.REACT_APP_API}/auth/login`, inputs);
        console.log(inputs, "---",res.data)
        setCurrentUser(res.data);
    }
    const logout = async (inputs)=>{
        await axios("/auth/logout", inputs);
        setCurrentUser(null);
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.parse(currentUser));
    }, [ currentUser ]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

};

export { AuthContext, AuthProvider };