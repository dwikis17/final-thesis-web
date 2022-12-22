import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../Routes/RenderAdminPage/PrivateRoute';
import DashboardPage from './DashboardPage/DashboardPage';
import TransactionPage from './TransactionPage/TransactionPage';

function AuthenticatedPage({ history, userData }) {
  return (
    <Switch>
      <PrivateRoute
        path="/admin/dashboard"
        history={history}
        user={userData}
        component={DashboardPage}
      />
      <PrivateRoute
        path="/admin/transaction"
        history={history}
        user={userData}
        component={TransactionPage}
      />
      <Redirect to="/admin/dashboard" />
    </Switch>
  );
}

AuthenticatedPage.propTypes = {

};

export default AuthenticatedPage;
