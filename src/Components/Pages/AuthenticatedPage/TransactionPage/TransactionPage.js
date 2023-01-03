import { Button, Spin, Table } from 'antd';
import React, { useReducer } from 'react';
import moment from 'moment';
import { FETCH_ALL_TRANSACTION_API } from '../../../../Constants/Apis';
import { handleNumberCurrency, reducer, updateTransactionStatusToDone } from '../../../../Utils/CommonUtils/CommonUtils';
import { useAxios } from '../../../../Utils/CommonUtils/useAxios';
import { statusFilter } from '../../../../Constants/FilterConstant';

function TransactionPage(props) {
  const initialState = {
    filterInfo: {},
    sorter: {}
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { fetchedData: { data }, callReFetch, loading } = useAxios(FETCH_ALL_TRANSACTION_API, state);

  const handleOnClickUpdate = async (orderId) => {
    console.log('orderId', orderId);
    await updateTransactionStatusToDone(orderId);
    callReFetch();
  };

  const renderMarkDoneButton = (items) => {
    return (
      <Button style={{ backgroundColor: 'green', color: 'white' }} type="submit" onClick={() => handleOnClickUpdate(items?.orderId)}>
        MARK AS DONE
      </Button>
    );
  };

  const renderFilter = (items) => {
    const filterField = {
      status: statusFilter
    };
    return filterField[items];
  };

  const renderDateFormat = (items) => {
    return moment(items).format('MMM DD YYYY');
  };

  const renderItems = (items, record) => {
    return items === 'Accepted' ? renderMarkDoneButton(record) : null;
  };

  const handleTableOnChange = (pagination, filter, sorter) => {
    dispatch({ type: 'sorter', payload: sorter });
    dispatch({ type: 'filterInfo', payload: filter });
    callReFetch();
  };
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',

    },
    {
      title: 'Transaction ID',
      dataIndex: 'orderId',
      key: 'orderId',
      width: '200px'
    },
    {
      title: 'Game',
      dataIndex: 'game',
      key: 'game',
      filter: true
    },
    {
      title: 'Nominal',
      dataIndex: 'nominal',
      key: 'nominal',
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      render: (item) => handleNumberCurrency(item)
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
      title: 'Transaction Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      sorter: true,
      render: (items) => renderDateFormat(items)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: renderFilter('status')
    },
    {
      title: 'Action',
      dataIndex: 'status',
      key: 'status',
      render: (items, record) => renderItems(items, record)
    },
  ];
  return (
    <div>
      <Spin spinning={loading}>
        {data && (
        <Table
          columns={columns}
          dataSource={data}
          onChange={(page, filter, sorter) => handleTableOnChange(page, filter, sorter)}
        />
        )}
      </Spin>
    </div>
  );
}

TransactionPage.propTypes = {

};

export default TransactionPage;
