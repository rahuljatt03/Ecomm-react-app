// import React, { useEffect, useState } from 'react'
// import Header from '../../../components/Header'
// import { useNavigate,useLocation } from 'react-router-dom';
// import axios from 'axios';
// import ROUTES from '../../../navigation/Routes';

// function useQuery(){
//   const {search}=useLocation();
//   return React.useMemo(()=>new URLSearchParams(search),[search]);
// }


// function ProductUser() {
//   const[products,setProducts]=useState(null)
//   const navigate=useNavigate();
//   const query=useQuery();

//   function getProductsByDepartment(){
//     try {
//       axios.get("http://localhost:8081/product?departmentId="+query.get("id"))
//       .then((d)=>{
//         setProducts(d.data.prdData);
//       });
//     } catch (error) {
//       alert("unable to access API!!");
//     }
//   }
//   useEffect(()=>{
//     getProductsByDepartment();
//   },[]);



//   function renderProducts(){
//     return products?.map((item)=>{
//       return(
//         <div className='col-3'>
//           <div class="card">
//   <img class="card-img-top" src={"http://localhost:8081/"+item.image[0]} alt="Card image cap" height="150px" width="150px"/>
//   <div class="card-body">
//     <h5 class="card-title">product Name:{item.name}</h5>
//     <h5 class="card-title">product Description:{item.description}</h5>
//     <h5 class="card-title">product price:{item.price}</h5>
//     <h5 class="card-title">product Qty:{item.qty}</h5>
//     <a onClick={()=>{
//       navigate(ROUTES.productDetail.name+"?id="+item._id);
//     }} class="btn btn-primary text-white">View Product Details</a>
//   </div>
// </div>
//         </div>
//       )
//     })
//   }
//   return (
//     <>
//       <Header/>
//       <div className='row p-2 m-2'>
//         {renderProducts()}
//       </div>
//     </>
//   )
// }

// export default ProductUser


import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../../navigation/Routes';

function useQuery(){
  const{search}=useLocation();
  return React.useMemo(()=>new URLSearchParams(search),[search]);
}
function ProductUser() {
  const query=useQuery();
  const navigate=useNavigate();
  const [products,setProducts]=useState(null);

  function getProductsByDepartment(){            
    try{
      axios.get("http://localhost:8082/product?departmentId="+query.get("id"))
      .then((d)=>{

        setProducts(d.data.prdData);
      });
    }catch(error){
      alert("Unable to submit API!!!");
    }
  }
   useEffect(()=>{
      getProductsByDepartment();
    },[]);
    function renderProducts(){
      return products?.map((item)=>{
        return(
          <div className='col-3'>
           <div className='card'>
            <div class="card">
    <img class="card-img-top" src={"http://localhost:8082/"+item.images[0]} alt="Card image cap" height="150px" width="150px"/>
    <div class="card-body">
      <h5 class="card-title">Product Name:{item.name}</h5>
      <h5 class="card-title">Product Description:{item.description}</h5>
      <h5 class="card-title">Product Price:{item.price}</h5>
      <h5 class="card-title">Product Qty:{item.qty}</h5>
      <a onClick={()=>{
        navigate(ROUTES.productDetail.name+"?id="+item._id);
      }} class="btn btn-primary text-white">Product Detail</a>
    </div>
    </div>
  </div>
          </div>
        )
      })
    }
  return (
    <>
      <Header/>
      <div className='row p-2 m-2'>{renderProducts()}</div>
    </>
  )
}

export default ProductUser