import React from 'react';
import '../Styles/TopBar.css';

function TopBar({ show, setShow }) {
  return (
    <div className='top-bar-container'>
       <p>Budgets</p> 
       <div>
           <button 
              className='add-budget-button'
              onClick={() => setShow(true)}
            >Add Budget</button>
           <button className='add-expense-button'>Add Expense</button>
       </div>
    </div>
  )
}

export default TopBar