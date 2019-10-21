import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;