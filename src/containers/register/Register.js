// import React, { useState } from 'react'
// import Header from '../../components/Header'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import ROUTES from '../../navigation/Routes';

// function Register() {
//   const navigate=useNavigate();
//   const[form,setForm]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:"",
//     confirmPassword:"",
//   });
//   const[formError,setFormError]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:"",
//     confirmPassword:"",
//   });
//   const changeHandler=(e)=>{
//     setForm({...form,[e.target.name]:e.target.value});
//   };
//   function registerUser(){
//     try {
//       axios.post("http://localhost:8081/register",form).then((d)=>{
//         alert(d.data.messsge);
//       });
//     } catch (error) {
//       alert(error?.message);
//     }
//   }
//   function onSubmitUser(){
//     let errors=false;
//     let error={
//       firstName:"",
//       lastName:"",
//       email:"",
//       password:"",
//       confirmPassword:"",
//     };
//     if(form.firstName.trim().length==0){
//       errors=true;
//       error={...error,firstName:"first Name Empty!!!"};
//     }
//     if(form.lastNameName.trim().length==0){
//       errors=true;
//       error={...error,lastNameName:"last Name Empty!!!"};
//     }
//     if(form.email.trim().length==0){
//       errors=true;
//       error={...error,email:"Email Empty!!!"};
//     }
//     if(form.password.trim().length==0){
//       errors=true;
//       error={...error,password:"password Empty!!!"};
//     }
//     if(form.confirmPassword.trim().length==0){
//       errors=true;
//       error={...error,confirmPassword:"confirm Password Empty!!!"};
//     }
//     if(form.password!=form.confirmPassword){
//       errors=true;
//       error={...error,password:"Password and confirm password must be same"};
//     }
//     if(!(form.password.length>=6 && form.password.length<=12)){
//       errors=true;
//       error={...error,password:"password length between 6 to 12 characters long"}
//     }
//     if(error)setFormError(error)
//       else{
//     setFormError(error);
//     registerUser();
//       }
//   }
//   // function registerUser(){
//   //   alert(d.data.message)
//   //   navigate(ROUTES.login.name);
//   // }


//   return (
//     <>
//       <Header/>
//       <div className="row p-2 m-2">
//   <div className="card mx-auto">
//     <div className="card-header bg-info text-white">
//       Register
//     </div>
//     <div className="card-body">
//       <div className="row">
//         <div className="col-4">
//           <label className="form-label">First Name</label>
//         </div>
//         <div className="col-8">
//           <input type="text" name="firstName" className="form-control" />
//           <p className="text-danger">{formError.firstName}</p>
//         </div>
//       </div>
//       <div className="row mt-3">
//         <div className="col-4">
//           <label className="form-label">Last Name</label>
//         </div>
//         <div className="col-8">
//           <input type="text" name="lastName" className="form-control" />
//           <p className="text-danger">{formError.lastName}</p>
//         </div>
//       </div>
//       <div className="row mt-3">
//         <div className="col-4">
//           <label className="form-label">Email</label>
//         </div>
//         <div className="col-8">
//           <input type="text" name="lastName" className="form-control" />
//           <p className="text-danger">{formError.email}</p>
//         </div>
//       </div>
//       <div className="row mt-3">
//         <div className="col-4">
//           <label className="form-label">Password</label>
//         </div>
//         <div className="col-8">
//           <input type="password" name="lastName" className="form-control" />
//           <p className="text-danger">{formError.password}</p>
//         </div>
//       </div> 
//       <div className="row mt-3">
//         <div className="col-4">
//           <label className="form-label">Confirm Password</label>
//         </div>
//         <div className="col-8">
//           <input type="password" name="lastName" onChange={changeHandler} className="form-control" />
//           <p className="text-danger">{formError.confirmPassword}</p>
//         </div>
//       </div>
//       <div className='card-footer muuted'>
//         <button className='btn btn-info' onClick={()=>{
//           onSubmitUser();
//         }}>Register</button>
//       </div>
//     </div>
//   </div>
// </div>


//     </>
//   )
// }

// export default Register







import React, { useState } from 'react';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ROUTES from '../../navigation/Routes';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    try {
      axios
        .post("http://localhost:8082/register", form)
        .then((d) => {
          alert(d.data.message); // Correct message handling
          navigate(ROUTES.login.name); // Navigate to login after successful registration
        });
    } catch (error) {
      alert(error?.message);
    }
  };

  const onSubmitUser = () => {
    let errors = false;
    let error = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Check all fields and make sure no field is undefined
    if (form.firstName && form.firstName.trim().length === 0) {
      errors = true;
      error = { ...error, firstName: "First Name is empty!" };
    }
    if (form.lastName && form.lastName.trim().length === 0) {
      errors = true;
      error = { ...error, lastName: "Last Name is empty!" };
    }
    if (form.email && form.email.trim().length === 0) {
      errors = true;
      error = { ...error, email: "Email is empty!" };
    }
    if (form.password && form.password.trim().length === 0) {
      errors = true;
      error = { ...error, password: "Password is empty!" };
    }
    if (form.confirmPassword && form.confirmPassword.trim().length === 0) {
      errors = true;
      error = { ...error, confirmPassword: "Confirm Password is empty!" };
    }
    if (form.password !== form.confirmPassword) {
      errors = true;
      error = { ...error, password: "Password and Confirm Password must be the same" };
    }
    if (!(form.password.length >= 6 && form.password.length <= 12)) {
      errors = true;
      error = { ...error, password: "Password length must be between 6 and 12 characters" };
    }

    if (errors) {
      setFormError(error); // Set errors if validation fails
    } else {
      setFormError(error);
      registerUser(); // Call the API if there are no errors
    }
  };

  return (
    <>
      <Header />
      <div className="row p-2 m-2">
        <div className="card mx-auto">
          <div className="card-header bg-info text-white">Register</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <label className="form-label">First Name</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName} // Bind form state to input field
                  onChange={changeHandler} // Set the change handler
                  className="form-control"
                />
                <p className="text-danger">{formError.firstName}</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="form-label">Last Name</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName} // Bind form state to input field
                  onChange={changeHandler} // Set the change handler
                  className="form-control"
                />
                <p className="text-danger">{formError.lastName}</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="form-label">Email</label>
              </div>
              <div className="col-8">
                <input
                  type="email"
                  name="email"
                  value={form.email} // Bind form state to input field
                  onChange={changeHandler} // Set the change handler
                  className="form-control"
                />
                <p className="text-danger">{formError.email}</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="form-label">Password</label>
              </div>
              <div className="col-8">
                <input
                  type="password"
                  name="password"
                  value={form.password} // Bind form state to input field
                  onChange={changeHandler} // Set the change handler
                  className="form-control"
                />
                <p className="text-danger">{formError.password}</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="form-label">Confirm Password</label>
              </div>
              <div className="col-8">
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword} // Bind form state to input field
                  onChange={changeHandler} // Set the change handler
                  className="form-control"
                />
                <p className="text-danger">{formError.confirmPassword}</p>
              </div>
            </div>

            <div className="card-footer muted">
              <button className="btn btn-info" onClick={onSubmitUser}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
