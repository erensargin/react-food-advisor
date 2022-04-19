import React, { useEffect } from 'react'
import { useStateValue } from "../StateProvider";
import Recipies from "../components/Recipies"
import "./recipiespage.css"
import { data } from '../data/recipies';

export default function RecipiesPage() {
    const [{ filtered }, dispatch] = useStateValue();
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
            console.log(recipies);
        }

        getRecipies();

        return;
    }, []);

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
                    return <Recipies id={food.id} name={food.name} ingredients={food.ingredients} prep={food.prep} imgurl={food.imgurl} />
                }) :
                fillArray()
            }
        </div >
    )
}
