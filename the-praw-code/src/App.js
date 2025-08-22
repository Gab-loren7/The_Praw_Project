import React from 'react'
import { BrowserRouter as Router , Routes, Route, BrowserRouter } from 'react-router-dom'
// npm install react-router-dom

import Home from '../src/pages/Home/Home';
import Empresa from './pages/Empresa/Empresa';

let App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/Empresa' element={<Empresa />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
