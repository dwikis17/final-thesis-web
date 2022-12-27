import React from 'react';
import valorant from '../../Assets/valorant.png';
import { GameCardCss } from '../../Constants/CssConstant';

function GameCard({ name, image, handleOnClickGames }) {
  return (
    <div className="flex flex-col w-24 h-40 text-center ">
      <a href onClick={() => handleOnClickGames(name)}>
        <div
          className=" h-24 rounded-lg mb-2 shadow-x shadow-inner"
          style={GameCardCss(image)}
        />
      </a>
      <h1 className="text-white">{name}</h1>
    </div>
  );
}

GameCard.propTypes = {

};

export default GameCard;
