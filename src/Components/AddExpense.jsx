import React from 'react';
import '../Styles/AddExpense.css';

function AddExpense({ showAddExp, setShowAddExp, expName, setExpName, expCost, setExpCost, addExpense }) {
  return (
    <div className='add-expense-container' id={showAddExp ? 'show-add-expense' : 'hide-add-expense'}>
        <div className='add-expense-header'>
            <p>Add Expense</p>
            <button onClick={() => setShowAddExp(false)}>X</button>
        </div>
        <div className='add-expense-components'>
            <div>
                <p>Name</p>
                <input 
                    type="text" 
                    placeholder='Expense Name' 
                    required
                    value={expName}
                    onChange={(i) => setExpName(i.target.value)}
                />
            </div>
            <div>
                <p>Amount</p>
                <input 
                    type='number' 
                    min='0' 
                    placeholder='Expense Amount' 
                    required
                    value={expCost}
                    onChange={(e) => setExpCost(e.target.value)}
                />
            </div>
            <div className='add-expense-button'>
                <button onClick={addExpense}>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default AddExpense