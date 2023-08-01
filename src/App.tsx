import { useState } from 'react';
import { greet } from 'wasm';

import reactLogo from './assets/react.svg';
import wasmLogo from './assets/wasm.svg';
import viteLogo from '/vite.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://webassembly.org" target="_blank" rel="noreferrer">
          <img src={wasmLogo} className="logo wasm" alt="WASM logo" />
        </a>
      </div>
      <h1>Vite + React + WASM</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => greet()}>hello wasm</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and WASM logos to learn more
      </p>
    </>
  );
}

export default App;
