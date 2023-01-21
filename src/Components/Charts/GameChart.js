import { DatePicker, MonthPicker } from 'antd';
import React from 'react';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';

function GameChart({
  data, state, dispatch, callReFetch
}) {
  const chartConfig = {
    options: {
      chart: {
        foreColor: '#ffffff',
      },
      labels: data?.game
    },
    series: data?.totalTransaction
  };

  const onChange = (date, dateString) => {
    dispatch({ type: 'month', payload: date.$d.getMonth() + 1 });
    dispatch({ type: 'year', payload: date.$d.getFullYear() });
    callReFetch();
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <DatePicker onChange={onChange} picker="month" defaultValue={dayjs(`${state.year}-${state.month}`, 'YYYY-M')} />
          <h1 className="text-2xl text-white">
            Perbandingan penjualan per-product pada tahun
            {' '}
            {state.year}
            {' '}
            bulan
            {' '}
            {state.month}
          </h1>
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="pie"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

GameChart.propTypes = {

};

export default GameChart;
