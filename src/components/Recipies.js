import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./recipies.css"

export default function Recipies({ id, name, ingredients, prep, imgurl }) {
    return (
        <div className='container'>
            <div className="left">
                <img className='img-left' src={imgurl} alt="recipimage" />
            </div>
            <div className="right">
                <h3>{name}</h3>
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
                <Link to={`/recipies/${id}`} >For more</Link>
            </div>

        </div>
    )
}
