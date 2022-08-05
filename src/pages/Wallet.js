import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <>
        <Header />

        <div
          history={ history }
        >
          TrybeWallet

        </div>

      </>
    );
  }
}

Wallet.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Wallet);
