import React from 'react'
import "./recipies.css"

export default function Recipies({ name, ingredients, prep, imgurl }) {
    return (
        <div className='container'>
            <div className="left">
                <img className='img-left' src={imgurl} alt="recipimage" />
            </div>
            <div className="right">
                <h3>Name: {name}</h3>
                <div className="right-content">
                    <ul className='right-ul'>
                        {ingredients.map((ing) => {
                            return <li className='right-li'>
                                {ing}
                            </li>
                        })}
                    </ul>
                    <p className='right-prep'>{prep}</p>
                </div>
            </div>
        </div>
    )
}
