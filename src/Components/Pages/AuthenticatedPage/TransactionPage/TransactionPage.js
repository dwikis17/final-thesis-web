import { Table } from 'antd';
import React from 'react';
import { FETCH_ALL_TRANSACTION_API } from '../../../../Constants/Apis';
import { useAxios } from '../../../../Utils/CommonUtils/useAxios';

function TransactionPage(props) {
  const { fetchedData: { data } } = useAxios(FETCH_ALL_TRANSACTION_API);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Game',
      dataIndex: 'game',
      key: 'game',
    },
    {
      title: 'Nominal',
      dataIndex: 'nominal',
      key: 'nominal',
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
  ];
  return (
    <div>
      {data && (
      <Table
        columns={columns}
        dataSource={data}
      />
      )}
    </div>
  );
}

TransactionPage.propTypes = {

};

export default TransactionPage;
