import React, { useContext, useEffect, useState } from 'react'
import { auth, createCredential, googleProvider, facebookProvider} from "../firebase";

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ( {children} ) => {
    const [currentUser, SetCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const logIn = async (email, password) => {
        return await auth.signInWithEmailAndPassword(email, password);
    }

    const signInWithProvider = async (providerType) => {
        switch (providerType) {
            case "google":
                return await auth.signInWithPopup(googleProvider);
            case "facebook":
                return await auth.signInWithPopup(facebookProvider);
            default:
                return "Error: no provider detected"
        }
    }

    const signUp = async (email, password) =>{
        return await auth.createUserWithEmailAndPassword(email, password);
    }

    const logOut = async () => {
        return auth.signOut()
    }

    const resetPassword = async (email) => {
        return await auth.sendPasswordResetEmail(email)
    }

    const reAuth = async (password) =>{
        const credential = await createCredential(currentUser.email, password);
        return await currentUser.reauthenticateWithCredential(credential)
    }

    const signInMethod = async (user) =>{
       return await auth.fetchSignInMethodsForEmail(user);
       
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(async user => {
            SetCurrentUser(user)
            setLoading(false)
        }) 
        return unsuscribe
    }, [])
    
    const value = {
        currentUser,
        signInWithProvider,
        signUp,
        logOut,
        logIn,
        reAuth,
        resetPassword,
        googleProvider,
        signInMethod
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
