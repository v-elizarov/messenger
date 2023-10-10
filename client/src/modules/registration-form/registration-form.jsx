import React, { useState } from "react";
import ErrorBoundary from "../../components/error-boundary";
import FormFloatingInput from "../../components/form-floating-input";
import Button from "../../ui/button";

const RegistrationForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    function apply() {

    }

    return (
        <ErrorBoundary>
            <FormFloatingInput
                type='text'
                name='regFirstName'
                label='First name'
                value={firstName}
                onChangeFunc={e => setFirstName(e.target.value)}/>
            <FormFloatingInput
                type='text'
                name='regLastName'
                label='Last name'
                value={lastName}
                onChangeFunc={e => setLastName(e.target.value)}/>
            <FormFloatingInput
                type='text'
                name='regUsername'
                label='Username'
                value={username}
                onChangeFunc={e => setUsername(e.target.value)}/>
            <FormFloatingInput
                type='password'
                name='regPassword'
                label='Enter password'
                value={password}
                onChangeFunc={e => setPassword(e.target.value)}/>
            <FormFloatingInput
                type='password'
                name='regPasswordAgain'
                label='Enter password again'
                value={passwordAgain}
                onChangeFunc={e => setPasswordAgain(e.target.value)}/>
            <Button styles='btn-primary' label='Apply' func={apply}/>
        </ErrorBoundary>
    )
}

export default RegistrationForm