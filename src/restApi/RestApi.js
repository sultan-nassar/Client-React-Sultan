import axios from "axios";

const apiUrl = "http://localhost:3000/api";

export const getData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/items`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new error (error.message)
  }
};



