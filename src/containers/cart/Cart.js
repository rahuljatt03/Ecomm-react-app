import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';  // Adjusted for your file structure
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../navigation/Routes';  // Adjusted for your file structure

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [formError, setFormError] = useState({ quantity: "", name: "", phone: "", address: "", postalCode: "", pickUpPlace: "" });
  const [itemId, setItemId] = useState(null);
  const [form, setForm] = useState({ quantity: "", name: "", phone: "", address: "", postalCode: "", pickUpPlace: "" });
  const [showOrderForm, setShowOrderForm] = useState(false);  // To toggle the order form visibility
  const [isCustomAddress, setIsCustomAddress] = useState(false);  // Flag to toggle between predefined and custom address
  const navigate = useNavigate();

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateCartItem = (id) => {
    try {
      let updatedCart = [...cartItems];
      updatedCart = updatedCart.map((item) => 
        item.productId === id ? { ...item, quantity: form.quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      alert("Cart item updated");
      setItemId(null);  // Reset the itemId after update
      setForm({ quantity: "" });
    } catch (error) {
      alert('Unable to update cart item');
    }
  };

  const removeCartItem = (id) => {
    try {
      let updatedCart = cartItems.filter((item) => item.productId !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      alert("Item removed from cart");
    } catch (error) {
      alert('Unable to remove item from cart');
    }
  };

  const handleQuantityChange = (e) => {
    setForm({ ...form, quantity: e.target.value });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const onItemSubmit = () => {
    let errors = false;
    let error = { quantity: "" };
    if (form.quantity <= 0) {
      errors = true;
      error = { ...error, quantity: "Please enter a valid quantity." };
    }
    if (errors) {
      setFormError(error);
    } else {
      setFormError(error);
      updateCartItem(itemId);
    }
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <tr key={item.productId}>
        <td>
          <img src={"http://localhost:8082/" + item.image} alt={item.name} height="100px" width="100px" />
        </td>
        <td>{item.name}</td>
        <td>
          <input
            type="number"
            name="quantity"
            value={itemId === item.productId ? form.quantity : item.quantity}
            min="1"
            onChange={handleQuantityChange}
            disabled={itemId !== item.productId}
            className="form-control"
          />
          <p className="text-danger">{formError.quantity}</p>
        </td>
        <td>
          <button className="btn btn-info" onClick={() => {
            setItemId(item.productId);
            setForm({ quantity: item.quantity });
          }}>
            Edit Quantity
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => removeCartItem(item.productId)}>
            Remove
          </button>
        </td>
      </tr>
    ));
  };

  const handleOrderFormSubmit = () => {
    let errors = false;
    let error = { name: "", phone: "", address: "", postalCode: "", pickUpPlace: "" };

    if (form.name.trim() === "") {
      errors = true;
      error.name = "Name is required.";
    }
    if (form.phone.trim() === "") {
      errors = true;
      error.phone = "Phone number is required.";
    }
    if (form.address.trim() === "" || (form.address === "Custom" && !form.customAddress.trim())) {
      errors = true;
      error.address = "Please enter a valid address.";
    }
    if (form.postalCode.trim() === "") {
      errors = true;
      error.postalCode = "Postal code is required.";
    }
    if (form.pickUpPlace.trim() === "") {
      errors = true;
      error.pickUpPlace = "Pick-up place is required.";
    }

    if (errors) {
      setFormError(error);
    } else {
      setFormError({});
      // Submit order details (you can send them to your API here)
      alert("Order placed successfully!");
      localStorage.removeItem('cart');
      setCartItems([]);
      navigate(ROUTES.orderPlaced.name);  // Navigate to the order-placed page
    }
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="card text-center mx-auto">
          <div className="card-header bg-info text-white">
            Cart
          </div>
          <div className="card-body mx-auto">
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Edit Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {renderCartItems()}
              </tbody>
            </table>
            <div className="total">
              <h3>Total: ${calculateTotal()}</h3>
              <button className="btn btn-primary" onClick={() => setShowOrderForm(true)}>
                Click here To Proceed
              </button>
            </div>

            {/* Order Form - Displayed after clicking "Proceed" */}
            {showOrderForm && (
              <div className="order-form mt-4">
                <h4>Enter Your Details</h4>
                <div className="form-group row">
                  <label className="col-4">Name</label>
                  <div className="col-8">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={form.name}
                      onChange={changeHandler}
                      placeholder="Enter your name"
                    />
                    <p className="text-danger">{formError.name}</p>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4">Phone Number</label>
                  <div className="col-8">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={form.phone}
                      onChange={changeHandler}
                      placeholder="Enter your phone number"
                    />
                    <p className="text-danger">{formError.phone}</p>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4">Address</label>
                  <div className="col-8">
                    <select
                      name="address"
                      className="form-control"
                      value={form.address}
                      onChange={(e) => {
                        setForm({ ...form, address: e.target.value });
                        setIsCustomAddress(e.target.value === "Custom");
                      }}
                    >
                      <option value="">Select an address</option>
                      <option value="Custom">Add Custom Address</option>
                    </select>
                    {isCustomAddress && (
                      <input
                        type="text"
                        name="customAddress"
                        className="form-control mt-2"
                        value={form.customAddress || ""}
                        onChange={changeHandler}
                        placeholder="Enter your custom address"
                      />
                    )}
                    <p className="text-danger">{formError.address}</p>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4">Postal Code</label>
                  <div className="col-8">
                    <input
                      type="text"
                      name="postalCode"
                      className="form-control"
                      value={form.postalCode}
                      onChange={changeHandler}
                      placeholder="Enter your postal code"
                    />
                    <p className="text-danger">{formError.postalCode}</p>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-4">Pick-Up Place</label>
                  <div className="col-8">
                    <input
                      type="text"
                      name="pickUpPlace"
                      className="form-control"
                      value={form.pickUpPlace}
                      onChange={changeHandler}
                      placeholder="Enter pick-up place"
                    />
                    <p className="text-danger">{formError.pickUpPlace}</p>
                  </div>
                </div>
                <button className="btn btn-success" onClick={handleOrderFormSubmit}>
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;












// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';  // Go up one directory (from cart) to src, then into components
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ROUTES from '../../navigation/Routes';  // Go up one directory (from cart) to src, then into navigation


// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [formError, setFormError] = useState({ quantity: "" });
//   const [itemId, setItemId] = useState(null);
//   const [form, setForm] = useState({ quantity: "" });
//   const navigate = useNavigate();

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCart);
//   }, []);

//   const changeHandler = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const updateCartItem = (id) => {
//     try {
//       let updatedCart = [...cartItems];
//       updatedCart = updatedCart.map((item) => 
//         item.productId === id ? { ...item, quantity: form.quantity } : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       setCartItems(updatedCart);
//       alert("Cart item updated");
//       setItemId(null);  // Reset the itemId after update
//       setForm({ quantity: "" });
//     } catch (error) {
//       alert('Unable to update cart item');
//     }
//   };

//   const removeCartItem = (id) => {
//     try {
//       let updatedCart = cartItems.filter((item) => item.productId !== id);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       setCartItems(updatedCart);
//       alert("Item removed from cart");
//     } catch (error) {
//       alert('Unable to remove item from cart');
//     }
//   };

//   const handleQuantityChange = (e) => {
//     setForm({ ...form, quantity: e.target.value });
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   const onItemSubmit = () => {
//     let errors = false;
//     let error = { quantity: "" };
//     if (form.quantity <= 0) {
//       errors = true;
//       error = { ...error, quantity: "Please enter a valid quantity." };
//     }
//     if (errors) {
//       setFormError(error);
//     } else {
//       setFormError(error);
//       updateCartItem(itemId);
//     }
//   };

//   const renderCartItems = () => {
//     return cartItems.map((item) => (
//       <tr key={item.productId}>
//         <td>
//           <img src={"http://localhost:8082/" + item.image} alt={item.name} height="100px" width="100px" />
//         </td>
//         <td>{item.name}</td>
//         <td>
//           <input
//             type="number"
//             name="quantity"
//             value={itemId === item.productId ? form.quantity : item.quantity}
//             min="1"
//             onChange={handleQuantityChange}
//             disabled={itemId !== item.productId}
//             className="form-control"
//           />
//           <p className="text-danger">{formError.quantity}</p>
//         </td>
//         <td>
//           <button className="btn btn-info" onClick={() => {
//             setItemId(item.productId);
//             setForm({ quantity: item.quantity });
//           }}>
//             Edit Quantity
//           </button>
//         </td>
//         <td>
//           <button className="btn btn-danger" onClick={() => removeCartItem(item.productId)}>
//             Remove
//           </button>
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <>
//       <Header />
//       <div className="row">
//         <div className="card text-center mx-auto">
//           <div className="card-header bg-info text-white">
//             Cart
//           </div>
//           <div className="card-body mx-auto">
//             <table className="table table-bordered table-striped table-hover">
//               <thead>
//                 <tr>
//                   <th>Product Image</th>
//                   <th>Product Name</th>
//                   <th>Quantity</th>
//                   <th>Edit Quantity</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {renderCartItems()}
//               </tbody>
//             </table>
//             <div className="total">
//               <h3>Total: ${calculateTotal()}</h3>
//               <button className="btn btn-primary" onClick={() => alert('Proceed')}>
//                 Click here To Proceed
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;
