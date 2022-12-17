import React from 'react';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import GameCard from '../../GameCard/GameCard';
import Header from '../../Header/Header';
import './LandingPage.css';
import { FETCH_ALL_GAMES_API } from '../../../Constants/Apis';

function LandingPage(props) {
  const { fetchedData: { data }, callRefetch } = useAxios(FETCH_ALL_GAMES_API);

  const renderAllGames = () => {
    return data && data?.map((items) => {
      return (
        <GameCard
          image={items.image}
          name={items.name}
        />
      );
    });
  };
  return (

    <div className="container">
      <Header />
      <div className="p-10 h-full flex flex-col">
        <h1 className="mb-5">Popular Games</h1>
        <div className="gap-10 grid justify-items-center  grid-cols-3  sm:grid-cols-4  h-96 ">
          {renderAllGames()}
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {

};

export default LandingPage;
