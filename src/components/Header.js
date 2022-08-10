import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;
    const { wallet } = this.props;
    const { email } = user;
    const { expenses } = wallet;

    const reduceExpenses = expenses
      .reduce((acc, curr) => acc + (+curr
        .exchangeRates[curr.currency].ask * +curr.value), 0);

    return (
      <>
        <div>
          <h1>TrybeWallet</h1>
        </div>
        <div>
          <p data-testid="email-field">
            { email }
          </p>
        </div>
        <div>
          <p data-testid="header-currency-field">BRL</p>
          <p data-testid="total-field">
            { reduceExpenses.toFixed(2) }
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  user: propTypes.shape({
    email: propTypes.string.isRequired,
  }).isRequired,
  wallet: propTypes.shape({
    expenses: propTypes.string.isRequired,
  }).isRequired,
};
