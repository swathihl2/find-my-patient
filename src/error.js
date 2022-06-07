/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

/**
 * Handles unusual behaviour
 *
 * @returns error content
 */
const SomethinWentWrong = () => {
  const navigate = useNavigate();
  const gohome = () => {
    navigate('/find-my-patient');
  };
  return (
    <div>
      <center>
        <h1>Sorry, Something went wrong!</h1>
        <Button onClick={gohome}> Goto Home</Button>
      </center>
    </div>
  );
};

export default SomethinWentWrong;
