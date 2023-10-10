import React from "react";

const Label = ({forName, label}) => {
    if (forName === undefined) {
        return <label>{label}</label>
    }
    return <label htmlFor={forName}>{label}</label>
}

export default Label