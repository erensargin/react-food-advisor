import React, { useEffect, useState } from 'react'
import { useStateValue } from "../StateProvider";
import Recipies from "../components/Recipies"
import "./recipiespage.css"

export default function RecipiesPage(total) {
    // eslint-disable-next-line no-unused-vars
    const [{ filtered, all }, dispatch] = useStateValue();

    return (
        < div className='recipies' >
            {filtered.length > 0 ?
                filtered.map((food) => {
                    return <Recipies id={food._id} name={food.name} ingredients={food.ingredients} prep={food.prep} imgurl={food.imgurl} />
                }) :
                all.map((food) => {
                    return <Recipies id={food._id} name={food.name} ingredients={food.ingredients} prep={food.prep} imgurl={food.imgurl} />
                })
            }
        </div >
    )
}
