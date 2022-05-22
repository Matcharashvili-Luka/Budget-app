import React from 'react';
import '../Styles/BudgetElement.css';

function BudgetElement() {

    const widthOfProgressBar = (1050 / 1000) * 100;
    
  return (
    <div className='budget-element-container' style={{ backgroundColor: `${widthOfProgressBar > 100 ? 'rgba(255, 130, 136, .3)' : 'rgb(250, 250, 250)'}`}}>
        <div className='budget-element-header'>
            <p>Groceries</p>
            <p className='element-budget'>$250 <label> / $1,000 </label></p>
        </div>
        <div className='budget-element-progresive-bar'>
            <div style={{
                    width: `${widthOfProgressBar}%`,
                    backgroundColor: `${widthOfProgressBar >= 100 ? 'red' : widthOfProgressBar >= 75 ? 'yellow' : 'blue'}`
                }}
            >
            </div>
        </div>
        <div className='budget-element-buttons'>
            <button className='add-expense-tothe-budget-element'>Add Expense</button>
            <button className='view-the-expenses-ofthe-budget-element'>View Expenses</button>
        </div>
    </div>
  )
}

export default BudgetElement