import { Button } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext";
import React from 'react'

export const HomePageView = () => {
    const { logOut } = useAuth() 

    return (
        <div>
            <h1>Welcome</h1>
            <Button onClick={logOut}>Log out</Button>
        </div>
    )
}
