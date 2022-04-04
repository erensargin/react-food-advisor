import React, { useState } from 'react'
import './home.css'
import Checkbox from '../components/Checkbox';

export default function Home() {
    const [selections, setSelections] = useState([]);
    const [breadtype, setBreadType] = useState('White')

    const items = ['Cheese', 'Toma', '3']

    const handleOnChangeCheckbox = (e) => {
        let sel = selections
        let find = sel.indexOf(e.target.name)
        if (find > -1) {
            sel.splice(find, 1)
        }
        else {
            sel.push(e.target.name)
        }
        setSelections(sel)
        console.log(selections)
    }

    const isChecked = (item) => {
        selections.includes(item)
    }

    const handleOnChangeSelect = (e) => {
        setBreadType(e.target.value)
    }

    return (
        <div className='home'>
            <div className="breakfast">
                <select name="bread" id="bread" onChange={handleOnChangeSelect}>
                    <option value="white">White</option>
                    <option value="wheat">Wheat</option>
                    <option value="grain">Grain</option>
                </select>
                <div className="checkbox-container">
                    {items.map((item) => {
                        return <div>
                            <Checkbox item={item} checked={isChecked(item)} handleOnChange={handleOnChangeCheckbox}></Checkbox>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
