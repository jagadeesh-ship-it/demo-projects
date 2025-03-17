import React from "react";

function Input({ title, id, placeholder, onChange, value, error, isDisable }) {
    return (
        <div className="row" style={{ marginBottom: "5px" }}>
            <label className="col-6" htmlFor={id}>{title}</label>
            <input
                className="col-5"
                style={error ? { border: '1px solid red' } : { border: '1px solid black' }}
                id={id}
                //type={id.includes("password") ? "password" : "text"}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={isDisable}
            />
        </div>
    );
}

export default Input;