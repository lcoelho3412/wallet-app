import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCurrency } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { requestAPI } = this.props;

    requestAPI();
  }

  render() {
    const { wallet } = this.props;
    const { currencies } = wallet;
    console.log(currencies);
    return (
      <>
        <div>WalletForm</div>
        <form>
          <label htmlFor="valor">
            valor
            <input
              data-testid="value-input"
              type="number"
              name="valor"
              id="valor"
              min="1"
              step="any"
            />
          </label>

          <label htmlFor="description">
            descrição
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
            />
          </label>
          <label htmlFor="currencies">
            moeda
            <select
              name="currencies"
              id="currencies"
              data-testid="currency-input"
            >
              {currencies
                .map((currency) => <option key={ currency }>{ currency }</option>)}

            </select>

          </label>
          <label htmlFor="payMethod">
            método de pagamento
            <select
              name="payMethod"
              id="payMethod"
              data-testid="method-input"
            >
              <option
                value="cash"
              >
                Dinheiro
              </option>
              <option
                value="creditCard"
              >
                Cartão de crédito
              </option>
              <option
                value="debitCard"
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
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  requestAPI: () => dispatch(fetchCurrency()),
});

WalletForm.propTypes = {
  requestAPI: propTypes.string.isRequired,
  wallet: propTypes.shape({
    currencies: propTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
