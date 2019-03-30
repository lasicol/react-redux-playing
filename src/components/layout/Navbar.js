import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

const Navbar = ({ auth }) => {
    const links = auth ? <SignInLinks/> : <SignOutLinks/>; 
    return (
        <nav>
        <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">Projects</Link>
            {links}
        </div>
      </nav>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps)(Navbar);