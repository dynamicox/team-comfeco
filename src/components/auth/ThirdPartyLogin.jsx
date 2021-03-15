import React from 'react'
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { useAuth } from "../../contexts/AuthContext";
import { useStorage } from "../../contexts/StorageContext";

export const ThirdPartyLogin = () => {
    const { signInWithProvider } = useAuth()
    const { createProfile, getProfileInfo } = useStorage()

    async function profileCreation(credential) {
        const profile = await getProfileInfo(credential.user.uid)
        if(!profile.exists){
          try {
            createProfile(credential.user.uid,credential.user.displayName);
          } catch (error) {
            alert(error.message)
          }
        }
    }

    return (
        <div className="login_with_container border-top pt-4 mb-3">
        {/* -------FACEBOOK LOGIN------- */}
        <img src={facebook_icon} alt="LogIn With Fb"  onClick={()=> {
          signInWithProvider("facebook").then((credential)=>{
             profileCreation(credential)
            })
             .catch((err)=> alert(err.message))}} />
        {/* -------GOOGLE LOGIN------- */}
        <img src={google_icon} alt="LogIn with Gmail" onClick={()=> {
          signInWithProvider("google").then((credential)=>{
             profileCreation(credential)
          }).catch((err)=> alert(err.message))
      }} />
      </div>
    )
}
