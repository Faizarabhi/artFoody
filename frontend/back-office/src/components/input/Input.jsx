import React from 'react'

function Input({ key, label, type, placeholder }) {
    console.log('rr')
    return (
        <div className="formInput" key={key}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input