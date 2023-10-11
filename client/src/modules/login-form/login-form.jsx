import React, { useState } from "react";
import Button from "../../ui/button";
import ErrorBoundary from "../../components/error-boundary";
import FormFloatingInput from "../../components/form-floating-input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/actions";

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const store = useSelector(store => store.user)
    const dispatch = useDispatch()

    function connect() {
        
        dispatch(userLogin())
        console.log(store)
        navigate('/')
    }

    function switchToRegistrationPage() {
        navigate('/registration')
    }

    return (
        <ErrorBoundary>
            <FormFloatingInput
                type='login'
                name='authLoginInput'
                label='Username'
                value={username}
                onChangeFunc={e => setUsername(e.target.value)}/>
            <FormFloatingInput
                type='password'
                name='authPasswordInput'
                label='Password'
                value={password}
                onChangeFunc={e => setPassword(e.target.value)}/>
            <Button styles='btn-secondary me-2' label='Registration' func={switchToRegistrationPage}/>
            <Button styles='btn-primary' label='Login' func={connect}/>
        </ErrorBoundary>
    )
}

export default LoginForm