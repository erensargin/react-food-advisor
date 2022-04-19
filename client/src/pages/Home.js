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
                <div className="chooseContainer">
                    <div onClick={setBreakfast} className="chooseBreakfast">
                        <h4>Breakfast</h4>
                        <img src="https://img.taste.com.au/cA3aUeON/taste/2021/11/thermomix-better-for-you-banana-pancakes-174975-2.jpg" alt="breakfast" />
                    </div>
                    <div className="chooseLunch">
                        <h4>Lunch</h4>
                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/04/meal-prep.jpg?quality=82&strip=all" alt="lunch" />
                    </div>
                    <div className="chooseDinner">
                        <h4>Dinner</h4>
                        <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_05/2736521/190131-stock-taco-bar-food-ew-1220p-2736521.jpg" alt="dinner" />
                    </div>
                </div>
            }
            <Outlet />
        </div>
    )
}
