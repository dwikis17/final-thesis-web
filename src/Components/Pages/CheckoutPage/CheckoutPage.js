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
        <h1 className="text-4xl">Thank you for your order !!</h1>
        <p>
          Please complete your payment,
          {' '}
          <button onClick={() => window.open(location?.state?.redirectUrl)} type="submit">Click here</button>
          {' '}
          if the payment pop up did not appear
        </p>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {

};

export default CheckoutPage;
