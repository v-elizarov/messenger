import React, {useEffect, useRef, useState} from "react";
// import axios from "axios";
import './app.css'
import LoginPage from "../../pages/login-page";
import RegistrationPage from "../../pages/registration-page";
import ChatPage from "../../pages/chat-page";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorBoundary from "../error-boundary";

const App = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [username, setUsername] = useState('')

    function connect() {
      socket.current = new WebSocket('ws://localhost:5000')

      socket.current.onopen = () => {
        setConnected(true)
        // const message = {
        //   event: 'connection',
        //   username,
        //   id: Date.now()
        // }
        // socket.current.send(JSON.stringify(message))
      }
      socket.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        setMessages(prev => [...prev, message])
      }
      socket.current.onclose = () => {
        
      }
      socket.current.onerror = () => {
        
      }
    }

    const sendMessage = async () => {
      const message = {
        username,
        message: value,
        id: Date.now(),
        event: 'message'
      }
      socket.current.send(JSON.stringify(message))
      setValue('')
    }

    return (
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<ChatPage/>} exact/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="registration" element={<RegistrationPage/>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    )

    if (!connected) {
      return (
        <ChatPage/>
      )
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MessageMe</a>
        </div>
      </nav>
<div class="container">
<div class="page-header mt-5 mb-3">
        <h1>Messenger</h1>
    </div>
  <div className="row">
    <div className="col-3">
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
      <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
    </div>
    </div>
    <div className="col">
    <div class="card border-secondary mb-3 messages">
        <div class="card-body">
          <p class="card-text"><span class="text-primary">Jon Doe:</span> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="card border-info mb-3 messages user-message">
        <div class="card-body">
          <p class="card-text"><span class="text-info">Me:</span> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div className="messages">
                    {messages.map(mess =>
                        <div className="message" key={mess.id}>
                            {mess.message}
                        </div>
                    )}
                </div>
    <div class="input-group mt-5">
        <textarea className="form-control" rows="2" value={value} onChange={e => setValue(e.target.value)}></textarea>
        <button className="btn btn-primary" type="button" onClick={sendMessage}>Button</button>
    </div>
    </div>
  </div>


    
</div>
</>
    )
}

export default App