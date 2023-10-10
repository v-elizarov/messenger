const initialState = {
    user: {
        isUserLogged: false,
        userID: 1,
        firstName: 'Vladislav',
        lastName: 'Elizarov'
    },
    messenger: {
        pickedRoomID: 1,
        messages: [
            {id: 1, authorID: 1, firstName: 'Vladislav', lastName: 'Elizarov', message: 'Hell Done!'}, 
            {id: 2, authorID: 2, firstName: 'Jon', lastName: 'Doe', message: 'Hey'},
            {id: 3, authorID: 1, firstName: 'Vladislav', lastName: 'Elizarov', message: 'Whoooooooa!'},
            {id: 4, authorID: 2, firstName: 'Jon', lastName: 'Doe', message: 'There\s a sample'},
            {id: 5, authorID: 3, firstName: 'Elsa', lastName: 'Snow', message: 'hi!'},
        ]
    }
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isUserLogged: true
                }
            }
        case 'CREATE_CONNECTION':
            return {
                ...state,
                user: {
                    ...state.user,
                    socket: new WebSocket('ws://localhost:5000')
                }
            }
        case 'SET_MESSAGES_IN_ROOM':
            return {
                ...state,
                messenger: {
                    ...state.messenger,
                    messages: action.payload
                }
            }
        default:
            return state
    }
}

export default reducer