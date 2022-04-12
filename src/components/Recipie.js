import React from 'react'
import { useParams } from "react-router-dom";
import { getData } from '../data/recipies';
import "./recipie.css"

export default function Recipie() {
    let params = useParams();
    let { imgurl, name, ingredients, prep } = getData(parseInt(params.recipiesid, 10));

    return (<div className='container2'>
        <div className="left">
            <img className='img-left' src={imgurl} alt="recipimage" />
        </div>
        <div className="">
            <h3>{name}</h3>
            <div className="right-content">
                <ul className='right-ul2'>
                    Ingredients
                    {ingredients.map((ing) => {
                        return <li className='right-li2'>
                            {ing}
                        </li>
                    })}
                </ul>
                <p className='right-prep2'>{prep}</p>
            </div>
        </div>

    </div>
    )
}
