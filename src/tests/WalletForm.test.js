import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Routes from '../routes'; 
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

describe('Tests if elements are present in the page', ()=> {
  it('tests if value input is present', () => {
    const { history } = renderWithRouterAndRedux(<Wallet />);
    const inputFormValue = screen.getByTestId('value-input');
    expect(inputFormValue).toBeInTheDocument();
  });

  it('tests if if expenses are filled', () => {
    const { history } = renderWithRouterAndRedux(<Wallet />);
    const inputForm = screen.getByTestId('value-input');
    const descriptionForm = screen.getByTestId('description-input');
    const currencyForm = screen.getByTestId('currency-input');
    const methodForm = screen.getByTestId('method-input');
    const tagForm = screen.getByTestId('tag-input');
    const addButton = screen.getByText('Adicionar despesa');
    userEvent.type(inputForm,'1000' )
    userEvent.type(descriptionForm,'uma descrição qualquer' )
    userEvent.type(currencyForm,'USD' )
    userEvent.type(methodForm,'Dinheiro' )
    userEvent.type(tagForm,'Saúde' )
    userEvent.click(addButton)

  });

  
});