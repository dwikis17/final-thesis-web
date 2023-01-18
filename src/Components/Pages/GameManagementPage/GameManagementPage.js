import { Button, message, Table } from 'antd';
import React from 'react';
import { FETCH_ALL_GAMES_API } from '../../../Constants/Apis';
import { unlistGame } from '../../../Service/GameService';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';

function GameManagementPage({ history }) {
  const { fetchedData: { data }, callReFetch } = useAxios(`${FETCH_ALL_GAMES_API}/games`);

  const handleUnlistGame = async (id, currentStatus) => {
    try {
      await unlistGame(id, currentStatus);
      return callReFetch();
    } catch (error) {
      return message.error('something went wrong, failed to update status');
    }
  };

  const renderItems = (items, record) => {
    const updateType = record.status === 'Listed' ? 'Unlist' : 'List';
    return (
      <div className=" flex flex-row place-content-around">
        <Button onClick={() => history.push(`/admin/game-detail/${record._id}`)}>
          Update
        </Button>
        <Button onClick={() => handleUnlistGame(record._id, record.status)}>
          {updateType}
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      width: '250px',
      title: 'Action Button',
      render: (items, record) => renderItems(items, record)
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

        />
      )}
    </div>
  );
}

GameManagementPage.propTypes = {

};

export default GameManagementPage;
