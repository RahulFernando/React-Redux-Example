import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.counter.value);

  return (
    <div className="App">
      <center>
        <h4>{value}</h4>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </center>
    </div>
  );
}

export default App;
