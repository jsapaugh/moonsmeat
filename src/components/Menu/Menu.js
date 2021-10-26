import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
    <NavLink to="/moonsmeat">
        <span role="img" aria-label="home">&#127968;</span>
        Home
    </NavLink>
    <NavLink to="/about-us">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About Us
      </NavLink>
      <NavLink to="/meats">
          <span role="img" aria-label="meats">&#x1f969;</span>
          Meats
        </NavLink>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
