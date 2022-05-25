import React from 'react';
import '../Styles/Expenses.css';

function Expenses({ expense, name, cost, deleteExpense }) {
  return (
    <div className='expense-element-container'>
        <p className='expense-name'>{name}</p>
        <div className='expense-details'>
            <p className='expense-amount'>${cost}</p>
            <button onClick={() => deleteExpense(expense.id)}>
              <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </div>
    </div>
  )
}

export default Expenses