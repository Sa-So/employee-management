import axios from "axios";
// export default axios.create({
//   baseURL: "localhost:3003/",
// });
export const getAllEmployees = async () => {
  return await axios.get("http://localhost:3003/employees");
};
export const postEmployees = async (employeeData) => {
  return await axios.post("http://localhost:3003/employees", employeeData);
};
export const deleteEmployee = async (id) => {
  return await axios.delete(`http://localhost:3003/employees/${id}`);
};
export const updateEmployee = async (id, employeeData) => {
  return await axios.put(`http://localhost:3003/employees/${id}`, employeeData);
};
