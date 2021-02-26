import React from 'react'
import { AuthContextProvider } from "../contexts/AuthContext";
import { StorageContextProvider } from "../contexts/StorageContext";

export const Layout = ( { children } ) => {

    return (
        <>
        <StorageContextProvider>
            <AuthContextProvider>
                    { children }
            </AuthContextProvider>
        </StorageContextProvider>
        </>
    )
}
