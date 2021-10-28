import React, { useState, useEffect } from 'react'

import { db } from '../firebase/config'
import { addDoc, collection, onSnapshot, doc, query } from '@firebase/firestore';

function RoomManager({ setRoom }) {

    const q = query(collection(db, "Earth"));
    const unsub = onSnapshot(q, (querySnapshot) => {

        const messages = [];

        querySnapshot.forEach((doc) => {
            messages.push(doc.data().message);
        });

        console.log("Chat: ", messages.join(", "));

    });

    useEffect(() => {

    }, [unsub])

    return (
        <div>
            
            I am a room manager.

        </div>
    )
}

export default RoomManager
