import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Checkbox from '../Checkbox';


//Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function Dinner({ handleOnChangeSelect, checkFood, isChecked, handleOnChangeCheckbox }) {
    const items = ['Meat', 'Potatoes', 'Chicken', 'Onion', 'Pepperoni']

    return (
        <div>
            <div className="breakfast">
                <h3>Choose Your Dinner Type</h3>
                <img className='sandwich-image' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1" alt="Dinner" />

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
