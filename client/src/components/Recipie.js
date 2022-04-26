import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./recipie.css"

export default function Recipie() {
    let params = useParams();
    let id = params.recipiesid
    const [imgurl, setImgurl] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState(['']);
    const [prep, setPrep] = useState("");

    useEffect(() => {
        async function getRecipies() {
            const response = await fetch(`http://localhost:5005/record/${id.toString()}`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const recipies = await response.json();
            setImgurl(recipies.imgurl);
            setName(recipies.name);
            setIngredients(recipies.ingredients);
            setPrep(recipies.prep);

        }

        getRecipies();

        return;
    }, []);

    return (<div className='container2'>
        <div className="left">
            <img className='img-left2' src={imgurl} alt="recipimage" />
        </div>
        <div className="">
            <h3>{name}</h3>
            <div className="right-content2">
                <ul className='right-ul2'>
                    <h4>Ingredients</h4>
                    {ingredients.map((ing) => {
                        return <li className='right-li2'>
                            {ing}
                        </li>
                    })}
                </ul>
                <p className='right-prep2'>{prep}</p>
            </div>
        </div>
        <div className="comments">

        </div>

    </div>
    )
}
