import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

const NavBar = () => {

  const [ activeItem, setActiveItem ] = useState('Accueil'); 

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Segment inverted>
    <Menu inverted pointing secondary>
      <NavLink to="/">
        <Menu.Item
          name='Accueil'
          active={activeItem === 'Accueil'}
          onClick={handleItemClick}
        />
      </NavLink>
      <NavLink to="/platforms">
        <Menu.Item
          name='plateformes'
          active={activeItem === 'plateformes'}
          onClick={handleItemClick}
        />
      </NavLink>
      <NavLink to="/tag">
        <Menu.Item
          name='genre'
          active={activeItem === 'genre'}
          onClick={handleItemClick}
        />
      </NavLink>
    </Menu>
  </Segment>
  )
}

export default NavBar;