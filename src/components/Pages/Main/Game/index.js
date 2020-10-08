import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import './game.scss';

const Game = ({ id, name, background_image }) => (
    <Card>
      <Image src={background_image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
      </Card.Content>
    </Card>
)

export default Game;