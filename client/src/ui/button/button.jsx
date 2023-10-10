import React from "react";

const Button = ({styles, label, func}) => {

    const buttonStyles = `btn ${styles}`
    
    return <button type="button" className={buttonStyles} onClick={func}>{label}</button>
}

export default Button