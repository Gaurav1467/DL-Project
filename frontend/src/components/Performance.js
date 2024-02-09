import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement } from '../actions/userActions';

function Performance() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
      <div>
        Performance
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
  );
}

export default Performance