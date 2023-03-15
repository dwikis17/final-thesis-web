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
    <div className="grid grid-cols-3 w-full m-auto  header border border-white">
      <div className="w-full justify-items-center grid col-span-1 cursor-pointer " onClick={() => history.push('/')}>
        <h1 className="text-4xl text-white">TOPUPKUY</h1>
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
      {
        !isAtLandingPage && (
          <div className="w-full justify-items-center p-3 grid " />
        )
      }
      <div className="sm:w-full text-white  justify-items-center flex  flex-cols-2  justify-center gap-3">
        <button type="submit" className=" p-3 rounded-xl bg-orange-600" onClick={() => history.push('/track')}>
          Track Order
        </button>
        <button type="submit" className=" p-3 rounded-xl bg-green-600" onClick={() => history.push('/forum')}>
          Forum
        </button>
      </div>

    </div>
  );
}

Header.propTypes = {

};

export default Header;
