/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const renderDataChildren = (props) => {
  console.log("props", props);
  
  return (props.list) ? <div>
    {props.list.map(item => <div >{item.name}</div>  )}
  </div> : null;
}  

const Counter = ({data,  onIncrementAsync, onIncrement, onDecrement, onFetch1 }) => {
  console.log("data in Counter", data);
  

  return <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <button onClick={onFetch1}>Fetch test data</button>
    <hr />
    <div>
      Clicked: {data.counter} times
    </div>
    <div>
      Fetched data = {renderDataChildren(data.data)}  
    </div>
  </div>
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

export default Counter
