import React from 'react'
import "./recipies.css"

export default function Recipies({ name, ingredients, prep }) {
    return (
        <div className='container'>
            <div className="left">
                <img src="" alt="recipimage" />
            </div>
            <div className="right">
                <h3>Name: {name}</h3>
                <ul>
                    {ingredients.map((ing) => {
                        return <li>
                            {ing}
                        </li>
                    })}
                </ul>
                <p>{prep}</p>
            </div>
        </div>
    )
}
