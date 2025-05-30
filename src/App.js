import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">🎹 ePiano</Link>
          <div className="d-flex align-items-center">
            <Link className="btn btn-outline-light me-3" to="/cart">🛒 Cart</Link>
            {user ? (
              <div className="d-flex align-items-center text-white">
                <span className="me-3">👤 {user}</span>
                <button className="btn btn-sm btn-danger" onClick={handleLogout}>Log out</button>
              </div>
            ) : (
              <>
                <Link className="btn btn-outline-success me-2" to="/login">Login</Link>
                <Link className="btn btn-outline-warning" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
