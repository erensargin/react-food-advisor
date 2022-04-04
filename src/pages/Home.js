import React, { useEffect, useState } from 'react'
import './home.css'
import Checkbox from '../components/Checkbox';

export default function Home() {
    const [selections, setSelections] = useState([]);
    const [counter, setCounter] = useState(0);
    const [checked, setChecked] = useState(false);

    const items = ['1', '2', '3']

    const handleOnChange = (e) => {
        setSelections(e.target.name)
        console.log(selections)
    }

    return (
        <div className='select'>
            {items.map((item) => {
                return <div>
                    <Checkbox item={item} checked={checked} handleOnChange={handleOnChange}></Checkbox>
                </div>
            })}
            {/* <p>{counter}</p> */}
        </div>
    )
}
