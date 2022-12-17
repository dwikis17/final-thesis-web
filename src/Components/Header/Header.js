import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Space } from 'antd';
import './Header.css';
import logo from '../../Assets/ezskin_home.png';
import { useAxios } from '../../Utils/CommonUtils/useAxios';
import { FETCH_ALL_GAMES_API } from '../../Constants/Apis';

const { Search } = Input;

function Header({ authenticated, handleSearchGames }) {
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState('');
  const params = {
    searchKeyword
  };
  const { fetchedData: { data }, callReFetch } = useAxios(FETCH_ALL_GAMES_API, params);

  const handleSearch = (value) => {
    setSearchKeyword(value);
    callReFetch();
  };
  return (
    <div className="header">
      <div className="header-container" onClick={() => history.push('/')}>
        <img src={logo} alt="header-logo" />
      </div>

      <div className="input">
        <Search
          placeholder="Search games"
          onSearch={(value) => handleSearch(value)}
          enterButton
          styl
        />
      </div>
      <div className="header-container">
        <button type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
