

// import React, { useEffect, useState } from 'react';
// import Header from '../../../components/Header';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// function useQuery() {
//   const { search } = useLocation();
//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

// function ProductDetil() {
//   const [productDet, setProductDet] = useState(null);
//   const [quantity, setQuantity] = useState(1); // Add state for quantity
//   const navigate = useNavigate();
//   const query = useQuery();

//   // Function to get product details from the API
//   function getProductDetil() {
//     const productId = query.get("id");
//     if (!productId) {
//       console.error("Product ID is missing in the URL");
//       return;
//     }

//     axios
//       .get("http://localhost:8082/productDetail?id=" + productId)
//       .then((d) => {
//         if (d.data && d.data.prdData) {
//           setProductDet(d.data.prdData);
//         } else {
//           console.error("Product details not found in response", d);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//         alert("Unable to access product details. Please try again.");
//       });
//   }

//   // Function to render product images
//   function renderImages() {
//     return productDet?.images.map((item, index) => {
//       return (
//         <img
//           key={index}
//           src={"http://localhost:8082/" + item}
//           height="150px"
//           width="150px"
//           alt={`Product image ${index + 1}`} // Add alt text for accessibility
//         />
//       );
//     });
//   }

//   // Function to handle changes in quantity input
//   function handleQuantityChange(e) {
//     setQuantity(e.target.value);
//   }

//   // Fetch product details on component mount
//   useEffect(() => {
//     getProductDetil();
//   }, []); // Empty dependency array ensures this runs only once when the component mounts

//   return (
//     <>
//       <Header />
//       <div className="row p-2 m-2">
//         <div className="card mx-auto">
//           <div style={{ display: "flex", flexDirection: "row" }}>
//             {renderImages()}
//           </div>
//           <div className="card-body">
//             <h5 className="card-title">Product Name: {productDet?.name}</h5>
//             <h5 className="card-title">Product Description: {productDet?.description}</h5>
//             <h5 className="card-title">Product Price: {productDet?.price}</h5>
//             <h5 className="card-title">
//               Product Qty:
//               <input
//                 type="number"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 min="1"
//                 max={productDet?.qty || 10} // Set a max quantity based on available stock
//               />
//             </h5>
//             <a href="#" className="btn btn-primary">
//               Add to Cart
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductDetil;




import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ProductDetil() {
  const [productDet, setProductDet] = useState(null);
  const [quantity, setQuantity] = useState(1); // Add state for quantity
  const navigate = useNavigate();
  const query = useQuery();

  // Function to get product details from the API
  function getProductDetil() {
    const productId = query.get("id");
    if (!productId) {
      console.error("Product ID is missing in the URL");
      return;
    }

    axios
      .get("http://localhost:8082/productDetail?id=" + productId)
      .then((d) => {
        if (d.data && d.data.prdData) {
          setProductDet(d.data.prdData);
        } else {
          console.error("Product details not found in response", d);
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        alert("Unable to access product details. Please try again.");
      });
  }

  // Function to render product images
  function renderImages() {
    return productDet?.images.map((item, index) => {
      return (
        <img
          key={index}
          src={"http://localhost:8082/" + item}
          height="150px"
          width="150px"
          alt={`Product image ${index + 1}`} // Add alt text for accessibility
        />
      );
    });
  }

  // Function to handle changes in quantity input
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  // Function to handle adding product to cart
  function handleAddToCart() {
    if (!productDet) return;

    const cartItem = {
      productId: productDet._id,
      name: productDet.name,
      price: productDet.price,
      quantity,
      image: productDet.images[0], // Assuming the first image is the primary one
    };

    // Get existing cart from localStorage or initialize as empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.productId === cartItem.productId);

    if (existingProductIndex !== -1) {
      // If product already in cart, update the quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // If product is not in cart, add new product to the cart
      cart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert('Product added to cart!');
  }

  // Fetch product details on component mount
  useEffect(() => {
    getProductDetil();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <Header />
      <div className="row p-2 m-2">
        <div className="card mx-auto">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {renderImages()}
          </div>
          <div className="card-body">
            <h5 className="card-title">Product Name: {productDet?.name}</h5>
            <h5 className="card-title">Product Description: {productDet?.description}</h5>
            <h5 className="card-title">Product Price: ${productDet?.price}</h5>
            <h5 className="card-title">
              Product Qty:
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={productDet?.qty || 10} // Set a max quantity based on available stock
              />
            </h5>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetil;


