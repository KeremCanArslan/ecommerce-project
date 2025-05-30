import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const user = localStorage.getItem('user');

  const fetchCart = useCallback(() => {
    if (!user) return;
    axios.get(`https://epiano-backend-a3ckfadbhjccg3av.westeurope-01.azurewebsites.net/api/cart?user=${user}`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));
  }, [user]);

  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    fetchCart();
  }, [fetchCart, user]);

  const removeFromCart = (productId) => {
    axios.delete(`https://epiano-backend-a3ckfadbhjccg3av.westeurope-01.azurewebsites.net/api/cart?user=${user}`, { data: { product_id: productId } })
      .then(() => fetchCart())
      .catch(err => console.error(err));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🛒 My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4 shadow-sm">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name || `ID: ${item.product_id}`}</h5>
                  <p>${item.price || "N/A"}</p>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.product_id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="alert alert-success fs-5 text-end shadow">
            <strong>Total:</strong> ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;