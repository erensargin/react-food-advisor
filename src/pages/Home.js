import React from 'react'
import './home.css'
import { useState } from 'react';

export default function Home() {
    const [breakfast, setBreakfast] = useState(false);
    const [meals, setMeals] = useState(false);

    return (
        <div className='select'>
            <div className='select-ing-breakfast'>
                <button onClick={() => setBreakfast(!breakfast)}>Breakfast</button>
                {breakfast ? <div>Chedar</div> : null}
            </div>
            <div className="select-ing-meals">
                <button onClick={() => setMeals(!meals)}>Meals</button>
                {meals ? <div>Meat</div> : null}
            </div>
        </div>
    )
}
