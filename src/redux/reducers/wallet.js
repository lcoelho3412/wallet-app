import { RECEIVE_CURRENCY_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};
const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case RECEIVE_CURRENCY_SUCCESS:
    console.log(payload);
    delete payload.USDT;
    return {
      ...state,
      currencies: Object.keys(payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
