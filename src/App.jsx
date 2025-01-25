import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for BrowserRouter and Routes
import Home from './Pages/Home';
import Header from './component/Header';
import Order from './Pages/Order';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import Brand from './Pages/Brand';
import Itemlike from './Pages/Itemlike';

const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/store' element={<Store />} />
          <Route path='/favorites' element={<Itemlike />} />
        </Routes>
        
      </Router>
    </div>
  );
};

export default App;
