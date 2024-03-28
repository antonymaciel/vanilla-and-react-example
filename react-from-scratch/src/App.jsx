import React, { useMemo } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

function App() {
  const result = useMemo(() => 1 + 2, []);

  return (
    <div className="App">
      App from scratch.
      {' '}
      {result}
    </div>
  );
}

export default hot(module)(App);
