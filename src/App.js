import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import LogIn from './components/auth/LogIn'
import SignIn from './components/auth/SignIn'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signin" component={SignIn}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
