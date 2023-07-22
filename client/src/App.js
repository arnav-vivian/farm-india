//import logo from './logo.svg';
//import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import Register from './pages/Registration';
//  hello this is testing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
