import React from 'react'

export const ThemeContext = React.createContext()

export const ThemeContextProvider = ( {children} ) => {
    
    const value = {
        
    }

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}
