import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Checkbox from '../Checkbox';


//Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function Lunch({ handleOnChangeSelect, checkFood, isChecked, handleOnChangeCheckbox }) {
    const items = ['Meat', 'Potatoes', 'Chicken', 'Onion', 'Pepperoni']

    return (
        <div>
            <div className="breakfast">
                <h3>Choose Your Lunch Type</h3>
                <img className='sandwich-image' src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/1507827786-buddha-bowls-delish-1.jpg" alt="lunch" />

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
