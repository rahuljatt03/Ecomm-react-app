

// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from React Icons
// import ROUTES from '../navigation/Routes'; // Assuming your routes are defined here

// function Header() {
//   const [user, setUser] = useState({ id: null, role: null });
//   const [cartItems, setCartItems] = useState([]); // Local state for cart items
//   const navigate = useNavigate();

//   // This effect runs on initial mount and whenever `localStorage` changes
//   useEffect(() => {
//     const id = localStorage.getItem("id");
//     const role = localStorage.getItem("role");
//     const savedCartItems = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage

//     if (id && role) {
//       setUser({ id, role });
//     } else {
//       setUser({ id: null, role: null });
//     }

//     // Set the cart items from localStorage to state
//     setCartItems(savedCartItems);
//   }, []);

//   function renderMenu() {
//     if (user?.role === "admin") {
//       return (
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link className='nav-link' to={ROUTES.universityAdmin.name}>
//               University Management
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className='nav-link' to={ROUTES.universityAdmin.name}>
//               User Management
//             </Link>
//           </li>
//           <li className="nav-item dropdown">
//             <Link className='nav-link' to={ROUTES.universityAdmin.name}>
//               Order Management
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className='nav-link' to={ROUTES.universityAdmin.name}>
//               Month Year
//             </Link>
//           </li>
//         </ul>
//       );
//     } else if (user?.id) {
//       return (
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link className='nav-link' to={ROUTES.home.name}>
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className='nav-link' to={ROUTES.about.name}>
//               About
//             </Link>
//           </li>
//           <li className="nav-item dropdown">
//             <Link className='nav-link' to={ROUTES.support.name}>
//               Support
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className='nav-link' to={ROUTES.contact.name}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link className='nav-link' to={ROUTES.home.name}>
//               Home
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   function renderButtons() {
//     if (user?.id) {
//       return (
//         <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
//           // Clear localStorage
//           localStorage.clear();
//           // Update state to reflect logout
//           setUser({ id: null, role: null });
//           // Navigate to login page
//           navigate(ROUTES.login.name);
//         }}>
//           LogOut
//         </button>
//       );
//     } else {
//       return (
//         <>
//           <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
//             localStorage.clear();
//             navigate(ROUTES.register.name);
//           }}>
//             Register
//           </button>
//           <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
//             localStorage.clear();
//             navigate(ROUTES.login.name);
//           }}>
//             Login
//           </button>
//         </>
//       );
//     }
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="collapse navbar-collapse">
//         {renderMenu()}

//         {/* Cart Icon with Badge */}
//         <div className="ml-auto d-flex align-items-center">
//           <Link to={ROUTES.productUser.name} className="nav-link d-flex align-items-center">
//             <FaShoppingCart size={24} /> {/* Cart Icon */}
//             {cartItems.length > 0 && (
//               <span className="badge badge-pill badge-danger ml-1">{cartItems.length}</span>
//             )}
//           </Link>

//           {/* Render Login/Register or Logout button */}
//           {renderButtons()}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;






import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from React Icons
import ROUTES from '../navigation/Routes'; // Assuming your routes are defined here

function Header() {
  const [user, setUser] = useState({ id: null, role: null });
  const [cartItems, setCartItems] = useState([]); // Local state for cart items
  const navigate = useNavigate();

  // This effect runs on initial mount and whenever `localStorage` changes
  useEffect(() => {
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage

    if (id && role) {
      setUser({ id, role });
    } else {
      setUser({ id: null, role: null });
    }

    // Set the cart items from localStorage to state
    setCartItems(savedCartItems);
  }, []);

  function renderMenu() {
    if (user?.role === "admin") {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className='nav-link' to={ROUTES.universityAdmin.name}>
              University Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={ROUTES.universityAdmin.name}>
              User Management
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className='nav-link' to={ROUTES.universityAdmin.name}>
              Order Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={ROUTES.universityAdmin.name}>
              Month Year
            </Link>
          </li>
        </ul>
      );
    } else if (user?.id) {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className='nav-link' to={ROUTES.home.name}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={ROUTES.about.name}>
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className='nav-link' to={ROUTES.support.name}>
              Support
            </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={ROUTES.contact.name}>
              Contact
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className='nav-link' to={ROUTES.home.name}>
              Home
            </Link>
          </li>
        </ul>
      );
    }
  }

  function renderButtons() {
    if (user?.id) {
      return (
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
          // Clear localStorage
          localStorage.clear();
          // Update state to reflect logout
          setUser({ id: null, role: null });
          // Navigate to login page
          navigate(ROUTES.login.name);
        }}>
          LogOut
        </button>
      );
    } else {
      return (
        <>
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
            localStorage.clear();
            navigate(ROUTES.register.name);
          }}>
            Register
          </button>
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
            localStorage.clear();
            navigate(ROUTES.login.name);
          }}>
            Login
          </button>
        </>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        {renderMenu()}

        {/* Cart Icon with Badge */}
        <div className="ml-auto d-flex align-items-center">
          <Link to={ROUTES.cart.name} className="nav-link d-flex align-items-center"> {/* Update to ROUTES.cart.name */}
            <FaShoppingCart size={24} /> {/* Cart Icon */}
            {cartItems.length > 0 && (
              <span className="badge badge-pill badge-danger ml-1">{cartItems.length}</span>
            )}
          </Link>

          {/* Render Login/Register or Logout button */}
          {renderButtons()}
        </div>
      </div>
    </nav>
  );
}

export default Header;




