import React from 'react'
import { Link } from "react-router-dom";

const marg = -18

export default function Header() {
    return (
        <div style={{ marginBottom: marg + 'px', textAlign: 'left' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'./'}>Home</Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'./recipies'}>Recipies</Link>
        </div>
    )
}
