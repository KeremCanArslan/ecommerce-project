import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Products.css';

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const user = localStorage.getItem('user');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/products/${category}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [category]);

  const addToCart = (productId) => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }
    axios.post(`${process.env.REACT_APP_API_URL}/api/cart?user=${user}`, { product_id: productId })
      .then(res => alert(res.data.message))
      .catch(err => alert("Error adding to cart"));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{category.toUpperCase()} Pianos</h1>
      <div className="row g-4">
        {products.map(p => (
          <div className="col-md-4" key={p.product_id}>
            <div className="card h-100 shadow-sm">
              <img src={p.image} className="card-img-top" alt={p.name} />
              <div className="card-body d-flex flex-column">
                <h5>{p.name}</h5>
                <p>${p.price}</p>
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(p.product_id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
