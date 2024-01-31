import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

import { Reoverlay } from "reoverlay";
import Login from "../Pages/Login/Login";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ProfileUpdate from "../Components/ProfileUpdate/ProfileUpdate";
import useUser from "../Api/useUser";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
const [selected,setSelected] = useState(null)
const [search,setSearch] = useState('')
const [name,setName] = useState('')
const [enable,setEnable] = useState(false)
const axiosPublic = useAxiosPublic()

const goToTop = ()=>{
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
}

const closeModal = () => {
  Reoverlay.hideModal();
};

 const openLogin = () => {
   Reoverlay.showModal(Login);
 };

 const openProfileUpdate = () =>{
    Reoverlay.showModal(ProfileUpdate);
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
    return signOut(auth).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Logged Out`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentTalented) => {
    
     
      setUser(currentTalented);

      if (currentTalented) {
        const userInfo = { email: currentTalented.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          localStorage.setItem("token", res.data.token);
          setLoading(false);
          setEnable(true);
        });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
        setEnable(false);
      }
    });
    return ()=> unsubscribe()
},[])
    const info = {
      openProfileUpdate,
        enable,
       selected,setSelected,
      goToTop,
  search,setSearch,
      name,
      setName,
    openLogin,
      user,
      closeModal,
      loading,
      register,
      login,
      googleLogin,
      facebookLogin,
      logout,
      setLoading
    };


    return (
      
       <AuthContext.Provider value={info}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;