import React, { useState } from 'react';
import './App.css';
import AddBudget from './Components/AddBudget';
import BudgetElement from './Components/BudgetElement';
import TopBar from './Components/TopBar';

function App() {

  const [show, setShow] = useState(false);
  const [budget, setBudget] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  // {
  //   id: 1;
  //   Name: x;
  //   amount: y;
  // }

  // function addBudget(){
  //   if(budget.length === 0){

  //   }else{
  //     setBudget(...budget, {id: 1, name: name, amount: amount})
  //   }
  // }

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
        />
      </div>
      
    </div>
  );
}

export default App;
