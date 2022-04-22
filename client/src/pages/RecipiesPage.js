import React, { useEffect, useState } from 'react'
import { useStateValue } from "../StateProvider";
import Recipies from "../components/Recipies"
import "./recipiespage.css"

export default function RecipiesPage() {
    // eslint-disable-next-line no-unused-vars
    const [{ filtered }, dispatch] = useStateValue();
    const [all, setAll] = useState([]);
    console.log(filtered)

    useEffect(() => {
        async function getRecipies() {
            const response = await fetch(`http://localhost:5005/records/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const recipies = await response.json();
            setAll(recipies)
        }

        getRecipies();

        return;
    }, []);

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
