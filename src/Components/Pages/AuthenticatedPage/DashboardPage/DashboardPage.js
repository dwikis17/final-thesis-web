import { Button, Select, } from 'antd';
import React from 'react';
import { CHART_API, FETCH_ALL_TRANSACTION_API } from '../../../../Constants/Apis';
import { useAxios } from '../../../../Utils/CommonUtils/useAxios';
import GameChart from '../../../Charts/GameChart';
import { months } from '../../../../Constants/DashboardConstant';

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

      <h2 className="text-white mb-5">
        Hasil penjualan berdasarkan tipe game pada tahun
        {' '}
        <Select style={{ width: '10%', margin: 0 }} />
        {' '}
        Bulan
        <Select style={{ width: '10%', margin: 0 }} options={months} value="March">
          {months.map((value) => {
            return (
              <Option value={value.key} label={value.value} />
            );
          })}
        </Select>
      </h2>

      { data && <GameChart data={data} />}

    </div>
  );
}

DashboardPage.propTypes = {

};

export default DashboardPage;
