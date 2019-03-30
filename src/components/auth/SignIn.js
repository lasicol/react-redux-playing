import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div className="login container">
                <div className="row">
                    <form className="col s8" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field">
                                <input id="first_name" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field">
                                <input id="last_name" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                            <div className="input-field">
                                <input id="email" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                            <div className="input-field">
                                <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <button action="submit" className="btn">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default SignIn