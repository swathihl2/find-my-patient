/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const HomeContent = () => (
  <div>
    <h2>Home Content</h2>
    Hii
    {' '}
    {localStorage.getItem('PatientName')}
    .!
    <br />
    Here
    You can add and
    update patient details.
  </div>
);

export default HomeContent;
