import React, {useState} from 'react'

import Room         from './Room';
import RoomManager  from './RoomManager';

function Display({ user }) {

    const [room, setRoom] = useState(null);

    return (
       <div className = "display">

            {/* Step 2: Join a room. */}

            {room ? <Room user = {user} /> : <RoomManager setRoom = {setRoom} />}

       </div>
    )
}

export default Display
