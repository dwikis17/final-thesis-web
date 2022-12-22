import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const renderContent = (props) => {
    return (
      <Component {...props} {...rest} />
    );
  };
  return (
    <Route
      {...rest}
      render={(props) => renderContent(props)}
    />
  );
}

PrivateRoute.propTypes = {

};

export default PrivateRoute;
