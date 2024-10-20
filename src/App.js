
import './App.css';
import Counter from './components/Counter';
import { useContext } from 'react';
import { CounterContext } from './context/CounterContext';

function App() {
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
