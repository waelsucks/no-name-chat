import React, { useState } from 'react'

import { Button }       from '@mui/material'
import { TextField }    from '@mui/material';

import useFirestore     from '../hooks/useFirestore'

function Room({ room, user, setRoom }) {

    const rooms = useFirestore('rooms');

    const [message, setMessage] = useState("");

    const handleSend = () => {

        console.log("Sending: " + message)
        setMessage("")

    }

    return (
        <div className = "room">

            <div className = "message-display">

                Beep.

            </div>
            
            {/* <TextField variant = "standard"></TextField> */}

            <div className = "room-input">
                <TextField

                variant = "standard"

                fullWidth

                style={{
                    backgroundColor: "var(--bg-color)",
                    borderBottom: "1px solid var(--secondary)"
                }}
                InputProps={{
                    disableUnderline: true,
                    style: {
                        color: "var(--primary)"
                    }
                }}

                onChange = { (event) => setMessage(event.target.value) }

                value = {message}

                />

                <Button color = "inherit" variant = "outlined" onClick = { handleSend }>Send</Button>
                <Button color = "inherit" variant = "outlined" onClick = { () => {setRoom(null)} }>Exit</Button>

            </div>

            

        </div>
    )
}

export default Room
