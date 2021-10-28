import React from 'react'

import { ListItemButton, ListItemText } from '@mui/material';

import useFirestore from '../hooks/useFirestore';

function RoomManager({ setRoom, user }) {

    const rooms  = useFirestore('rooms')

    return (
        <div>

            <p>
                Welcome {user.user.uid}
            </p>

            <h1>
                Please select a room.
            </h1>
            
            {rooms && rooms.map( (room) => {return(
                <ListItemButton sx = {{color: "var(--primary)"}}>
                    <ListItemText primary = {room.name} onClick = {() => {setRoom(room.name)}}></ListItemText>
                </ListItemButton>
            )} )}

        </div>
    )
}

export default RoomManager
