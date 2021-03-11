import React, {useContext} from 'react'
import app  from "../firebase";

const StorageContext = React.createContext()

export const useStorage = () => {
    return useContext(StorageContext);
}
export const StorageContextProvider = ( {children} ) => {
    const userRef = app.firestore().collection('users')
    const eventsRef = app.firestore().collection('events')

    const addUsername = async (userID, username) => {
        return await userRef.doc(userID).set({
            username
        })
    }
    
    const getProfileInfo = async (userID) => {
        return await userRef.doc(userID).get()
    }

    const editProfile = async (userID, profileInfoObj) => {
        const doc = await getProfileInfo(userID)
       if(doc.exists){
           return await userRef.doc(userID).update(profileInfoObj)
       }else{
           return await userRef.doc(userID).set(profileInfoObj)
       }
    }

    const getOneDocument = async (collectionName, docId) => {
        return app.firestore().collection(collectionName).doc(docId).get()
    }
    
    const getAllEvents = async () => {
        return eventsRef.get()
    }
    const value={
        addUsername,
        editProfile,
        getProfileInfo,
        getAllEvents,
        getOneDocument
    }

    return (
        <StorageContext.Provider value={value}>
            {children}
        </StorageContext.Provider>
    )
}
