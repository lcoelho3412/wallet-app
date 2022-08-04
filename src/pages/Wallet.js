import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { history, user } = this.props;
    const { email } = user;
    console.log(user);

    return (
      <>
        <Header />

        <div
          history={ history }
        >
          TrybeWallet

        </div>
        <div>{ email }</div>

      </>
    );
  }
}

Wallet.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  user: propTypes.shape({
    email: propTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Wallet);
