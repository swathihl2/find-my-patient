/* eslint-disable react/jsx-filename-extension,react/forbid-component-props */
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Login from '../components/login';
import Signup from '../components/signup';

/**
 * Handles user login form and signup form
 *
 * @returns user login page
 */
const SignInOutContainer = () => {
  document.getElementById('background-image').style.backgroundImage = 'url(https://t4.ftcdn.net/jpg/00/83/83/63/240_F_83836356_nfYi9d7pg9qFHrQKcAX61MNrSP4dOdW2.jpg)';
  document.getElementById('background-image').style.opacity = '0.9';

  const paperStyle = { width: 340, margin: '20px auto' };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const {
      children, value, index, ...other
    } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        { }
        {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
    index: PropTypes.func.isRequired,
  };

  return (
    <div>
      <div>
        <Paper elevation={20} style={paperStyle}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Login handleChange={handleChange} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup />
          </TabPanel>
        </Paper>
      </div>
    </div>
  );
};

export default SignInOutContainer;
