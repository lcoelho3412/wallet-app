import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import requestAPI from '../services/api';

class WalletForm extends Component {
  INITIAL_STATE = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    id: 0,
  }

  state = { ...this.INITIAL_STATE };

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies = async () => {
    const { dispatch } = this.props;
    const currencies = await requestAPI();
    dispatch({ type: 'RECEIVE_CURRENCY_SUCCESS', payload: currencies });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id } = this.state;
    const currentCurrency = await requestAPI();
    const { dispatch } = this.props;
    dispatch({ type: 'SAVE_EXPENSE',
      payload: { ...this.state, id, exchangeRates: currentCurrency } });
    this.setState({ ...this.INITIAL_STATE, id: id + 1 });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <>
        <div>WalletForm</div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="valor">
            valor
            <input
              data-testid="value-input"
              type="number"
              name="value"
              id="valor"
              min="1"
              step="any"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            descrição
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currencies">
            moeda
            <select
              name="currency"
              id="currencies"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies
                .map((moeda) => <option key={ moeda }>{ moeda }</option>)}

            </select>

          </label>
          <label htmlFor="payMethod">
            método de pagamento
            <select
              name="method"
              id="payMethod"
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
            >
              <option
                value="Dinheiro"
              >
                Dinheiro
              </option>
              <option
                value="Cartão de crédito"
              >
                Cartão de crédito
              </option>
              <option
                value="Cartão de débito"
              >
                Cartão de débito
              </option>
            </select>
          </label>

          <label htmlFor="tag">
            categoria
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="submit"
          >
            Adicionar despesa

          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

WalletForm.propTypes = {
  wallet: propTypes.shape({
    currencies: propTypes.shape([]),
  }),
  dispatch: propTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
