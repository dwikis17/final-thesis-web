import { Button, Table } from 'antd';
import React from 'react';
import { FETCH_ALL_GAMES_API } from '../../../Constants/Apis';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';

function GameManagementPage({ history }) {
  const { fetchedData: { data }, callReFetch } = useAxios(FETCH_ALL_GAMES_API);

  const renderItems = (items) => {
    return (
      <div className=" flex flex-row place-content-around">
        <Button onClick={() => console.log(items)}>
          Update
        </Button>
        <Button>
          Delete
        </Button>
      </div>
    );
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      width: '250px',
      title: 'Action Button',
      render: (items) => renderItems(items)
    }
  ];

  const handleOnClickRow = (record) => {
    return { onClick: () => history.push(`/admin/game-detail/${record._id}`) };
  };
  return (
    <div>
      <Button type="primary" className="bg-white text-black mb-5" onClick={() => history.push('/admin/create-game')}>Add Game</Button>
      {data && (
        <Table
          columns={columns}
          dataSource={data}
          onRow={handleOnClickRow}
        />
      )}
    </div>
  );
}

GameManagementPage.propTypes = {

};

export default GameManagementPage;
