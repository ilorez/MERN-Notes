import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount
} from '../state/counter/counterSlice';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{counter}</h2>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          increment by 10
        </button>
        <button onClick={() => dispatch(incrementAsync(100))}>
          Async increment by 100
        </button>
      </div>
    </div>
  );
};

export default Counter;
