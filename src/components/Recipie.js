import React from 'react'
import { useParams } from "react-router-dom";
import { getData } from '../data/recipies';

export default function Recipie() {
    let params = useParams();
    let { imgurl, name, ingredients, prep } = getData(parseInt(params.recipiesid, 10));

    return (<div className='container'>
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
        </div>

    </div>
    )
}
