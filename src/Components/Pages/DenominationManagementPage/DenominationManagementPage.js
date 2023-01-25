import React from 'react';
import { Button, message, Table } from 'antd';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import { GET_DENOMINATION_LIST } from '../../../Constants/Apis';
import { deleteDenominationById, handleNumberCurrency } from '../../../Utils/CommonUtils/CommonUtils';

function DenominationManagementPage({ history }) {
  const { fetchedData: { data }, callReFetch } = useAxios(GET_DENOMINATION_LIST);

  const renderPrice = (items) => {
    return handleNumberCurrency(items);
  };

  const handleOnClickDelete = async (record) => {
    try {
      await deleteDenominationById(record._id);
      message.success('Denomination deleted successfully');
      return callReFetch();
    } catch (error) {
      return message.error(error?.response?.data?.message || 'Something went wrong, failed to delete denomination');
    }
  };

  const renderDeleteButton = (record) => {
    return (
      <Button onClick={() => handleOnClickDelete(record)}>Delete</Button>
    );
  };
  const column = [
    {
      title: 'Nominal',
      dataIndex: 'nominal',
      key: 'nominal',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (items) => renderPrice(items)
    },
    {
      title: 'Action',
      dataIndex: 'price',
      key: 'price',
      render: (items, record) => renderDeleteButton(record)
    },
  ];
  return (
    <div>
      <Button type="primary" className="bg-white text-black mb-5" onClick={() => history.push('/admin/create-denomination')}>Add Denomination</Button>
      {
            data && (<Table columns={column} dataSource={data} />)
     }

    </div>
  );
}

DenominationManagementPage.propTypes = {

};

export default DenominationManagementPage;
