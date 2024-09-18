import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link> <br /></li>
                <li><Link to="/dashboard">Dasboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </>
    )
}

export default Navbar