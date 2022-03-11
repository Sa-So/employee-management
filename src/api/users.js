import axios from "axios";

const url = "http://localhost:3003/";

export const postUser = async (id) => {
  return await axios.post(`${url}users/`, id);
};
export const getUser = async ({ email, password }) => {
  return await axios.get(`${url}users/`, {
    params: {
      email,
      password,
    },
  });
};
