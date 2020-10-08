import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import './game.scss';

const Game = ({ name, background_image, released, platforms }) => (
    <Card>
      <Image src={background_image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>release date : {released}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {platforms.map((platform) => (
           <Button key={platform.platform.id} className="platform">{platform.platform.name}</Button>
        ))}
      </Card.Content>
    </Card>
)

export default Game;