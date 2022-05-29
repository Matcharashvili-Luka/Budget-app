import React from 'react';
import '../Styles/SetBudget.css'

function SetBudget({ showSetBudget, setShowSetBudget, budget, setBudget, setBudgetToStorage }) {
  return (
    <div 
      className='set-budget-container' 
      id={showSetBudget ? 'show-set-budget' : 'hide-set-budget'}
    >
        <div>
            <p>Budget Amount</p>
            <button onClick={() => setShowSetBudget(false)}>X</button>
        </div>
        <input 
            type="number" 
            placeholder='Budget'
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
        />
        <button className='set-budget-button' onClick={setBudgetToStorage}>Set Budget</button>
    </div>
  )
}

export default SetBudget