/* eslint-disable react/jsx-filename-extension,jsx-a11y/anchor-is-valid,react/forbid-dom-props */
import React, { useState } from 'react';
import {
  Grid, Paper, Avatar, TextField, Button, Typography, Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import instance from '../firebase/instance';
import { error } from '../helpers/LoginHelpers';

/**
 * Loads Login Form
 *
 * @param {integer} handleChange represents to set a new state for the input.
 * @returns Login form content
 */
const Login = ({ handleChange }) => {
  const navigate = useNavigate();
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const [passwordStyle, setPasswordStyle] = useState();
  const [nameStyle, setNameStyle] = useState();
  const [success, setSuccess] = useState();
  const [remember, setRemember] = useState(false);

  const [password, setPassword] = useState(localStorage.getItem('password'));
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  let flag = 0;

  const validate = () => {
    if (userName.length < 3) {
      error.nameTag = 'Invalid Name';
    }
    if (userName === '') {
      setNameStyle(true);
    } else if (userName.length < 3) {
      setNameStyle(<div style={{ color: 'red' }}>Name must have atleast 3 characters</div>);
    } else if (!Number.isNaN(Number(userName))) {
      setNameStyle(<div style={{ color: 'red' }}>Name should not be a number</div>);
    } else {
      setNameStyle('');
      flag = 1;
    }
    if (password === '') {
      setPasswordStyle(true);
    } else if (password.length < 6) {
      setPasswordStyle(<div style={{ color: 'red' }}>Password must have atleast 6 characters</div>);
    } else {
      setPasswordStyle('');
      flag += 1;
    }
    if (flag >= 2) {
      instance.get('/results.json').then((resopnse) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const i in resopnse.data) {
          if (resopnse.data[i].userName === userName && resopnse.data[i].password === password) {
            setSuccess(<div style={{ color: 'green' }}>Successfully Logged </div>);
            if (remember === true) {
              localStorage.setItem('userName', userName);
              localStorage.setItem('password', password);
            } else {
              localStorage.setItem('userName', '');
              localStorage.setItem('password', '');
            }
            localStorage.setItem('PatientName', userName);
            localStorage.setItem('PatientPassword', password);
            document.getElementById('background-image').style.backgroundImage = '';
            navigate('/find-my-patient/patient');
          }
        }
        setSuccess(<div style={{ color: 'red' }}>Invalid Username or Password</div>);
      }).catch(() => {
        setSuccess(<div colSpan={10} style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Something went wrong!!!</div>);
      });
    } else {
      setSuccess('');
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <div className="center">{success}</div>
        <TextField label="Username" error={nameStyle} placeholder="Enter username" value={userName} name="{userName}" fullWidth onChange={(e) => { setUserName(e.target.value); }} required />
        {nameStyle}
        <TextField label="Password" error={passwordStyle} placeholder="Enter password" value={password} name="{password}" onChange={(e) => { setPassword(e.target.value); }} type="password" fullWidth required />
        {passwordStyle}
        <FormControlLabel
          control={(
            <Checkbox
              name="checkedA"
              onChange={() => { setRemember(!(remember)); }}
            />
                      )}
          label="Remember me"
        />
        <Button onClick={() => { validate(); }} type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        <Typography>
          {' '}
          Do you have an account ?
          <Link href="#" onClick={() => { handleChange('event', 1); }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Login;
