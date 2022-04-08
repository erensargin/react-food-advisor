import React, { useReducer, useState } from 'react'
import './home.css'
import Checkbox from '../components/Checkbox';
import { data } from '../data/recipies';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

//Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Home() {
    const [{ }, dispatch] = useStateValue();
    const [selections, setSelections] = useState([]);
    const [breadtype, setBreadType] = useState('white')

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

    const checkFood = (e) => {
        e.preventDefault();
        let foods = []
        selections.map((sel) => {
            data.map((data) => {
                let find = data.ingredients.includes(sel)
                if (find) { foods.push(data) }
            })

        })
        console.log(foods)
        dispatch({
            type: "SET_FILTERED",
            filtered: foods,
        });
    }

    return (
        <div className='home'>
            <div className="breakfast">
                <h3>Choose Your Sandwich Type</h3>
                <img className='sandwich-image' src="https://media.istockphoto.com/photos/turkey-sandwich-with-tomato-and-lettuce-picture-id1256670482?k=20&m=1256670482&s=612x612&w=0&h=WF0PjDr4iFdVI6IjKQjvvJipZrLYWIwHiRRDlbEwsQs=" alt="sandwich" />

                <FormControl id="bread" variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Bread</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={breadtype}
                        onChange={handleOnChangeSelect}
                    >
                        <MenuItem value={'white'}>White</MenuItem>
                        <MenuItem value={'wheat'}>Wheat</MenuItem>
                        <MenuItem value={'grain'}>Grain</MenuItem>
                    </Select>
                </FormControl>

                <div className="checkbox-container">
                    {items.map((item) => {
                        return <div>
                            <Checkbox item={item} checked={isChecked(item)} handleOnChange={handleOnChangeCheckbox}></Checkbox>
                        </div>
                    })}
                </div>
                <Link to={'./recipies'}>Find</Link>
                <button onClick={checkFood} >Find Food</button>
            </div>

        </div>
    )
}
