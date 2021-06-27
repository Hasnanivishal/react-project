import instance from './user-service'

//Register
export const register = async (data) => {
  let res = await instance.post(`users`, data);
  return res.data;
};

//Register
export const getAll = async () => {
  let res = await instance.get(`users`);
  return res.data;
};
