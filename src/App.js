/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInOutContainer from './containers';
import PatientHome from './components/Patient/home';
import NotFound from './NotFound';
import SomethinWentWrong from './error';

/**
 * Routes patient home page,login form and error handling pages
 *
 * @returns routes url paths
 */
const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/Find-My-Patient" element={<SignInOutContainer />} />
        <Route exact path="/Find-My-Patient/patient" element={<PatientHome />} />
        <Route exact path="/Find-My-Patient/Error" element={<SomethinWentWrong />} />
        <Route path="/Find-My-Patient/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
