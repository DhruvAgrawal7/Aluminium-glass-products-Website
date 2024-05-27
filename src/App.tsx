import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from './component/product_details/details';
import Home from './home/home';
function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/details" element={<Details />} />
            </Routes>
      </Router>
      
    </>
  );
}

export default App;
