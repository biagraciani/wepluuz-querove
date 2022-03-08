import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';


const Root = () => {
  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/filme" element={<Home/>}/>
        </Routes>
    </Router>
  );
};

export default Root;
