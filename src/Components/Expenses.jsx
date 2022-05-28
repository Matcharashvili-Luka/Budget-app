import React from 'react';
import '../Styles/Expenses.css';

function Expenses({ expense, name, cost, deleteExpense, type }) {
  return (
    <div className='expense-element-container'>
      <div className='expense-header'>
        <div className='expense-icon'>
          {type === 'Food' ? <i class="fa-solid fa-utensils"></i> : type === 'Medicine' ? <i class="fa-solid fa-star-of-life"></i> : type === 'Education' ? <i class="fa-solid fa-book-open"></i> : type === 'Comunals' ? <i class="fa-solid fa-lightbulb"></i> : type === 'Transport' ? <i class="fa-solid fa-car"></i> : type === 'Other' ? <i class="fa-solid fa-circle-notch"></i> : null}
        </div>
        <p className='expense-name'>{name}</p>
      </div>
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