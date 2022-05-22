import React, { useState, useEffect } from 'react';
import './App.css';
import AddBudget from './Components/AddBudget';
import BudgetElement from './Components/BudgetElement';
import TopBar from './Components/TopBar';

function App() {

  const [show, setShow] = useState(false);
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('BudgetElements')) || []);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem('BudgetElements', JSON.stringify(budget));
  }, [budget]);

  // {
  //   id: 1;
  //   Name: x;
  //   amount: y;
  // }

  function addBudget(){
    setBudget((prevBudget) => {
      if(prevBudget.find(budget => budget.name === name)){
        return prevBudget
      }
      return [...prevBudget, {id: budget.length + 1, name: name, amount: amount}]
    });
    setShow(false);
    setName('');
    setAmount(0)
  };

  return (
    <div className="App">
      <div  className={show ? 'blur' : ''}>
        <TopBar 
          show={show}
          setShow={setShow}
        />
        <BudgetElement />
      </div>
      <div className='add-budget-class'>
        <AddBudget 
          show={show}
          setShow={setShow}
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          addBudget={addBudget}
        />
      </div>
      
    </div>
  );
}

export default App;
