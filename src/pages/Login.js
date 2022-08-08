import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    submitDisabled: true,
  }

  EmailValidation = () => {
    const emailFormat = /\S+@\S+\.\S+/;
    const minCharacters = 6;
    const { email, password } = this.state;
    if (password.length >= minCharacters && emailFormat.test(email)) {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value,
    }, () => { this.EmailValidation(); });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch({ type: 'LOGIN_SUCCESS', payload: { email } });
    history.push('/carteira');
  }

  render() {
    const { email, password, submitDisabled } = this.state;
    return (
      <>
        <h1>Login</h1>
        <div className="form">
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="email-input">
              <input
                type="text"
                name="email"
                data-testid="email-input"
                id="email-input"
                value={ email }
                onChange={ this.handleChange }
              />
              Email
            </label>
            <label htmlFor="password">
              <input
                type="text"
                name="password"
                data-testid="password-input"
                id="password"
                value={ password }
                onChange={ this.handleChange }
              />
              Senha
            </label>
            <button
              type="submit"
              disabled={ submitDisabled }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>

          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (user) => user;

Login.propTypes = {
  dispatch: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps)(Login);
