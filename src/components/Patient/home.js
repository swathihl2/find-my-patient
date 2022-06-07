/* eslint-disable react/jsx-filename-extension,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './patient.css';
import AddPatient from './addPatient';
import HomeContent from './HomeContent';
import PatientList from './updatePatient';

/**
 * Loads Patient home page,Add patient form and Patient table
 *
 * @returns Patient home content
 */
const PatientHome = () => {
  const navigate = useNavigate();
  const PatientName = localStorage.getItem('PatientName');
  const [patientForm, setPatientForm] = useState(<HomeContent />);

  async function Forms(e) {
    if (e === 0) {
      setPatientForm(<HomeContent />);
    } else if (e === 1) {
      setPatientForm(<AddPatient />);
    } else if (e === 2) {
      setPatientForm(<PatientList />);
    }
  }

  if (PatientName === undefined || PatientName === null) {
    window.location.href = '/find-my-patient';
  }
  const logout = () => {
    localStorage.removeItem('PatientName');
    navigate('/find-my-patient');
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="nav-bar">
        <div className="nav">
          <div className="nav-item">
            <div className="left">
              <div className="nav-content left" onClick={() => { Forms(0); }}>
                <i className="fa fa-home" />
                {' '}
                Home
              </div>
              <div className="nav-content left " onClick={() => { Forms(1); }}>
                <i className="fa fa-plus" />
                {' '}
                Add Patient
              </div>
              <div className="nav-content left" onClick={() => { Forms(2); }}>
                <i className="fa fa-edit" />
                {' '}
                View/Update Patient
              </div>
            </div>
            <div className="right">
              <div className="nav-content right" onClick={() => logout()}>
                <i className="fa fa-lock" />
                {' '}
                | Logout
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="content">
        {patientForm}
        <br />
      </div>
    </div>
  );
};

export default PatientHome;
