import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-video" element={<NewVideo />} />
    </Routes>
<Footer />
  </Router>
);

export default App;
