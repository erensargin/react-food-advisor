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
                <img className='sandwich-image' src="https://media.istockphoto.com/photos/turkey-sandwich-with-tomato-and-lettuce-picture-id1256670482?k=20&m=1256670482&s=612x612&w=0&h=WF0PjDr4iFdVI6IjKQjvvJipZrLYWIwHiRRDlbEwsQs=" alt="sandwich image" />
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
