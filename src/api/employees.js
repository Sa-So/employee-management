import axios from "axios";
// export default axios.create({
//   baseURL: "localhost:3003/",
// });
// const url = "http://localhost:3003/";
// const url = { base: process.env.REACT_APP_API_URL };

// url = url.base;
// const url = process.env.REACT_APP_API_URL || "http://localhost:3003/";
const url = process.env.REACT_APP_API_URL;
console.log(url);
// export const getEmployeeById = async (id) => {
//   const res = await axios.get(`${url}employees/${id}`);
//   return res.data;
// };
export const getAllEmployees = async () => {
  return await axios.get(`${url}employees/`);
};
export const getEmployee = async (id) => {
  return await axios.get(`${url}employees/${id}`);
};
export const postEmployees = async (employeeData) => {
  return await axios.post(`${url}employees/`, employeeData);
};
export const deleteEmployee = async (id) => {
  return await axios.delete(`${url}employees/${id}`);
};
export const updateEmployee = async (id, employeeData) => {
  return await axios.put(`${url}employees/${id}`, employeeData);
};
// return promises;
