import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../Routes/RenderAdminPage/PrivateRoute';
import GameCreationPage from '../GameCreationPage/GameCreationPage';
import GameManagementPage from '../GameManagementPage/GameManagementPage';
import DashboardPage from './DashboardPage/DashboardPage';
import TransactionPage from './TransactionPage/TransactionPage';
import GameDetailPage from '../GameDetailPage/GameDetailPage';
import DenominationManagementPage from '../DenominationManagementPage/DenominationManagementPage';
import DenominationCreationPage from '../DenominationCreationPage/DenominationCreationPage';

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
      <PrivateRoute
        path="/admin/games"
        history={history}
        user={userData}
        component={GameManagementPage}
      />
      <PrivateRoute
        path="/admin/create-game"
        history={history}
        user={userData}
        component={GameCreationPage}
      />
      <PrivateRoute
        path="/admin/game-detail/:id"
        history={history}
        user={userData}
        component={GameDetailPage}
      />
      <PrivateRoute
        path="/admin/denomination"
        history={history}
        user={userData}
        component={DenominationManagementPage}
      />
      <PrivateRoute
        path="/admin/create-denomination"
        history={history}
        user={userData}
        component={DenominationCreationPage}
      />
      <Redirect to="/admin/dashboard" />
    </Switch>
  );
}

AuthenticatedPage.propTypes = {

};

export default AuthenticatedPage;
