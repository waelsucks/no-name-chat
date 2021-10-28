import React, { useState } from 'react'

import { Button }       from '@mui/material'
import { TextField }    from '@mui/material';

import useFirestore     from '../hooks/useFirestore'
import Message          from './Message';

import { addDoc, collection, deleteDoc, getDocs, query, serverTimestamp, doc }  from "@firebase/firestore";
import { db }           from "../firebase/config";

function Room({ room, user, setRoom }) {

    const thisRoom = useFirestore(room);

    const [message, setMessage] = useState("");

    const handleClear = async () => {

        const q = query(collection(db, room));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((docRecieved) => {

            // doc.data() is never undefined for query doc snapshots

            deleteDoc(doc(db, room, docRecieved.id))

        });

    }

    const handleSend = async () => {

        const sendMessage = message;

        setMessage("")

        await addDoc(collection(db, room), {
        
            sentBy: JSON.stringify(user),
            text: sendMessage,
            createdAt: serverTimestamp()
    
        });

    }

    return (
        <div className = "room">

            <div className = "message-display">

                {thisRoom.map((message) => {return(
                    
                    <Message text = {message} user = {user}></Message>

                )})}

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
                <Button color = "inherit" variant = "outlined" onClick = { handleClear }>CLEAR</Button>

            </div>

        </div>
    )
}

export default Room
