import React, { useState } from 'react'
import './home.css'
import Checkbox from '../components/Checkbox';

export default function Home() {
    const [selections, setSelections] = useState(['']);

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

    const isChecked = (item) => {
        selections.includes(item)
    }

    return (
        <div className='select'>
            {items.map((item) => {
                return <div>
                    <Checkbox item={item} checked={isChecked(item)} handleOnChange={handleOnChange}></Checkbox>
                </div>
            })}
            {/* <p>{counter}</p> */}
        </div>
    )
}
