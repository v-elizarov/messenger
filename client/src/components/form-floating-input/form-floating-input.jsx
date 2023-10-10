import React from "react";
import Input from "../../ui/input";
import Label from "../../ui/label";

const FormFloatingInput = (props) => {
    return (
        <div className="form-floating mb-3">
                <Input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChangeFunc}/>
                <Label
                    forName={props.name}
                    label={props.label}/>
        </div>
    )
}

export default FormFloatingInput