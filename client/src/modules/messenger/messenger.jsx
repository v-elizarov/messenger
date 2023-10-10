import React, { useEffect, useRef, useState } from "react";
import ErrorBoundary from "../../components/error-boundary";
import {BsFillSendFill} from 'react-icons/bs';
import Button from "../../ui/button";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/message";
import './messenger.css'
import { setMessagesInRoom } from "../../store/actions";

const Messenger = () => {
    
    const storeUserSection = useSelector(store => store.user)
    const storeMessengerSection = useSelector(store => store.messenger)
    const dispatch = useDispatch()
    const socket = useRef()
    const [message, setMessage] = useState('')

    const sendMessage = async () => {
        const mes = {
            userID: storeUserSection.userID,
            roomID: storeMessengerSection.pickedRoomID,
            message,
            event: 'message'
          }
          socket.current.send(JSON.stringify(mes))
        setMessage('')
    }

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000')

        // socket.current.onmessage = async () => {
        //     const pickedRoomID = storeMessengerSection.pickedRoomID
        //     const messagesInRoom = await socket.current.send(JSON.stringify({event: 'getMessagesInRoom', room: pickedRoomID}))
        //     dispatch(setMessagesInRoom(messagesInRoom))
        // }
    }, [])

    const messages = storeMessengerSection.messages.map(m => <Message id={m.id} authorID={m.authorID} firstName={m.firstName} lastName={m.lastName} message={m.message}/>)

    return (
        <ErrorBoundary>
            <div className="messenger-box">
                {messages}
            </div>
            <div className="input-group mt-5">
                <textarea className="form-control" rows="2" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <Button styles='btn-primary' label={<BsFillSendFill/>} func={sendMessage}/>
            </div>
        </ErrorBoundary>     
    )
}

export default Messenger