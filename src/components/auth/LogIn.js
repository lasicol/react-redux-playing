import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginAction } from '../../store/actions/authActions'

class LogIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="login container">
                <div className="row">
                    <div className="col s3"></div>
                    <form className="col s6" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field">
                                <input id="email" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                            <div className="input-field">
                                <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </form>
                    <div className="col s3"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return;
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => { dispatch(loginAction(username, password)) }
    }
} 

export default connect(null, mapDispatchToProps)(LogIn);