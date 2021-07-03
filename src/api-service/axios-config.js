import instance from './user-service'

//Register
export const register = async (data) => {
  let res = await instance.post(`users`, data);
  return res.data;
};

//Login
export const login = async (data) => {
  let user = await getAll();
  let filteredUser = user.filter(f=> f.email === data.email && f.password === data.password);
  return filteredUser.length > 0;
}

//Get All Users
export const getAll = async () => {
  let res = await instance.get(`users`);
  return res.data;
};

// Email Validation
export const validateEmail = async (email) => {
  let res = await getAll();
  let user = res.filter(f=> f.email === email);
  return user.length === 0;
}
