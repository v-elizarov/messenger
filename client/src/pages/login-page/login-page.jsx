import React, { useRef, useState } from "react"
import LoginForm from "../../modules/login-form"
import PageContainer from "../../modules/page-container"
import PageTitle from "../../components/page-title"
import NavBar from "../../components/nav-bar"
import ErrorBoundary from "../../components/error-boundary"

const LoginPage = () => {

    const socket = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [connection, isConnected] = useState(false)

    function connect () {
        socket.current = new WebSocket('ws://localhost:5000')
        console.log(username, password)
        socket.current.onopen = () => {
          isConnected(true)
          // const message = {
          //   event: 'connection',
          //   username,
          //   id: Date.now()
          // }
          // socket.current.send(JSON.stringify(message))
        }
        socket.current.onmessage = (event) => {
          const message = JSON.parse(event.data)
          // setMessages(prev => [...prev, message])
        }
        socket.current.onclose = () => {
          
        }
        socket.current.onerror = () => {
          
        }
    }

    return (
        <ErrorBoundary>
            <NavBar/>
            <PageContainer>
                <PageTitle value='Authorization'/>
                <LoginForm/>
            </PageContainer>
        </ErrorBoundary>
    )
}

export default LoginPage