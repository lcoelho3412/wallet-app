import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Table extends Component {
    deleteButton = (id) => {
      const { expenses, dispatch } = this.props;
      dispatch({ type: 'DELETE_EXPENSE',
        payload: expenses
          .filter((expense) => expense.id !== id) });
    };

    render() {
      const { expenses } = this.props;
      return (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {expenses.length > 0 && (
            <tbody>
              { expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{parseFloat(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>
                    {parseFloat(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                  </td>
                  <td>
                    {(parseFloat(expense.value)
       * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}

                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.deleteButton(expense.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          )}

        </table>
      );
    }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

Table.propTypes = {
  expenses: propTypes.shape(
    [],
  ),
  dispatch: propTypes.func,
}.isRequired;
export default connect(mapStateToProps)(Table);
