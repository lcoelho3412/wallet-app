import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Routes from '../routes'; 
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

describe('Tests Login page', () => {
  it('tests if the user is redirected to wallet page when logged in', async () => {
    const { history } = renderWithRouterAndRedux(<Routes />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const buttonInput = screen.getByTestId('btn-login');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(buttonInput);
    await waitFor(() => {
      const route = history.location.pathname;
      const userName = screen.queryByTestId("email-field");
      expect(route).toBe('/');
      expect(userName).toBeInTheDocument();
    })

  });
});