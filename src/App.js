import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Signup from './components/auth/Signup';
import CalendarList from './components/CalendarList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <CalendarList />
    </div>
  );
}

export default App;
