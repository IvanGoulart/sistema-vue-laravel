import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_BASE_URL;

async function getMe() {
  const response = await axios.get(`${API_URL}/me`, { headers: authHeader() });

  return response.data;
}

async function updateProfile(updateUser) {



  const payload = {
    data: {
      attributes: {
        name: updateUser.name,
        email: updateUser.email,
        password: updateUser.password
      }
    }
  };

  const response = await axios.patch(`${API_URL}/me`, payload, { headers: authHeader() });

  return response.data;
}

export default {
  getMe,
  updateProfile
};
