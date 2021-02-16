import React from 'react'
import { AuthContextProvider } from "../contexts/AuthContext";

export const Layout = ( { children } ) => {
    return (
        <>
            <AuthContextProvider>
                { children }
            </AuthContextProvider>
        </>
    )
}
