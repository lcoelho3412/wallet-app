const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      email: payload.email,
    };
  default: return state;
  }
};

export default user;
