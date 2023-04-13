import './ExpenseDate.css'
import React from 'react';

 const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US',{month:'long'});
const year = props.date.getFullYear();
const day = props.date.toLocaleString("en-US",{day: '2-digit'});


  return (
    <div className='expense-date'>
    <div className='expense-date__month'>{month}&nbsp;</div>
    <div className='expense-date__day'>{day},  &nbsp;</div>
    <div className='expense-date__year'>{year}  &nbsp;</div>
    </div>
  )
}
export default ExpenseDate