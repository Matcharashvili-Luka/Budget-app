import React, { useState } from 'react';
import '../../Styles/Expenses.css';
import EditExpense from '../ExpenseManipulation/EditExpense';

function Expenses({ 
  expense, name, cost, deleteExpense, type, expenses, setExpenses
}) {
  
  const [openEdit, setOpenEdit] = useState(false) // <-- open/close expense editor
  const [newName, setNewName] = useState(name)
  const [newPrice, setNewPrice] = useState(cost)
  const [newType, setNewType] = useState(type)

  function saveEditedExpense( expense ){
    setExpenses({...expense, name: newName, cost: newPrice})
  }

  return (
    <div className='expense-info-container'>
      <div className='expense-element-container'>
        <div className='expense-header'>
          <div className='expense-icon'>
            {type === 'Food' ? <i class="fa-solid fa-utensils"></i> : type === 'Health' ? <i class="fa-solid fa-star-of-life"></i> : type === 'Education' ? <i class="fa-solid fa-book-open"></i> : type === 'Comunals' ? <i class="fa-solid fa-lightbulb"></i> : type === 'Transport' ? <i class="fa-solid fa-car"></i> : type === 'Other' ? <i class="fa-solid fa-circle-notch"></i> : null}
          </div>
          <p className='expense-name'>{newName}</p>
        </div>
        <div className='expense-details'>
            <p className='expense-amount'>${newPrice}</p>
            <label 
              className='expense-edit' 
              onClick={() => setOpenEdit(true)} 
            >Edit</label>
            <button onClick={() => deleteExpense(expense.id)}>
              <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </div>
      </div>
      <div 
        className='edit-expense-container'
        id={openEdit ? 'open-edit-expense' : 'close-edit-expense'}
      >
        <EditExpense 
          name={name}
          cost={cost}
          type={type}
          setOpenEdit={setOpenEdit}
          newName={newName}
          setNewName={setNewName}
          newPrice={newPrice}
          setNewPrice={setNewPrice}
          newType={newType}
          setNewType={setNewType}
          saveEditedExpense={saveEditedExpense}
        />
      </div>
    </div>
  )
}

export default Expenses