import React from 'react'

import { Button } from '@mui/material';

import { auth, signInAnonymously } from '../firebase/config';

// import { motion } from 'framer-motion';

function Login({ setUser }) {

    const handleSignIn = () => {

        signInAnonymously(auth).then(
            (user) => {
                console.log("Successfully logged in anonymously.")
                setUser(user)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }

    return (
        <div
        
        className = "login-page"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{ease: "anticipate"}}

        >
            
            <h1>
                Welcome.
            </h1>
            <p>
                Please sign in. You will be assigned an ID.
            </p>

            <Button
            
            variant = "outlined"
            color   = "inherit"
            onClick = {handleSignIn}
            
            > SIGN IN </Button>

        </div>
    )
}

export default Login
