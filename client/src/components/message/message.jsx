import React from "react";
import './message.css'
import { useSelector } from "react-redux";

const Message = ({id, authorID, firstName, lastName, message}) => {

    const currentUserID = useSelector(state => state.user.userID)

    let styles = 'card mb-3 messages '
    let author = ''

    if (authorID === currentUserID) {
        styles += 'border-primary user-message'
        author = 'Me'
    } else {
        styles += 'border-secondary'
        author = `${firstName} ${lastName}`
    }

    return (
        <div className={`${styles}`} key={id}>
            <div className="card-body">
                <p className="card-text"><span className="text-primary">{`${author}`}:</span> {`${message}`}</p>
            </div>
        </div>
    )
}

export default Message