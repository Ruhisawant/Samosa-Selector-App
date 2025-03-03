import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOs_eL2XrfmvC9Kx_5-PuIh5LQAdBD47B_A&s" alt="samosa img" onClick={updateCount}/>
      </div>
    </div>
  )
}

export default App