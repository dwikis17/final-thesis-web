import React from 'react';
import './App.css';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

import PublicRoutes from './Components/Routes/PublicRoutes/PublicRoutes';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import AuthenticatedPage from './Components/Pages/AuthenticatedPage/AuthenticatedPage';
import TopUpPage from './Components/Pages/TopUpPage/TopUpPage';
import TrackOrderPage from './Components/Pages/TrackOrderPage/TrackOrderPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/topup/:game" component={TopUpPage} />
        <Route path="/track" component={TrackOrderPage} />
        <Route path="/admin" component={AuthenticatedPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
