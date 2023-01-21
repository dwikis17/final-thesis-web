import { Button, Select, } from 'antd';
import { isEmpty } from 'lodash';
import React, { useReducer } from 'react';
import { CHART_API, FETCH_ALL_TRANSACTION_API } from '../../../../Constants/Apis';
import { reducer } from '../../../../Utils/CommonUtils/CommonUtils';
import { useAxios } from '../../../../Utils/CommonUtils/useAxios';
import GameChart from '../../../Charts/GameChart';

const { Option } = Select;
function DashboardPage({ user, history }) {
  const initialState = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { fetchedData: { data }, callReFetch } = useAxios(`${CHART_API}`, state);

  return (
    <div>
      <h1 className="text-4xl text-white mb-5">
        {' '}
        Welcome back,
        {' '}
        {user?.name}
      </h1>

      { data && <GameChart data={data} state={state} dispatch={dispatch} callReFetch={callReFetch} />}

    </div>
  );
}

DashboardPage.propTypes = {

};

export default DashboardPage;
