import React from 'react'
import { useStateValue } from "../StateProvider";
import Recipies from "../components/Recipies"
import "./recipiespage.css"
import { data } from '../data/recipies';

export default function RecipiesPage() {
    const [{ filtered }, dispatch] = useStateValue();
    console.log(filtered)

    const fillArray = () => {
        dispatch({
            type: "SET_FILTERED",
            filtered: data,
        });
    }

    return (
        < div className='recipies' >
            {filtered.length > 0 ?
                filtered.map((food) => {
                    return <Recipies name={food.name} ingredients={food.ingredients} prep={food.prep} imgurl={food.imgurl} />
                }) :
                fillArray()
            }
        </div >
    )
}
