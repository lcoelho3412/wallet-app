import {
  RECEIVE_CURRENCY_SUCCESS,
  SAVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case RECEIVE_CURRENCY_SUCCESS:
    delete payload.USDT;
    return {
      ...state,
      currencies: Object.keys(payload),
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...payload }],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
