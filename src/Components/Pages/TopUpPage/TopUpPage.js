import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { message } from 'antd';
import { isEmpty } from 'lodash';
import axios from 'axios';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';
import { FETCH_ALL_GAMES_API, PAYMENT_API, PAYMENT_REDIRECT } from '../../../Constants/Apis';
import Header from '../../Header/Header';
import TopUpForm from '../../TopUpForm/TopUpForm';
import OrderPayloadSchema from '../../../Schema/OrderPayloadSchema';
import useMidtransScript from '../../../Utils/useMidtransScript';
import { createTransactionToken } from '../../../Utils/CommonUtils/CommonUtils';

function TopUpPage(props) {
  const history = useHistory();
  const { game } = useParams();

  const { fetchedData: { data } } = useAxios(`${FETCH_ALL_GAMES_API}/${game}`);
  useMidtransScript();

  const formik = useFormik({
    initialValues: {
      email: '',
      inGameName: '',
      tagLine: '',
      price: '',
      game,
      nominal: ''
    },
    validationSchema: OrderPayloadSchema
  });
  const handleSubmit = async () => {
    const { validateForm, values } = formik;
    const error = await validateForm(values);

    if (!isEmpty(error)) {
      return message.error('Silahkan isi semua data !');
    }
    return createTransactionToken(formik.values, history);
  };

  return (
    <div className="container">
      <Header />
      <div className="grid gap-12 grid-cols-1 text-white justify-items-center sm:grid-cols-2 p-12">
        <div className=" w-full">
          <div className="grid  grid-cols-1 text-center justify-items-center">
            <img src={`http://localhost:80/uploads/${data?.imageBanner}`} alt="" className="w-full mb-10" />
            <h1>{data?.description}</h1>
          </div>
        </div>
        <TopUpForm data={data} handleSubmit={handleSubmit} formik={formik} />
      </div>
    </div>

  );
}

TopUpPage.propTypes = {

};

export default TopUpPage;
