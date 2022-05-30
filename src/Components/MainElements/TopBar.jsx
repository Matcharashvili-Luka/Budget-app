import React from 'react';
import '../../Styles/TopBar.css';

function TopBar({ setShowAddExp, setShowSetBudget, expenses, budget, sumOfExpCost, remaining, progressBar }) {

  return (
    <div className='top-bar-container'>
        <div className='top-bar-header'>
            <p>My Budget</p>
            <button onClick={() => setShowAddExp(true)}>Add Expense</button>
        </div>
        <div className='top-bar-elements'>
            <div 
                className='top-bar-budget-element'
                style={{ opacity: `${progressBar > 95 ? '.7' : '1'}`}}
            >
                <p>Budget: {budget ? `$ ${budget}` : 0}</p>
                <button onClick={() => setShowSetBudget(true)}>Edit</button>
            </div>
            <div 
                style={{ backgroundColor: `${progressBar > 95 ? 'red' : progressBar > 75 ? 'yellow' : ''}`, color:`${progressBar > 95 ? '#fff' : ''}`}}
            >
                <p>Remaining: {remaining ? `$ ${remaining}` : 0}</p>
            </div>
            <div
                style={{ opacity: `${progressBar > 95 ? '.7' : '1'}`}}
            >
                <p>Spent so far: {sumOfExpCost ? `$ ${sumOfExpCost}` : 0}</p>
            </div>
        </div>
        <div className='top-bar-progress-bar'>
            <div 
                className='inner-progress-bar'
                style={{
                    width: `${progressBar}%`,
                    backgroundColor: `${progressBar >= 95 ? 'red' : progressBar >= 75 ? 'yellow' : 'rgb(58, 94, 255)'}`
                }}
            ></div>
        </div>
    </div>
  )
}

export default TopBar