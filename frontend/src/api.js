import axios from 'axios';

export default axios.create({
  baseURL: 'https://sms-ymdc.onrender.com/api/students'
});
