import { Table } from 'antd';
import React from 'react';
import { FETCH_ALL_POST_API } from '../../Constants/Apis';
import { useAxios } from '../../Utils/CommonUtils/useAxios';
import ForumButtonSection from '../ForumButtonSection/ForumButtonSection';

function ForumTable({ history }) {
  const { fetchedData: { data }, callReFetch, loading } = useAxios(FETCH_ALL_POST_API);

  const handleRenderTitle = (item, record) => {
    return (
      <button type="submit"><b onClick={() => history.push(`/content/${record._id}`)}>{item}</b></button>
    );
  };
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (item, record) => handleRenderTitle(item, record)
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    }
  ];
  return (
    <div>
      <ForumButtonSection callReFetch={callReFetch} history={history} />
      {data && (
      <Table
        columns={columns}
        dataSource={data}
      />
      )}
    </div>
  );
}

ForumTable.propTypes = {

};

export default ForumTable;
