import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">🎹 Welcome to ePiano 🎹</h1>
      <div className="row text-center mt-5">
        <div className="col-md-4 mb-3">
          <Link to="/products/cheap" className="category-card cheap">
            <h2>Cheap Pianos</h2>
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/products/medium" className="category-card medium">
            <h2>Medium Pianos</h2>
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/products/expensive" className="category-card expensive">
            <h2>Expensive Pianos</h2>
          </Link>
        </div>
      </div>

      <div className="container my-5">
        <div className="alert alert-info shadow">
          <h4 className="alert-heading">🎶 About Pianos 🎶</h4>
          <p>
            The piano is one of the most popular and versatile musical instruments in the world.
            Invented in the early 18th century, it has been used by composers and musicians across genres, from classical to jazz to pop.
          </p>
          <p>
            At ePiano, we believe everyone deserves the joy of music. Whether you're a beginner or a seasoned player,
            a piano brings harmony to your life. Explore our collection of acoustic and digital pianos and start your musical journey today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
