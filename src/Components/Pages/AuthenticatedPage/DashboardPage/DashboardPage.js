import { Button, Select, } from 'antd';
import React from 'react';
import { CHART_API, FETCH_ALL_TRANSACTION_API } from '../../../../Constants/Apis';
import { useAxios } from '../../../../Utils/CommonUtils/useAxios';
import GameChart from '../../../Charts/GameChart';

const { Option } = Select;
function DashboardPage({ user, history }) {
  const { fetchedData: { data } } = useAxios(CHART_API);
  return (
    <div>
      <h1 className="text-4xl text-white mb-5">
        {' '}
        Welcome back,
        {' '}
        {user?.name}
      </h1>

      { data && <GameChart data={data} />}

    </div>
  );
}

DashboardPage.propTypes = {

};

export default DashboardPage;
