import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import './App.css';

function App() {

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >Increment</button>
      <div>Count: {count}</div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >Decrement</button>
    </div>
  );
}

export default App;
