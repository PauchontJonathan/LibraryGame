import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Image, Button, Modal, Icon, Header,
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const GameInfo = ({ id }) => {

  const [backgroundImage, setBackgroundImage] = useState('');
  const [publishers, setPublishers] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://rawg-video-games-database.p.rapidapi.com/games/${id}`, {
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': '8446f8f026msh53f04d07db0d2ebp127122jsn88f17b33f2f7',
        useQueryString: true,
      },
    })
      .then((res) => {
        console.log(res);
        const {
          platforms, publishers, background_image, name_original, description_raw,
        } = res.data;
        setName(name_original);
        setBackgroundImage(background_image);
        setDescription(description_raw);
        setPublishers(publishers);
        setPlatforms(platforms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button inverted color="yellow">More Informations</Button>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="large" src={backgroundImage} />
        <Modal.Description>
          <p>
            {description}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Header>Platforms: </Modal.Header>
      <Modal.Content>
        {platforms.map((platform) => (
          <Button key={platform.platform.id}>
            {platform.platform.name}
          </Button>
        ))}
      </Modal.Content>
      <Modal.Header>Publishers: </Modal.Header>
      <Modal.Content>
        {publishers.map((publisher) => (
          <Button key={publisher.id}>
            {publisher.name}
          </Button>
        ))}
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={() => setOpen(false)}>
        Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default GameInfo;
