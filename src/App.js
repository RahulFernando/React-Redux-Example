import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './reducers/counter';

function App() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.counter.value);

  return (
    <div className="App">
      <center>
        <h4>{value}</h4>
        <button onClick={() => dispatch(decrease())}>-</button>
        <button onClick={() => dispatch(increase())}>+</button>
      </center>
    </div>
  );
}

export default App;
