import React, { useState } from 'react'
import './home.css'
import { data } from '../data/recipies';
import { Outlet, Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";


import Breakfast from '../components/home/Breakfast';


export default function Home() {
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();
    const [selections, setSelections] = useState([]);
    const [breadtype, setBreadType] = useState('white')
    const [isBreakfast, setIsBreakfast] = useState(false)


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

    const setBreakfast = () => {
        setIsBreakfast(!isBreakfast)
    }

    return (
        <div className='home'>
            {isBreakfast ?
                <Breakfast breadtype={breadtype} handleOnChangeSelect={handleOnChangeSelect} checkFood={checkFood} isChecked={isChecked} handleOnChangeCheckbox={handleOnChangeCheckbox} />
                :
                <div onClick={setBreakfast}>Choose Breakfast</div>
            }
            <div className="chooseContainer">
                <div onClick={setBreakfast} className="chooseBreakfast">Breakfast</div>
                <div className="chooseLunch">Lunch</div>
                <div className="chooseDinner">Dinner</div>
            </div>
            <Outlet />
        </div>
    )
}
