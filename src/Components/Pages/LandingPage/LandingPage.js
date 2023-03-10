import React from 'react';
import { Spin, Carousel } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import GameCard from '../../GameCard/GameCard';
import Header from '../../Header/Header';
import './LandingPage.css';
import { BANNER_API, BANNER_IMAGE, FETCH_ALL_GAMES_API } from '../../../Constants/Apis';
import { normalizeGameName } from '../../../Utils/CommonUtils/CommonUtils';

function LandingPage(props) {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = React.useState('');

  const params = {
    searchKeyword
  };

  const { fetchedData: { data }, callReFetch, loading } = useAxios(FETCH_ALL_GAMES_API, params);
  const { fetchedData: { data: imageData } } = useAxios(BANNER_API);

  const handleSearch = (value) => {
    setSearchKeyword(value);
    callReFetch();
  };

  const handleOnClickGames = (game) => {
    const name = normalizeGameName(game);
    history.push(`/topup/${name}`);
  };

  const renderAllGames = () => {
    return data && data?.map((items) => {
      return (
        <GameCard
          image={items.image}
          name={items.name}
          handleOnClickGames={handleOnClickGames}
        />
      );
    });
  };

  return (
    <Spin spinning={loading}>
      <div className="container">
        <Header handleSearch={handleSearch} isAtLandingPage />
        <div className=" w-full h-96 mt-8">
          <Carousel autoplay className="border h-96">
            {
            imageData?.imageUrls.map((items) => (

              <div className="border border-black h-96">
                <img src={`${BANNER_IMAGE}${items}`} alt="" className="w-full h-full" />
              </div>
            ))
           }
          </Carousel>
        </div>
        <div className="p-10 h-full flex flex-col">
          <h1 className="mb-10 text-white text-2xl">Popular Games</h1>
          <div className="gap-10 grid justify-items-center  grid-cols-3  sm:grid-cols-4  h-96 ">
            {renderAllGames()}
          </div>
        </div>
      </div>
    </Spin>
  );
}

LandingPage.propTypes = {

};

export default LandingPage;
