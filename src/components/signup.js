/* eslint-disable react/jsx-filename-extension,react/forbid-dom-props,react/forbid-component-props */
import React, { useState } from 'react';
import {
  Grid, Paper, Avatar, Typography, TextField, Button,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import instance from '../firebase/instance';

/**
 * It loads SignUp form
 * 
 * @returns SignUp form content
 */

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const [nameStyle, setNameStyle] = useState();
  const [agreeStyle, setAgreeStyle] = useState();
  const [phoneStyle, setPhoneStyle] = useState();
  const [passwordStyle, setPasswordStyle] = useState();
  const [success, setSuccess] = useState();
  const [agree, setAgree] = useState();

  const [passwordSecondInput, setPasswordSecondInpu] = useState(null);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');

  let flag = 0;

  const handlePost = (e) => {
    const Data = {
      userName, password, phone,
    };
    if (flag <= 3) {
      setAgreeStyle(<div style={{ color: 'red' }}>Please accept the terms & conditions</div>);
    } else if (flag >= 4) {
      if (agree === false) {
        setAgreeStyle(<div style={{ color: 'red' }}>Please accept the terms & conditions</div>);
      } else {
        instance.get('/results.json').then((resopnse) => {
          for (const i in resopnse.data) { // eslint-disable-line
            if (resopnse.data[i].phone === phone) {
              setSuccess(<div style={{ color: 'red' }}>User already exists  </div>);
              e.preventDefault();
              return;
            }
          }
          instance.post('/results.json', Data).then(() => {
            setSuccess(<div style={{ color: 'green' }}>Successfully Signed up </div>);
          });
        }).catch(() => {
          setSuccess(<div colSpan={10} style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Something went wrong!!!</div>);
        });
      }
    } else {
      setSuccess('');
    }
    if (agree) {
      setAgreeStyle('');
    }
  };

  const validate = (e) => {
    e.preventDefault();
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
    if (phone === '') {
      setPhoneStyle(true);
    } else if (phone.length !== 10) {
      setPhoneStyle(<div style={{ color: 'red' }}>Please provide 10 digits phone number</div>);
    } else if (Number.isNaN(Number(phone)) && phone.length === 10) {
      setPhoneStyle(<div style={{ color: 'red' }}>Phone No.should be a number</div>);
    } else {
      setPhoneStyle('');
      flag += 1;
    }
    if (password === '' || passwordSecondInput === '') {
      setPasswordStyle(true);
    } else if (password.length < 6) {
      setPasswordStyle(<div style={{ color: 'red' }}>Password must have atleast 6 characters</div>);
    } else if (password !== passwordSecondInput) {
      setPasswordStyle(<div style={{ color: 'red' }}>Password is not matching</div>);
    } else {
      setPasswordStyle('');
      flag += 1;
    }
    if (flag === 3 && agree === true) {
      flag += 1;
    }
  };

  return (
    <Grid Onsubmit={handlePost}>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          {success}
          <Typography variant="caption" gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" name="userName" error={nameStyle} onChange={(e) => { setUserName(e.target.value); }} placeholder="Enter your name" />
          {nameStyle}
          <TextField fullWidth label="Phone Number" name="phone" error={phoneStyle} onChange={(e) => { setPhone(e.target.value); }} placeholder="Enter your phone number" />
          {phoneStyle}
          <TextField fullWidth label="Password" name="password" error={passwordStyle} onChange={(e) => { setPassword(e.target.value); }} placeholder="Enter your password" type="password" />
          <TextField fullWidth label="Confirm Password" name="passwordSecond" error={passwordStyle} onChange={(e) => { setPasswordSecondInpu(e.target.value); }} placeholder="Confirm your password" type="password" />
          {passwordStyle}
          <FormControlLabel
            control={<Checkbox name="checkedA" onChange={() => { setAgree(true); }} checked={agree} />}
            label="I accept the terms and conditions."
          />
          {agreeStyle}
          <Button type="submit" variant="contained" color="primary" onClick={(event) => { validate(event); handlePost(event); }} fullWidth>Sign up</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
