import React from 'react';
import Chart from 'react-apexcharts';

function GameChart({ data }) {
  console.log(data);
  const chartConfig = {
    options: {
      chart: {
        foreColor: '#ffffff',
      },
      labels: data?.game
    },
    series: data?.totalTransaction
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
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
