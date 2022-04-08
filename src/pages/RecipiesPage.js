import React from 'react'
import { useStateValue } from "../StateProvider";
import Recipies from "../components/Recipies"

export default function RecipiesPage() {
    const [{ filtered }, dispatch] = useStateValue();
    console.log(filtered)
    return (
        <div>{filtered.map((food) => {
            return <Recipies name={food.name} ingredients={food.ingredients} prep={food.prep} />
        })}</div>
    )
}
