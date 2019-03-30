import React from 'react'
import { Link } from 'react-router-dom'

const SignOutLinks = () => {

    return (
        <ul id="nav-mobile" className="right">
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
        </ul>
    )
}

export default SignOutLinks;