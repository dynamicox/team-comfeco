import React, {useContext} from 'react'
import app  from "../firebase";

const StorageContext = React.createContext()

export const useStorage = () => {
    return useContext(StorageContext);
}
export const StorageContextProvider = ( {children} ) => {
    const userRef = app.firestore().collection('users')

    const addUsername = async (userID, username) => {
        return await userRef.doc(userID).set({
            username
        })
    }
    const editProfile = async (userID, profileInfoObj) => {
        return await userRef.doc(userID).set(profileInfoObj)
    }

    const getProfileInfo = async (userID) => {
        return await userRef.doc(userID).get()
    }
    const value={
        addUsername,
        editProfile,
        getProfileInfo
    }

    return (
        <StorageContext.Provider value={value}>
            {children}
        </StorageContext.Provider>
    )
}
