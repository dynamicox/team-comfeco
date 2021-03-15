import React, {useContext} from 'react'
import app, { FieldValue }  from "../firebase";

const StorageContext = React.createContext()

export const useStorage = () => {
    return useContext(StorageContext);
}
export const StorageContextProvider = ( {children} ) => {
    const userRef = app.firestore().collection('users')
    const groupsRef = app.firestore().collection('groups')

    const createProfile = async (userID, username) => {
        const profileObj = {
                username,
                country: '',
				field:'',
				gender: '',
				link_github:'', 
				link_facebook:'', 
				link_linkedin:'', 
				link_twitter:'',
				birthday:'', 
				biography:'',
                group: '',
                events: [],
                badges: []
        }
        return await userRef.doc(userID).set(profileObj)
    }
    
    const getProfileInfo = async (userID) => {
        return await userRef.doc(userID).get()
    }

    const editProfile = async (userID, profileInfoObj) => {
           return await userRef.doc(userID).update(profileInfoObj)
    }

    const getOneDocument = async (collectionName, docId) => {
        return app.firestore().collection(collectionName).doc(docId).get()
    }
    
    const getCollection = async (collectionName) => {
        return app.firestore().collection(collectionName).get()
    }

    const getFilteredDocuments = async (collectionName, coditionsArray) => {
        const field = coditionsArray[0]
        const condition = coditionsArray[1]
        const value = coditionsArray[2]

        return app.firestore().collection(collectionName).where(field, condition, value).get()
    }

    const joinGroup = async (groupId,userId, role) => {
        try {
            userRef.doc(userId).update({
                group: groupId
            })
            return await groupsRef.doc(groupId).update({
            groupUsers: FieldValue.arrayUnion({user: userId, role})
        })
        } catch (error) {
          console.log(error)  
        }
    }
    const leaveGroup = async (groupId, userToRemoveObj) => {
        try {
            userRef.doc(userToRemoveObj.user).update({
                group: ''
            })
            return await groupsRef.doc(groupId).update({
            groupUsers: FieldValue.arrayRemove(userToRemoveObj)
        })
        } catch (error) {
          console.log(error.message)  
        }
    }

    const value={
        createProfile,
        editProfile,
        getProfileInfo,
        getCollection,
        getOneDocument,
        getFilteredDocuments,
        joinGroup,
        leaveGroup
    }

    return (
        <StorageContext.Provider value={value}>
            {children}
        </StorageContext.Provider>
    )
}
