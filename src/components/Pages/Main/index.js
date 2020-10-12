import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Pagination } from 'semantic-ui-react';
import Game from 'src/components/Pages/Main/Game';

import './main.scss';

const Main = () => {

  const [ gameList, setGameList ] = useState(null);
  const [ isGameCharged , setIsGameCharged ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    axios.get(`https://rawg-video-games-database.p.rapidapi.com/games?page=${currentPage}`, {
      'headers': {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': '8446f8f026msh53f04d07db0d2ebp127122jsn88f17b33f2f7',
        'useQueryString': true
      }
    })
    .then((res) => {
      const { results } = res.data;
      console.log(results);
      setGameList(results);
      setIsGameCharged(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [currentPage]);

const handlePage = (e) => {
  const { type, textContent } = e.target;
  if (type === 'prevItem' && currentPage > 1) {
    setCurrentPage(currentPage-1);
  } else if (type === 'nextItem') {
    setCurrentPage(currentPage+1);
  } else if (type !== 'prevItem' && type !== 'nextItem') {
    const parsedValue = parseInt(textContent);
    setCurrentPage(parsedValue);
  }
};

  return (
    <div className="main">
    <h1 className="main-title">Library Game</h1>
    <p>Library Games is a web application where you can find different sort of video games, platforms and genres informations. Feel free to test it ! Here some games, check it out !</p>
    { isGameCharged && (
      <>
      <Card.Group className="main-games">
      {gameList.map((game) => (
        <Game  key={game.id} {...game} />
      ))}
      </Card.Group>
      <Pagination
      onClick={handlePage}
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={10}
      />
      </>
    )}
  </div>
  )
}


export default Main;