
export const reducer = (state) => {
  return {
    //Only curry functions:::::
    set: (key, value) => ({ [key]: value }),
    setToken: (data) => ({token: data})
  };
};

export const initialState = () => {
  return {
    token:'',
  };
};
