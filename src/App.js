import React from 'react';
import './App.css';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import AuthenticatedPage from './Components/Pages/AuthenticatedPage/AuthenticatedPage';
import TopUpPage from './Components/Pages/TopUpPage/TopUpPage';
import TrackOrderPage from './Components/Pages/TrackOrderPage/TrackOrderPage';
import SignInPage from './Components/Pages/SignInPage/SignInPage';
import AdminRoutes from './Components/Routes/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/topup/:game" component={TopUpPage} />
        <Route path="/track" component={TrackOrderPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/admin" component={AdminRoutes} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
