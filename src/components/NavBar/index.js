import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

const NavBar = () => {

  const [ activeItem, setActiveItem ] = useState('Library Game'); 

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Segment inverted>
    <Menu inverted pointing secondary>
      <NavLink to="/">
        <Menu.Item
          name='Library Game'
          active={activeItem === 'Library Game'}
          onClick={handleItemClick}
        />
      </NavLink>
      <NavLink to="/platforms">
        <Menu.Item
          name='platforms'
          active={activeItem === 'platforms'}
          onClick={handleItemClick}
        />
      </NavLink>
      <NavLink to="/genres">
        <Menu.Item
          name='genres'
          active={activeItem === 'genres'}
          onClick={handleItemClick}
        />
      </NavLink>
    </Menu>
  </Segment>
  )
}

export default NavBar;