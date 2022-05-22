import React from 'react';
import '../Styles/TopBar.css';

function TopBar() {
  return (
    <div className='top-bar-container'>
       <p>Budgets</p> 
       <div>
           <button className='add-budget-button'>Add Budget</button>
           <button className='add-expense-button'>Add Expense</button>
       </div>
    </div>
  )
}

export default TopBar