import React, {useContext} from 'react'
import app  from "../firebase";

const StorageContext = React.createContext()

export const useStorage = () => {
    return useContext(StorageContext);
}




export const StorageContextProvider = ( {children} ) => {
    const ref = app.firestore().collection('users')

    const addUsername = async (userID, username) => {
        return await ref.doc(userID).set({
            username
        })
    }
    const value={
        addUsername
    }

    return (
        <StorageContext.Provider value={value}>
            {children}
        </StorageContext.Provider>
    )
}