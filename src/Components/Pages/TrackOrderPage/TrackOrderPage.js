import { Button, Input, Table } from 'antd';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { GET_TRANSACTION_BY_ORDER_ID, PAYMENT_REDIRECT } from '../../../Constants/Apis';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import Header from '../../Header/Header';

const { Search } = Input;
function TrackOrderPage(props) {
  const [searchedOrderId, setSearchedOrderId] = useState('');
  const { fetchedData: { data }, callReFetch } = useAxios(`${GET_TRANSACTION_BY_ORDER_ID}/${searchedOrderId}`);

  const renderPayButton = (token) => {
    return (
      <Button type="submit" className="text-white bg-red-700 w-full" onClick={() => window.open(`${PAYMENT_REDIRECT}/${token}`)}>
        Bayar
      </Button>
    );
  };
  const renderItems = (items, record) => {
    return items === 'Pending' ? renderPayButton(record?.transactionToken) : null;
  };

  const handleSearch = (value) => {
    setSearchedOrderId(value);
    callReFetch();
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Game',
      dataIndex: 'game',
      key: 'game',
    },
    {
      title: 'In Game Name',
      dataIndex: 'inGameName',
      key: 'inGameName',
    },
    {
      title: 'Tag Line',
      dataIndex: 'tagLine',
      key: 'tagLine',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
    },
    {
      title: 'Action',
      dataIndex: 'paymentStatus',
      render: (items, record) => renderItems(items, record)
    }
  ];
  return (
    <div className="container justify-items-center grid">
      <Header />
      <h1 className=" text-4xl text-white mt-10">Track pesanan anda </h1>
      <div className="grid  w-full p-10 justify-items-center">
        <Search className="sm:w-3/4 w-full" placeholder="Masukan transaksi ID disini" enterButton onSearch={(event) => handleSearch(event)} />
      </div>
      <div className="grid w-full borde gap-0 justify-items-center">
        {
          data
          && <Table columns={columns} dataSource={[data]} pagination={false} />
        }
        {
          isEmpty(data) && !isEmpty(searchedOrderId) && <h1 className="text-white">Order Id Tidak ditemukan !</h1>
        }
      </div>
    </div>
  );
}

TrackOrderPage.propTypes = {

};

export default TrackOrderPage;
