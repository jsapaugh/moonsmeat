
import React from 'react';
import { Link } from 'react-router-dom'



const Home = ({ props }) => {
  return (
    <div>
      <Link to="/home" />
      <h1>Welcome to Moon's Meat</h1>
      <img alt="Moon Man" src="./MoonMan.jpg" style={{width: 400}}/>
    </div>
  )
}

export default Home;
