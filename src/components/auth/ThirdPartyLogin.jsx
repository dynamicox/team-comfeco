import React from 'react'
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { useAuth } from "../../contexts/AuthContext";

export const ThirdPartyLogin = () => {
    const { signInWithProvider } = useAuth()

    return (
        <div className="login_with_container border-top pt-4 mb-3">
        {/* -------FACEBOOK LOGIN------- */}
        <img src={facebook_icon} alt="LogIn With Fb"  onClick={()=> signInWithProvider("facebook")} />
        {/* -------GOOGLE LOGIN------- */}
        <img src={google_icon} alt="LogIn with Gmail" onClick={()=> {signInWithProvider("google")}} />
      </div>
    )
}
