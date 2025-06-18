// import React, { useEffect, useState } from 'react'
// import Header from '../../../components/Header'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios';

// function useQuery(){
//   const {search}=useLocation();
//   return React.useMemo(()=>new URLSearchParams(search),[search]);
// }
// function Product() {
//   const query=useQuery();
//   const [products,setProducts]=useState(null)
//   const [productId,setProductId]=useState(null)
//   const [form,setForm]=useState({
//     name:"",
//     images:null,
//     departmentId:query.get("id"),
//     description:"",
//     qty:10,
//     price:0,
//   });
// const [formError,setFormError]=useState({
//   name:"",
//   images:"",
//   description:"",
//   qty:"",
//   price:"",
// });

// const changeHandler=(e)=>{
//   setForm({...form,[e.target.name]:e.target.value});
// };
// function getProductsByDepartment(){
//   try {
//     axios.get("http://localhost:8081/product?departmentId="+query.get("id").then((d)=>{
//       setProducts(d.data.prdData);
//     }));
//   } catch (error) {
//     alert(error?.message);
//   }
// }
// useEffect(()=>{
// getProductsByDepartment();
// },[]);


// function saveProduct(){
//   try {
//     const formData=new FormData();
//     for(let i=0;i<form.images.length;i++){
//       formData.append("images",form.images[i],form.images[i].name);
//     }
//     formData.append("name",form.name);
//     formData.append("description",form.description);
//     formData.append("price",form.price);
//     formData.append("qty",form.qty);
//     formData.append("departmentId",query.get("id"));
//     axios.post("http://localhost:8081/product",formData,{
//       "content-type":"multipart/form-data",
//     }).then((d)=>{
//       alert(d.data.message);
//       getProductsByDepartment();
//       resetForm();
//     });
//   } catch (error) {
//     alert("unable to access API!!");
//   }
//   function resetForm(){
//     setForm({name:"",image:null,departmentId:query.get("id"),description:"",qty:10,price:0});
//   }

// }
//   function updateProduct(){
//     try {
//       const formData=new FormData();
//     for(let i=0;i<form.images.length;i++){
//       formData.append("images",form.images[i],form.images[i].name);
//     }
//     formData.append("name",form.name);
//     formData.append("description",form.description);
//     formData.append("price",form.price);
//     formData.append("qty",form.qty);
//     formData.append("departmentId",query.get("id"));
//     formData.append("id",productId);
//     axios.put("http://localhost:8081/product",formData,{
//       "content-type":"multipart/form-data",
//     }).then((d)=>{
//       alert(d.data.message);
//       getProductsByDepartment();
//       resetForm();
//     });
//     } catch (error) {
//       alert("unable to access API!!");
//     }
  
  
//   function deleteProduct(id){
//     try {
//       let ans=window.confirm("want to delete data?");
//       if(!ans) return;
//       axios.delete("http://localhost:8081/product",{data:{id:id}}).then((d)=>{
//         alert(d.data.message);
//         getProductsByDepartment();
//         resetForm();
//       });
//     } catch (error) {
//       alert("unable to acces API!!");
//     }
//   }
// }

//   function onProductSubmit(){
//     let errors=false;
//     let error={name:"",images:"",description:"",qty:"",price:""};
//     if(form.name.trim().length==0){
//       errors=true;
//       error={...error,name:"product Name EMpty!!!"};
//     }
//     if(form.description.trim().length==0){
//       errors=true;
//       error={...error,description:"product description Empty!!!"};
//     }
//     if(form.qty==""||form.qty==0){
//       errors=true;
//       error={...error,qty:"pl Enter qty!!!"};
//     }
//     if(form.price==""||form.price==0){
//       errors=true;
//       error={...error,price:"pl Enter price!!!!"};
//     }
//     if(form.images==null){
//       errors=true;
//       error={...error,images:"pl Select Image!!!"};
//     }
//     if(errors) setForm(error);
//     else{
//       setFormError(error);
//       productId?updateProduct():saveProduct();
//     }
//   }


// function renderProducts(){
// return products?.map((item)=>{
//   return(
//     <tr>
//       <td>
//         <img src={"http://localhost:8081/"+item.images[0]} height="150px" width="150px"/>
//       </td>
//       <td>{item.name}</td>
//       <td>{item.description}</td>
//       <td>{item.price}</td>
//       <td>{}item.qty</td>
//       <td>
//         <button  className='btn btn-danger' onClick={()=>{
//           setProductId(item._id)
//           setForm({...form,name:item.name,description:item.description,price:item.price,qty:item.qty});
//         }}>Edit</button>
//       </td>
//     </tr>
//   )
// })
// }
//   return (
//     <>
//       <Header/>
//       <div className='row p-2 m-2'>
//       <div class="card text-center mx-auto">
//   <div class="card-header bg-info text-white">
//     {productId?"Edit Product":"New Product"}
//   </div>
//   <div class="card-body">
//     <div className='form-group row'>
//       <label className='col-4'>Department Name</label>
//       <div className='col-8'>
//         <input type='text' value={query.get("name")} className='form-control' disabled/>
//       </div>
//     </div>
//      <div className='form-group row'>
//       <label className='col-4'>Product Name</label>
//       <div className='col-8'>
//         <input type='text' value={form.name} className='form-control'name='name' onChange={changeHandler}/>
//         <p className='text-danger'>{formError.name}</p>
//       </div>
//     </div>
//  <div className='form-group row'>
//       <label className='col-4'>Description</label>
//       <div className='col-8'>
//         <input type='text' value={form.description} className='form-control'name='descripton' onChange={changeHandler}/>
//         <p className='text-danger'>{formError.description}</p>
//       </div>
//     </div>
//      <div className='form-group row'>
//       <label className='col-4'>price</label>
//       <div className='col-8'>
//         <input type='text' value={form.price} className='form-control'name='price' onChange={changeHandler}/>
//         <p className='text-danger'>{formError.price}</p>
//       </div>
//     </div>
//      <div className='form-group row'>
//       <label className='col-4'>Qty</label>
//       <div className='col-8'>
//         <input type='text' value={form.qty} className='form-control'name='qty' onChange={changeHandler}/>
//         <p className='text-danger'>{formError.qty}</p>
//       </div>
//     </div>
//      <div className='form-group row'>
//       <label className='col-4'>Image</label>
//       <div className='col-8'>
//         <input type='file' className='form-control'onChange={(e)=>{
//           let files=e.target.files;
//           setForm({...form,images:files});
//         }}/>
//         <p className='text-danger'>{formError.images}</p>
//       </div>
//     </div>
//   </div>
//   <div class="card-footer text-muted">
//     <button className='btn btn-info' onClick={()=>{
//       onProductSubmit();
//     }}>{productId? "Update":"Save"}</button>
//   </div>
// </div>
//       </div>
//       <div className='row border p-2 m-2'>
//         <table class="table table-bordered table-striped table-active">
//           <thead>
//             <tr>
//               <th>Image</th>
//                <th>Name</th>
//                 <th>Description</th>
//                  <th>price</th>
//                   <th>Qty</th>
//                    <th>Delete</th>
//                     <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>{renderProducts()}</tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default Product





import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function useQuery(){
  const {search}=useLocation();
  return React.useMemo(()=>new URLSearchParams(search),[search]);
}

function Product() {
  const query = useQuery();
  const [products, setProducts] = useState(null);
  const [productId, setProductId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    images: null,
    departmentId: query.get("id"),
    description: "",
    qty: 10,
    price: 0,
  });

  const [formError, setFormError] = useState({
    name: "",
    images: "",
    description: "",
    qty: "",
    price: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function getProductsByDepartment() {
    try {
      axios
        .get("http://localhost:8082/product?departmentId=" + query.get("id"))
        .then((d) => {
          setProducts(d.data.prdData);
        });
    } catch (error) {
      alert(error?.message);
    }
  }

  useEffect(() => {
    getProductsByDepartment();
  }, []);

  function saveProduct() {
    try {
      const formData = new FormData();
      for (let i = 0; i < form.images.length; i++) {
        formData.append("images", form.images[i], form.images[i].name);
      }
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("qty", form.qty);
      formData.append("departmentId", query.get("id"));

      axios.post("http://localhost:8082/product", formData, {
        "content-type": "multipart/form-data",
      }).then((d) => {
        alert(d.data.message);
        getProductsByDepartment();
        resetForm();
      });
    } catch (error) {
      alert("unable to access API!!");
    }
  }

  function resetForm() {
    setForm({
      name: "",
      images: null,
      departmentId: query.get("id"),
      description: "",
      qty: 10,
      price: 0,
    });
  }

  function updateProduct() {
    try {
      const formData = new FormData();
      for (let i = 0; i < form.images.length; i++) {
        formData.append("images", form.images[i], form.images[i].name);
      }
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("qty", form.qty);
      formData.append("departmentId", query.get("id"));
      formData.append("id", productId);

      axios.put("http://localhost:8082/product", formData, {
        "content-type": "multipart/form-data",
      }).then((d) => {
        alert(d.data.message);
        getProductsByDepartment();
        resetForm();
      });
    } catch (error) {
      alert("unable to access API!!");
    }
  }

  function deleteProduct(id) {
    try {
      let ans = window.confirm("Want to delete this product?");
      if (!ans) return;
      axios
        .delete("http://localhost:8082/product", { data: { id: id } })
        .then((d) => {
          alert(d.data.message);
          getProductsByDepartment();
          resetForm();
        });
    } catch (error) {
      alert("unable to access API!!");
    }
  }

  function onProductSubmit() {
    let errors = false;
    let error = { name: "", images: "", description: "", qty: "", price: "" };

    if (form.name.trim().length === 0) {
      errors = true;
      error = { ...error, name: "Product Name is Empty!!!" };
    }
    if (form.description.trim().length === 0) {
      errors = true;
      error = { ...error, description: "Product Description is Empty!!!" };
    }
    if (form.qty === "" || form.qty === 0) {
      errors = true;
      error = { ...error, qty: "Please enter qty!!!" };
    }
    if (form.price === "" || form.price === 0) {
      errors = true;
      error = { ...error, price: "Please enter price!!!!" };
    }
    if (form.images == null) {
      errors = true;
      error = { ...error, images: "Please select Image!!!" };
    }

    if (errors) setFormError(error);
    else {
      setFormError(error);
      productId ? updateProduct() : saveProduct();
    }
  }

  function renderProducts() {
    return products?.map((item) => {
      return (
        <tr key={item._id}>
          <td>
            <img src={"http://localhost:8082/" + item.images[0]} height="150px" width="150px" />
          </td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.qty}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                setProductId(item._id);
                setForm({ ...form, name: item.name, description: item.description, price: item.price, qty: item.qty });
              }}
            >
              Edit
            </button>
          </td>
          <td>
          <button className='btn btn-danger' onClick={()=>{
            deleteProduct(item._id);
          }}>Delete</button>
        </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Header />
      <div className="row p-2 m-2">
        <div className="card text-center mx-auto">
          <div className="card-header bg-info text-white">
            {productId ? "Edit Product" : "New Product"}
          </div>
          <div className="card-body">
            <div className="form-group row">
              <label className="col-4">Department Name</label>
              <div className="col-8">
                <input type="text" value={query.get("name")} className="form-control" disabled />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4">Product Name</label>
              <div className="col-8">
                <input
                  type="text"
                  value={form.name}
                  className="form-control"
                  name="name"
                  onChange={changeHandler}
                />
                <p className="text-danger">{formError.name}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4">Description</label>
              <div className="col-8">
                <input
                  type="text"
                  value={form.description}
                  className="form-control"
                  name="description"
                  onChange={changeHandler}
                />
                <p className="text-danger">{formError.description}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4">Price</label>
              <div className="col-8">
                <input
                  type="text"
                  value={form.price}
                  className="form-control"
                  name="price"
                  onChange={changeHandler}
                />
                <p className="text-danger">{formError.price}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4">Qty</label>
              <div className="col-8">
                <input
                  type="text"
                  value={form.qty}
                  className="form-control"
                  name="qty"
                  onChange={changeHandler}
                />
                <p className="text-danger">{formError.qty}</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4">Image</label>
              <div className="col-8">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    let files = e.target.files;
                    setForm({ ...form, images: files });
                  }}
                />
                <p className="text-danger">{formError.images}</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              className="btn btn-info"
              onClick={() => {
                onProductSubmit();
              }}
            >
              {productId ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
      <div className="row border p-2 m-2">
        <table className="table table-bordered table-striped table-active">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{renderProducts()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Product;

