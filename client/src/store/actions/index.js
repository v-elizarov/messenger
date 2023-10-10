const userLogin = () => {
    return {
        type: 'USER_LOGIN'
    }
}

const setMessagesInRoom = (messages) => {
    return {
        type: 'SET_MESSAGES_IN_ROOM',
        payload: messages
    }
}

const createConnection = () => {
    return {
        type: 'CREATE_CONNECTION'
    }
}

export {
    userLogin,
    createConnection,
    setMessagesInRoom
}