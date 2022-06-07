/* eslint-disable react/jsx-filename-extension,react/forbid-dom-props,react/forbid-component-props */
import React, { useState } from 'react';
import {
  Grid, Paper, Avatar, Typography, TextField, Button, MenuItem,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import instance from '../../firebase/instance';
import 'react-calendar/dist/Calendar.css';
import { Bloods, Genders } from '../../helpers/PatientInformation';

/**
 * Loads Add patient form
 * 
 * @returns Add patient content
 */
const AddPatient = () => {
  const paperStyle = {
    padding: 20, width: 300, margin: '0 auto', backgroundColor: 'rgba(239, 237, 236, 0.5)', boxShadow: '1px 5px 10px black',
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const [DiseaseStyle, setDiseaseStyle] = useState();
  const [BloodStyle, setBloodStyle] = useState();
  const [GenderStyle, setGenderStyle] = useState();
  const [DOBStyle, setDOBStyle] = useState();
  const [nameStyle, setNameStyle] = useState();
  const [phoneStyle, setPhoneStyle] = useState();
  const [success, setSuccess] = useState();

  const [PatientDateOfBirth, setPatientDateOfBirth] = useState(new Date());
  const [PatientName, setPatientName] = useState('');
  const [PatientPhone, setPatientPhone] = useState('');
  const [Disease, setDisease] = useState('');
  const [Address, setAddress] = useState('');
  const [bloodGroup, setBlood] = useState('');
  const [gender, setGender] = useState('');

  const handleDateChange = (date) => {
    setPatientDateOfBirth(date);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleBloodChange = (e) => {
    setBlood(e.target.value);
  };

  const validate = (e) => {
    let i = 1;
    e.preventDefault();
    if (PatientName === '') {
      i = 0;
      setNameStyle(<div style={{ color: 'red' }}>Name is required</div>);
    } else if (PatientName.length < 3) {
      i = 0;
      setNameStyle(<div style={{ color: 'red' }}>Name must have atleast 3 characters</div>);
    } else if (!Number.isNaN(Number(PatientName))) {
      i = 0;
      setNameStyle(<div style={{ color: 'red' }}>Name should not be a number</div>);
    } else {
      setNameStyle('');
    }

    if (PatientPhone === '') {
      i = 0;
      setPhoneStyle(true);
    } else if (PatientPhone.length !== 10) {
      i = 0;
      setPhoneStyle(<div style={{ color: 'red' }}>Please provide 10 digits phone number</div>);
    } else if (Number.isNaN(Number(PatientPhone)) && PatientPhone.length === 10) {
      i = 0;
      setPhoneStyle(<div style={{ color: 'red' }}>Phone No.should be a number</div>);
    } else {
      setPhoneStyle('');
    }

    if (Disease.length === 0) {
      i = 0;
      setDiseaseStyle(true);
    } else {
      setDiseaseStyle('');
    }
    if (PatientDateOfBirth === '') {
      i = 0;
      setDOBStyle(true);
    } else {
      setDOBStyle('');
    }
    if (gender === '') {
      i = 0;
      setGenderStyle(true);
    } else {
      setGenderStyle('');
    }
    if (bloodGroup === '') {
      i = 0;
      setBloodStyle(true);
    } else {
      setBloodStyle('');
    }
    if (i === 1) {
      const DateOfBirth = `${String(PatientDateOfBirth.getDate())}-${String(parseInt(PatientDateOfBirth.getMonth()) + 1)}-${String(PatientDateOfBirth.getFullYear())}`;
      const Data = {
        PatientName, PatientPhone, Address, gender, DateOfBirth, bloodGroup, Disease,
      };
      instance.get('/patients.json').then((resopnse) => {
        for (const i in resopnse.data) {
          if (resopnse.data[i].phone === PatientPhone) {
            setSuccess(<div style={{ color: 'red' }}>User already exists  </div>);
            e.preventDefault();
            return;
          }
        }
        instance.post('/patients.json', Data).then(() => {
          setSuccess(<div style={{ color: 'green' }}>Successfully Added </div>);
        }).catch(() => {
          setSuccess(<div style={{ color: 'red' }}>Sorry... Something went wrong</div>);
        });
      }).catch(() => {
        setSuccess(<div colSpan="10" style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Something went wrong!!!</div>);
      });
    }
  };

  return (
    <Grid align="center">
      <Paper style={paperStyle} className="popup">
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Add Patient</h2>
          {success}
          <Typography variant="caption" gutterBottom />
        </Grid>
        <form>
          <TextField fullWidth required label="Name" error={nameStyle} name="PatientName" onChange={(e) => { setPatientName(e.target.value); }} placeholder="Enter your name" />
          <TextField fullWidth required error={phoneStyle} label="Phone Number" name="PatientPhone" onChange={(e) => { setPatientPhone(e.target.value); }} placeholder="Enter your phone number" />
          {phoneStyle}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <KeyboardDatePicker
              required
              value={PatientDateOfBirth}
              format="dd/MM/yyyy"
              onChange={handleDateChange}
              label="Birth Date"
              showTodayButton
              fullWidth
              error={DOBStyle}
            />
          </MuiPickersUtilsProvider>
          <TextField
            fullWidth
            required
            id="gender"
            select
            label="Gender"
            value={gender}
            onChange={handleGenderChange}
            variant="standard"
            align="left"
            error={GenderStyle}
          >
            {Genders.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            fullWidth
            required
            id="blood"
            select
            label="Blood Group"
            value={bloodGroup}
            onChange={handleBloodChange}
            variant="standard"
            align="left"
            error={BloodStyle}
          >
            {Bloods.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField fullWidth label="Address" id="address" onChange={(e) => { setAddress(e.target.value); }} type="text" />
          <TextField fullWidth error={DiseaseStyle} required label="Disease Name" id="disease" onChange={(e) => { setDisease(e.target.value); }} type="text" />
          <br />
          <Typography variant="caption" gutterBottom><br /></Typography>
          <Button type="submit" variant="contained" color="primary" onClick={(event) => { validate(event); }}>Add</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddPatient;
