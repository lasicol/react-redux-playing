import React from 'react'
import { Link } from 'react-router-dom'

const SignInLinks = () => {

    return (
        <ul id="nav-mobile" className="right">
            <li><Link to="/newproject">New Project</Link></li>
            <li><Link to="/logout">Log Out</Link></li>
        </ul>
    )
}

export default SignInLinks;