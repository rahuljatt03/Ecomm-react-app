
// import About from "../containers/about/About";
// import Department from "../containers/admin/department/Department";
// import Product from "../containers/admin/product/Product";
// import University from "../containers/admin/university/University";
// import Contact from "../containers/contact/Contact";
// import Login from "../containers/login/Login";
// import Register from "../containers/register/Register";
// import Support from "../containers/support/Support";
// import DepartmentUser from "../containers/user/departmentUser/DepartmentUser";
// import Home from "../containers/user/home/Home";
// import ProductDetail from "../containers/user/productDetail/ProductDetail";
// import ProductUser from "../containers/user/productUser/ProductUser";


// const ROUTES = {
//   about: {
//     name: "/about",
//     component: <About />,
//   },
//   contact: {
//     name: "/contact",
//     component: <Contact />,
//   },
//   support: {
//     name: "/support",
//     component: <Support />,
//   },
//   login: {
//     name: "/login",
//     component: <Login />,
//   },
//   register: {
//     name: "/register",
//     component: <Register />,
//   },
//   universityAdmin: {
//     name: "/universityAdmin",
//     component: <University />,
//   },
//   departmentAdmin: {
//     name: "/departmentAdmin",
//     component: <Department />,
//   },
//   productAdmin: {
//     name: "/productAdmin",
//     component: <Product />,
//   },
//   home: {
//     name: "/",
//     component: <Home />,
//   },
//   departmentUser: {
//     name: "/departmentUser",
//     component: <DepartmentUser />,
//   },
//   productUser: {
//     name: "/productUser",
//     component: <ProductUser />,
//   },
//   productDetail: {
//     name: "/productDetail",
//     component: <ProductDetail />,
//   },
// };

// export default ROUTES;




import About from "../containers/about/About";
import Department from "../containers/admin/department/Department";
import Product from "../containers/admin/product/Product";
import University from "../containers/admin/university/University";
import Contact from "../containers/contact/Contact";
import Login from "../containers/login/Login";
import Register from "../containers/register/Register";
import Support from "../containers/support/Support";
import DepartmentUser from "../containers/user/departmentUser/DepartmentUser";
import Home from "../containers/user/home/Home";
import ProductDetail from "../containers/user/productDetail/ProductDetail";
import ProductUser from "../containers/user/productUser/ProductUser";
import Cart from "../containers/cart/Cart"; // Import the Cart component
import OrderPlaced from "../containers/orderPlaced/OrderPlaced"; 

const ROUTES = {
  about: {
    name: "/about",
    component: <About />,
  },
  contact: {
    name: "/contact",
    component: <Contact />,
  },
  support: {
    name: "/support",
    component: <Support />,
  },
  login: {
    name: "/login",
    component: <Login />,
  },
  register: {
    name: "/register",
    component: <Register />,
  },
  universityAdmin: {
    name: "/universityAdmin",
    component: <University />,
  },
  departmentAdmin: {
    name: "/departmentAdmin",
    component: <Department />,
  },
  productAdmin: {
    name: "/productAdmin",
    component: <Product />,
  },
  home: {
    name: "/",
    component: <Home />,
  },
  departmentUser: {
    name: "/departmentUser",
    component: <DepartmentUser />,
  },
  productUser: {
    name: "/productUser",
    component: <ProductUser />,
  },
  productDetail: {
    name: "/productDetail",
    component: <ProductDetail />,
  },
  cart: {  // Add Cart route here
    name: "/cart",
    component: <Cart />,
  },
  orderPlaced: {  // Add the OrderPlaced route
    name: "/order-placed",
    component: <OrderPlaced />,
  },
};

export default ROUTES;

