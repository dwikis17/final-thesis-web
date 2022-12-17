export const getToken = () => {
  return localStorage.getItem('token');
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};
