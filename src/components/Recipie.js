import React from 'react'
import { useParams } from "react-router-dom";

export default function Recipie() {
    let params = useParams();
    return <h2>Invoice: {params.recipiesid}</h2>;

}
