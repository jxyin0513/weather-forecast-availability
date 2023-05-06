import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Page from './components/MainPage';
import Nav from './components/BelowNav';
import HourlyWeather from './components/weathers/hourly';
import DailyWeather from './components/weathers/daily';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Nav />
      {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path={'/'} exact={true}>
            <Page />
          </Route>
          <Route path='/signup' exact={true}>
            <SignupFormPage />
          </Route>
          {/* <Route path='/today' exact={true}>

          </Route> */}
          <Route path='/hourly/:cityId' exact={true}>
            <HourlyWeather />
          </Route>
          <Route path='/daily/:cityId' exact={true}>
            <DailyWeather />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
