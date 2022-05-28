import React from 'react';
import '../Styles/DropDownType.css';

function DropDownType({ type, setType }) {
  return (
    <div className='drop-down-type-container'>
        <select value={type} onChange={e => setType(e.target.value)}>     
            <option>Food</option>
            <option>Medicine</option>
            <option>Education</option>
            <option>Comunals</option>
            <option>Transport</option>
            <option>Other</option>
        </select>
    </div>
  )
}

export default DropDownType