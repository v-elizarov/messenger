import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Message from '.'

const props = {
    id: 1, 
    authorID: 3,
    firstName: 'Elsa',
    lastName: 'Snow',
    message: 'How to test a react component?'
}

const WithReduxStore = ({ children }) => {
    render(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

describe('Message component',  () => {
    test('Message renders', () => {
        render(
            <WithReduxStore>
                <Message
                    id={props.id} 
                    authorID={props.authorID} 
                    firstName={props.firstName} 
                    lastName={props.lastName} 
                    message={props.message}/>
            </WithReduxStore>
        )

        expect(props.id).toBe(1)  
        expect(props.authorID).toBe(3)
        expect(screen.getByRole('author', { value: `/${props.firstName}/i` })).toBeInTheDocument()
        expect(screen.getByRole('author', { value: `/${props.lastName}/i` })).toBeInTheDocument()
        expect(screen.getByText(props.message)).toBeInTheDocument()
    })
})