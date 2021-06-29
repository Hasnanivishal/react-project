import instance from './user-service'

//Register
export const register = async (data) => {
  let res = await instance.post(`users`, data);
  return res.data;
};

//Login
export const login = (data) => {
  new Promise((resolve, reject) => {
    instance.get(`users`).then(res => {
    let user = res.filter(f=> f.email === data.email && f.password === data.password);
    resolve(user.length > 0)
    }).catch(resolve(false));
  });
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
  return user.length > 0 ? false: true;
}
