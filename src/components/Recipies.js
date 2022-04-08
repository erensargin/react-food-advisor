import React from 'react'

export default function Recipies({ name, ingredients, prep }) {
    return (
        <div>
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
    )
}
