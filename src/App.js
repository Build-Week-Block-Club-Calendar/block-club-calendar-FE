import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

export default App;