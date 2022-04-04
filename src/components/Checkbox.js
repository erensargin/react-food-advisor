import React from 'react'

export default function Checkbox({ item, checked, handleOnChange }) {

    return (
        <div>Checkbox
            <input name={item} type="checkbox" checked={checked} onChange={handleOnChange} />
            <label htmlFor="">{item}</label>
        </div>
    )
}
