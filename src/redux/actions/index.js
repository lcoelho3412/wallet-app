import requestAPI from '../../services/api';

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY_SUCCESS = 'RECEIVE_CURRENCY_SUCCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const receiveCurrencySuccess = (payload) => ({
  type: RECEIVE_CURRENCY_SUCCESS,
  payload,
});
export const receiveCurrencyFailure = (error) => ({
  type: RECEIVE_CURRENCY_FAILURE,
  error,
});

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const response = await requestAPI();
      dispatch(receiveCurrencySuccess(response));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  };
}

export const saveNewExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});
