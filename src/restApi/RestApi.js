import axios from 'axios';

const apiUrl = "http://localhost:3000/api";

// Fetch data from /api/items
export const getData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/items`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

// Fetch data from /api/workAreas
export const getWorkAreas = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/workAreas`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};



