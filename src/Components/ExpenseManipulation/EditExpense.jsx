import React from 'react';
import '../../Styles/EditExpense.css';

function EditExpense({ 
    newName, setNewName, newPrice, setNewPrice, newType, setNewType, setOpenEdit, saveEditedExpense 
}) {
  return (
    <div className='edit-expense'>
        <div className='edit-expense-header'> 
            <p>Edit Expense</p>
            <button onClick={() => setOpenEdit(false)}>X</button>
        </div>
        <div className='edit-expense-elements'>
            <div>
                <p>Name</p>
                <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />          
            </div>
            <div>
                <p>Cost</p>
                <input 
                    type="number" 
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                />
            </div>
            <div>
                <p>Type</p>
                <input 
                    type="text" 
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                />
            </div>
        </div>
        <div className='edit-expense-save-button-container'>
            <button 
                className='edit-expense-save-button'
                onClick={saveEditedExpense}
            >Save</button>
        </div>
    </div>
  )
}

export default EditExpense