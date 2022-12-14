import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
//Footer
import Footer from './Footer';

const ReactRouterSetup = () => {
  return <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/people">
      <People/>
    </Route>
    <Route  path='/person/:id' children={<Person/>}></Route>
    <Route path="*">
      <Error/>
    </Route>
    </Switch>
    <Footer/>
  </Router>;
};

export default ReactRouterSetup;
