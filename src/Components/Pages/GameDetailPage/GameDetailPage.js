import { Button } from 'antd';
import { useFormik } from 'formik';
import { LeftOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FETCH_ALL_GAMES_API } from '../../../Constants/Apis';
import GameCreationSchema from '../../../Schema/GameCreationSchema';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import GameForm from '../../GameForm/GameForm';

function GameDetailPage({ history }) {
  const { id } = useParams();

  const [isDisabled, setIsDisabled] = useState(true);
  const { fetchedData: { data }, callReFetch } = useAxios(`${FETCH_ALL_GAMES_API}/game-detail/${id}`);

  return (
    <div>
      <div className="flex items-center mb-6">
        <LeftOutlined className="text-4xl text-white" onClick={() => history.push('/admin/games')} />
        <h1 className="text-4xl text-white">Game Detail</h1>
      </div>
      {isDisabled && <Button className="mb-5 bg-white" onClick={() => setIsDisabled(false)}>Edit</Button>}
      {!isDisabled && <Button className="mb-5 bg-white" onClick={() => setIsDisabled(true)}>Cancel</Button>}
      {data && (
      <GameForm
        gameData={data}
        disabled={isDisabled}
        isEditMode
        callReFetch={callReFetch}
        setIsDisabled={setIsDisabled}
      />
      )}

    </div>
  );
}

GameDetailPage.propTypes = {

};

export default GameDetailPage;
