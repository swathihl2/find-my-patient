/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

/* global expect,describe,it */
describe('App Page Test ', () => {
  it('Sign In Page renders', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Sign In')).toBeTruthy();
  });

  it('Sign Up page renders', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Sign Up')).toBeTruthy();
  });

  it('Sign In Form', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Sign In')).toBeTruthy();
  });

  it('Sign Up Form', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Sign Up')).toBeTruthy();
  });

  it('Admin', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Sign In')).toBeTruthy();
  });

  it('Add patient', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Sign Up')).toBeTruthy();
  });
});
