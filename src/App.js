// App.js

import React, { useState } from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); 
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">TODO</div>
        <div className="dark-mode-toggle">
          <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </nav>
      <TodoWrapper />
    </div>
  );
}

export default App;
