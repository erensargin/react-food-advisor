import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Checkbox from '../Checkbox';


//Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function Breakfast({ breadtype, handleOnChangeSelect, checkFood, isChecked, handleOnChangeCheckbox }) {
    const items = ['Cheese', 'Tomato', 'Chicken', 'Turkey', 'Pepperoni']

    return (
        <div>
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
                <Button variant='contained' className='button' onClick={checkFood}>
                    <Link className='button' to={'/recipies'}>Find Food</Link>
                </Button>
            </div>
        </div>
    )
}
