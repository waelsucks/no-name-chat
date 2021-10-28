import React from 'react'

function Message({ text, user}) {

    console.log(text)

    const sentBy = JSON.parse(text.sentBy)

    const className = sentBy.user.uid === user.user.uid ? "sent" : "recieved" ;

    return (
        <div className = {"message " + className}>
            
            {text.text}

        </div>
    )
}

export default Message
