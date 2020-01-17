import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Footer from './shared/Footer';
import Header from './shared/Header';

const routes = (
  <Router>
    <Route exact path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
  </Router>
);

const App = () => (
  <div className="container">
    <Header></Header>
    {routes}
    <Footer></Footer>
  </div>
);

export default App;
