import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import './App.css';
import SingUpForm from "./pages/SingUpForm"
import SingInForm from "./pages/SingInForm"

function App() {
  return (
    <Router>
    <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/sing-in" activeClassName="PageSwitcher__Item PageSwitcher__Item--Active" className="PageSwitcher__Item">Sing In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item PageSwitcher__Item--Active" className="PageSwitcher__Item">Sing Up</NavLink>
          </div>

          <div className="FormTitle">
            <NavLink to="/sing-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sing In</NavLink> or <NavLink exact to="/" 
           activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Sing Up</NavLink>
          </div>
          <Route exact path="/" component={SingUpForm}>
         </Route>
    <Route path="/sing-in" component={SingInForm}>
    </Route>
    </div>
    </div>
    </Router>
  );
}

export default App;
