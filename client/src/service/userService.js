import axios from "axios";

export const loginUser = async (email, password) => {
  const response = await axios.post("/api/user/login", { email, password });
  return response.data;
};

export const registerUser = async (name, email, password) => {
  const response = await axios.post("/api/user/register", { name, email, password });
  return response.data;
};
