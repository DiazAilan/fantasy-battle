import React, { useEffect, useState } from 'react';
import { ping } from './services/api';
import './App.scss';

function App() {
  const [pong, setPong] = useState('');

  useEffect(() => {
    ping().then(setPong);
  }, []);

  return (
    <div className="app-container">
      <h1>Fantasy Battle</h1>
      <p>Backend says: <b>{pong}</b></p>
    </div>
  );
}

export default App;
