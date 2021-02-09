import React from 'react'
import { ThemeContextProvider } from '../contexts/ThemeContext'

export const Layout = ( { children } ) => {
    return (
        <>
            <ThemeContextProvider>
                { children }
            </ThemeContextProvider>
        </>
    )
}
