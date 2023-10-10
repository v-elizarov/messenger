import React from "react";

const Input = ({type, name, value, onChangeFunc}) => {
    return (
        <input type={type} 
            className="form-control" 
            id={name} 
            defaultValue={value} 
            onChange={onChangeFunc}>
        </input>
    )
}

export default Input