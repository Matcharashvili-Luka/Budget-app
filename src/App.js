import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseHeader from './Components/ExpenseHeader';
import TopBar from './Components/TopBar';
import Expenses from './Components/Expenses';
import AddExpense from './Components/AddExpense';
import SetBudget from './Components/SetBudget';

function App() {

  const [showAddExp, setShowAddExp] = useState(false);
  const [showSetBudget, setShowSetBudget] = useState(false);
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('ExpenseElements')) || []);
  const [expName, setExpName] = useState('');
  const [expCost, setExpCost] = useState('');
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('Budget')) || ''); 
  const [type, setType] = useState(); // <-- to select type
  const [search, setSearch] = useState('');

  
  useEffect(() => {
    localStorage.setItem('ExpenseElements', JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(){
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: expenses.length + 1, name: expName, cost: expCost * 1, type: type }]
    });
    setExpName('');
    setExpCost('');
  };

  const deleteExpense = (exp) => {
    setExpenses(expenses.filter((element) => element.id !== exp))
  };

  function setBudgetToStorage(){
    localStorage.setItem('Budget', JSON.stringify(budget));
    setShowSetBudget(false)
  };

  const sumOfExpCost = expenses.reduce((a, b) => {return a += b.cost}, 0);
  const remaining = budget * 1 - sumOfExpCost;
  const progressBar = (sumOfExpCost / (budget * 1)) * 100;

  return (
    <div  className='App' style={{ backgroundColor: `${progressBar > 100 ? 'rgba(255,0,0,.2)' : ''}`}}>
      <div className={showAddExp || showSetBudget ? 'filter-blur-on' : ''}> 
        <TopBar 
          showAddExp={showAddExp}
          setShowAddExp={setShowAddExp}
          expenses={expenses}
          setShowSetBudget={setShowSetBudget}
          budget={budget}
          sumOfExpCost={sumOfExpCost}
          remaining={remaining}
          progressBar={progressBar}
        /> 
        <ExpenseHeader 
          search={search}
          setSearch={setSearch}
        />
        <div className='expense-div'> 
          {expenses.filter((expense) =>{
            if(search === ''){
              return expense
            }else if(expense.name.toLowerCase().includes(search.toLowerCase())){
              return expense
            }else if(expense.type.toLowerCase().includes(search.toLowerCase())){
              return expense
            }
          }).map((element) => {
            return (
              <Expenses 
                expense={element}
                key={element.id}
                name={element.name}
                cost={element.cost}
                deleteExpense={deleteExpense}
                type={element.type}
              />
              )
            })
          }  
        </div>
      </div>
      <div className='app-components'>
        <AddExpense 
          showAddExp={showAddExp}
          setShowAddExp={setShowAddExp}
          expName={expName}
          setExpName={setExpName}
          expCost={expCost}
          setExpCost={setExpCost}
          addExpense={addExpense}
          type={type}
          setType={setType}
        />
        <SetBudget 
          showSetBudget={showSetBudget}
          setShowSetBudget={setShowSetBudget}
          budget={budget}
          setBudget={setBudget}
          setBudgetToStorage={setBudgetToStorage}
        />
      </div>
    </div>
  )
}

export default App;
