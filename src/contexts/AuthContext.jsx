import React, { useContext, useEffect, useState } from 'react'
import { auth } from "../firebase";

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ( {children} ) => {
    const [currentUser, SetCurrentUser] = useState()

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

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged( user => {
            SetCurrentUser(user)
        })
        return unsuscribe
    }, [])
    
    const value = {
        currentUser,
        signUp,
        logOut,
        logIn
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}