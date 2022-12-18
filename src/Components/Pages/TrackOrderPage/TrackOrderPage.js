import { Input } from 'antd';
import React from 'react';
import Header from '../../Header/Header';

function TrackOrderPage(props) {
  return (
    <div className="container justify-items-center grid">
      <Header />
      <h1 className=" text-4xl text-white mt-10">Track pesanan anda </h1>
      <div className="grid grid-row-2 w-full p-10 justify-items-center">
        <Input className="w-1/2" placeholder="Masukan transaksi ID disini" />
      </div>
      <div className="grid grid-row-2 w-1/2 border h-96 p-10 justify-items-center" />
    </div>
  );
}

TrackOrderPage.propTypes = {

};

export default TrackOrderPage;
