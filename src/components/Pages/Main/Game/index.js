import React from 'react';
import PropTypes from 'prop-types';
import GameInfo from 'src/components/Pages/Main/Game/GameInfo';
import { Card, Image, Button, Modal, Icon } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import './game.scss';

const Game = ({ id, name, background_image, released, platforms }) => {

  return (
    <Card>
    <Image src={background_image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>release date : {released}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <GameInfo id={id}/>
    </Card.Content>
    <Card.Content extra>
      {platforms.map((platform) => (
         <Button key={platform.platform.id} className="platform">{platform.platform.name}</Button>
      ))}
    </Card.Content>
  </Card>
  )
}

export default Game;

Game.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  background_image: PropTypes.string,
  released: PropTypes.string,
  platforms: PropTypes.array,
};