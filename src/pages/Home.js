import React, { useEffect, useState } from 'react'
import './home.css'
import Checkbox from '../components/Checkbox';

export default function Home() {
    const [selections, setSelections] = useState(['']);
    const [counter, setCounter] = useState(0);
    const [checked, setChecked] = useState(false);

    const items = ['1', '2', '3']

    const handleOnChange = (e) => {
        let sel = selections
        let find = sel.indexOf(e.target.name)
        if (find > -1) {
            sel.splice(find, 1)
        }
        else {
            sel.push(e.target.name)
        }
        setSelections(sel)
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
