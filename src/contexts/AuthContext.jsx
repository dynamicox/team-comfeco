import React, { useContext, useEffect, useState } from 'react'
import { auth, createCredential } from "../firebase";

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

    const signUp = async (email, password) =>{
        return await auth.createUserWithEmailAndPassword(email, password);
    }

    const logOut = async () => {
        return auth.signOut()
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const reAuth = async (password) =>{
        const credential = await createCredential(currentUser.email, password);
        return await currentUser.reauthenticateWithCredential(credential)
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged( user => {
            SetCurrentUser(user)
            setLoading(false)
            
        })
        return unsuscribe
    }, [])
    
    const value = {
        currentUser,
        signUp,
        logOut,
        logIn,
        reAuth,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
