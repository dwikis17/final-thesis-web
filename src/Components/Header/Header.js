import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Space } from 'antd';
import './Header.css';
import logo from '../../Assets/ezskin_home.png';
import logo2 from '../../Assets/LOGO-FINAL-PNG.png';
import { useAxios } from '../../Utils/CommonUtils/useAxios';
import { FETCH_ALL_GAMES_API } from '../../Constants/Apis';
import { GameCardCss } from '../../Constants/CssConstant';

const { Search } = Input;

function Header({ handleSearch, isAtLandingPage = false }) {
  const history = useHistory();
  return (
    <div className="grid grid-cols-3 w-full m-auto  header">
      <div className="w-full justify-items-center grid col-span-1  " onClick={() => history.push('/')}>
        <img src={logo} alt="" />
      </div>
      { isAtLandingPage && (
      <div className="w-full justify-items-center p-3 grid ">
        <Search
          placeholder="Search games"
          onSearch={(value) => handleSearch(value)}
          enterButton
          styl
        />
      </div>
      )}
      <div className="sm:w-full text-white  justify-items-center grid ">
        <button type="submit" className=" p-3 rounded-xl bg-orange-600" onClick={() => history.push('/track')}>
          Track Order
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
