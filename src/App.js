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
        <Route exact path="/" element={<SignInOutContainer />} />
        <Route exact path="/patient" element={<PatientHome />} />
        <Route exact path="/Error" element={<SomethinWentWrong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
