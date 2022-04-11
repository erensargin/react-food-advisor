import React from 'react'
import { useStateValue } from "../StateProvider";
import Recipies from "../components/Recipies"
import "./recipiespage.css"

export default function RecipiesPage() {
    const [{ filtered }, dispatch] = useStateValue();
    console.log(filtered)
    return (
        <div className='recipies'>{filtered.map((food) => {
            return <Recipies name={food.name} ingredients={food.ingredients} prep={food.prep} imgurl={food.imgurl} />
        })}</div>
    )
}
