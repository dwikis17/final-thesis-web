import React from 'react';
import { Button, Table } from 'antd';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import { GET_DENOMINATION_LIST } from '../../../Constants/Apis';
import { handleNumberCurrency } from '../../../Utils/CommonUtils/CommonUtils';

function DenominationManagementPage({ history }) {
  const { fetchedData: { data } } = useAxios(GET_DENOMINATION_LIST);

  const renderPrice = (items) => {
    return handleNumberCurrency(items);
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
