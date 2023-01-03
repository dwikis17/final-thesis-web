import { isEmpty } from 'lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Header/Header';

function CheckoutPage({ location }) {
  const history = useHistory();

  if (isEmpty(location?.state)) {
    history.push('/');
  }
  return (
    <div className="container">
      <Header />
      <div className="border border-white text-white text-center">
        <h1 className="text-4xl">Terimakasih sudah berbelanja di EZSKIN!</h1>
        <p>
          Silakan selesaikan proses pembayaran,
          {' '}
          <button onClick={() => window.open(location?.state?.redirectUrl)} type="submit">Click disini</button>
          {' '}
          untuk menuju link pembayaran jika tab tidak terbuka secara otomatis
        </p>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {

};

export default CheckoutPage;
