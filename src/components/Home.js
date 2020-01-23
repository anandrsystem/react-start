import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="content">
      Hello anand !! You are in {process.env.NODE_ENV} environment
        <br /><br /><br />
      Want to add blog !! <Link to="/blog">Click Here</Link>
    </div>
  )
}

export default Home;
