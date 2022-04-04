import React from 'react'
import "./checkbox.css"

export default function Checkbox({ item, checked, handleOnChange }) {

    return (
        <div className='checkbox'>
            <input name={item} type="checkbox" checked={checked} onChange={handleOnChange} />
            <label htmlFor="">{item}</label>
        </div>
    )
}
