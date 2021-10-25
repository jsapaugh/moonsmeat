import React from 'react';
import { Link } from 'react-router-dom'



const AboutUs = ({ props, open, setOpen }) => {
  return (
    <div>
      Hello there!
        <Link to="/about-us" />
    </div>
  )
}

export default AboutUs;
