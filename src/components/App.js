import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './shared/Footer';
import Header from './shared/Header';

const routes = (
  <Router>
    <Route exact path="/">
      {/* <pre> */}
      <div>Hello world !!</div>
      {/* </pre> */}
    </Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
  </Router>
);

const App = () => (
  <div className="abc">
    <Header></Header>
    {routes}
    <Footer></Footer>
  </div>
);

export default App;
