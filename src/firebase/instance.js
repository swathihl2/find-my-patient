import axios from 'axios';

export default axios.create({
  baseURL: 'https://find-my-patient-8370f-default-rtdb.firebaseio.com/',
});
