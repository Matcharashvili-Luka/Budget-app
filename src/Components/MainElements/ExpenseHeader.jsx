import React from 'react';
import '../../Styles/ExpenseHeader.css'

function ExpenseHeader({ search, setSearch }) {
  return (
    <div className='expenses-container'>
        <div className='expenses-header'>
            Expenses
        </div>
        <div className='expenses-search-bar'>
            <input 
              type="text" 
              placeholder='Search Expense'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </div>
  )
}

export default ExpenseHeader