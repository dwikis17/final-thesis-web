import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import React from 'react';
import { FETCH_ALL_GAMES_API } from '../../../Constants/Apis';
import GameCreationSchema from '../../../Schema/GameCreationSchema';
import GameForm from '../../GameForm/GameForm';

function GameCreationPage({ history }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      vouchers: []
    },
    validationSchema: GameCreationSchema
  });
  const { values } = formik;

  const handleSubmit = async () => {
    const { validateForm } = formik;
    const error = await validateForm(values);

    if (!isEmpty(error)) {
      return message.error('Silahkan isi semua data !');
    }

    try {
      await axios.post(FETCH_ALL_GAMES_API, formik.values);
      return history.push('/admin/dashboard');
    } catch (e) {
      return console.log(e);
    }
  };
  return (
    <>
      <h1 className="text-4xl text-white mb-5">Game Creation</h1>
      <GameForm history={history} formik={formik} handleSubmit={handleSubmit} />
    </>
  );
}

GameCreationPage.propTypes = {

};

export default GameCreationPage;
