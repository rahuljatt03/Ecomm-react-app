
// import React from 'react';
// import ROUTES from './Routes';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// function Navigation() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={ROUTES.about.name} element={ROUTES.about.component} />
//         <Route path={ROUTES.contact.name} element={ROUTES.contact.component} />
//         <Route path={ROUTES.login.name} element={ROUTES.login.component} />
//         <Route path={ROUTES.register.name} element={ROUTES.register.component} />
//         <Route path={ROUTES.universityAdmin.name} element={ROUTES.universityAdmin.component} />
//         <Route path={ROUTES.departmentAdmin.name} element={ROUTES.departmentAdmin.component} />
//         <Route path={ROUTES.productAdmin.name} element={ROUTES.productAdmin.component} />
//         <Route path={ROUTES.home.name} element={ROUTES.home.component} />
//         <Route path={ROUTES.departmentUser.name} element={ROUTES.departmentUser.component} />
//         <Route path={ROUTES.productUser.name} element={ROUTES.productUser.component} />
//         <Route path={ROUTES.productDetail.name} element={ROUTES.productDetail.component} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Navigation;




import React from 'react';
import ROUTES from './Routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routes */}
        <Route path={ROUTES.cart.name} element={ROUTES.cart.component} />  {/* Add Cart route here */}
        <Route path={ROUTES.about.name} element={ROUTES.about.component} />
        <Route path={ROUTES.contact.name} element={ROUTES.contact.component} />
        <Route path={ROUTES.login.name} element={ROUTES.login.component} />
        <Route path={ROUTES.register.name} element={ROUTES.register.component} />
        <Route path={ROUTES.universityAdmin.name} element={ROUTES.universityAdmin.component} />
        <Route path={ROUTES.departmentAdmin.name} element={ROUTES.departmentAdmin.component} />
        <Route path={ROUTES.productAdmin.name} element={ROUTES.productAdmin.component} />
        <Route path={ROUTES.home.name} element={ROUTES.home.component} />
        <Route path={ROUTES.departmentUser.name} element={ROUTES.departmentUser.component} />
        <Route path={ROUTES.productUser.name} element={ROUTES.productUser.component} />
        <Route path={ROUTES.productDetail.name} element={ROUTES.productDetail.component} />
        <Route path={ROUTES.orderPlaced.name} element={ROUTES.orderPlaced.component} />

      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
