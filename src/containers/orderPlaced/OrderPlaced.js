// src/containers/orderPlaced/OrderPlaced.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../navigation/Routes';  // Adjust based on your file structure

function OrderPlaced() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.home.name);  // Redirects to home page
  };

  return (
    <div className="order-placed-page text-center">
      {/* You can replace the 'src' with the actual path to your image */}
      <img 
        src="https://via.placeholder.com/500x300?text=Order+Placed+%F0%9F%98%8A" 
        alt="Order Placed"
        className="img-fluid mb-4"  // Bootstrap class for responsive image
      />
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your order. We will process it shortly.</p>
      <button className="btn btn-primary" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
}

export default OrderPlaced;

