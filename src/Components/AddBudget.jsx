import React from 'react';
import '../Styles/AddBudget.css';

function AddBudget({ show, setShow, name, setName, amount, setAmount, addBudget }) {
  return (
    <div className= 'add-budget-container' id={show ? 'show-add-budget' : 'hide-add-budget'}>
        <div className='add-budget-header'>
            <p>New Budget</p>
            <p onClick={() => setShow(false)} className='close-add-budget'>X</p>
        </div>
        <div className='add-budget-inputs'>
            <div>
                <p>Name</p>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />   
            </div>
            <div>
                <p>Maximum Spending</p>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                />   
            </div>
        </div>
        <div className='add-budget-button-add'>
            <button onClick={addBudget}>Add</button>
        </div>
    </div>
  )
}

export default AddBudget