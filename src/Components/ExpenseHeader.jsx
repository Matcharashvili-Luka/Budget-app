import React from 'react';
import '../Styles/ExpenseHeader.css'

function ExpenseHeader() {
  return (
    <div className='expenses-container'>
        <div className='expenses-header'>
            Expenses
        </div>
        <div className='expenses-search-bar'>
            <input type="text" placeholder='Search Expense'/>
        </div>
    </div>
  )
}

export default ExpenseHeader