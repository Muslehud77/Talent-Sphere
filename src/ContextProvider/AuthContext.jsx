import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


import axios from "axios";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const [cart,setCart] = useState([])
const [name,setName] = useState('')


const goToTop = ()=>{
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
}






const register = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
const facebookLogin = () => {
    setLoading(true)
    return signInWithPopup(auth,facebookProvider)
}
const logout = ()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        const userEmail = currentUser?.email || user?.email;
        const userData = { email: userEmail };
        setUser(currentUser)
      

        if (currentUser) {
          axios
            .post("https://crystal-cup-server.vercel.app/jwt", userData, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data);
            });
        } else {
          axios
            .post("https://crystal-cup-server.vercel.app/logout", userData, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data);
            });
        }
        setLoading(false)

        
    })
    return ()=> unsubscribe()
},[])
    const info = {
       
      goToTop,
   cart,setCart,
      name,
      setName,
    
      user,
      
      loading,
      register,
      login,
      googleLogin,
      facebookLogin,
      logout,
      setLoading
    };


    return (
       <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;