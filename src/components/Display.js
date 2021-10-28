import React, {useState} from 'react'

import Room         from './Room';
import RoomManager  from './RoomManager';

function Display({ user }) {

    const [room, setRoom] = useState(null);

    return (
       <div className = "display">

            {/* Step 2: Join a room. */}

            {room ? <Room user = {user} room = {room} setRoom = {setRoom}/> : <RoomManager setRoom = {setRoom} user = {user} />}

       </div>
    )
}

export default Display
