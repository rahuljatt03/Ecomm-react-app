import React, { useState } from 'react'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../navigation/Routes';
import axios from 'axios';

function Login() {
  const navigate=useNavigate();
  const[form,setForm]=useState({email:"",password:""});
  const[formError,setFormError]=useState({email:"",password:""});

  function submitLoginRequest(){
    try {
      debugger
      axios.post("http://localhost:8082/login",form).then((d)=>{
        localStorage.setItem("id",d.data.id);
        localStorage.setItem("role",d.data.role);
        if(d.data.role=="admin")navigate(ROUTES.universityAdmin.name);
        else navigate(ROUTES.home.name);
      }).catch((e)=>{
        alert("Wrong User/PWD");
        setForm({email:"",password:""});
         onLoginRequest();
      });
    } catch (error) {
      alert(error?.message);
    }
  }
  const changeHandler=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };
  function onLoginRequest(){
    let errors=false;
    let error={email:"",password:""};
    if(form.email.trim().length===0){
      errors=true;
      error={...error,email:"Email empty!!!"}
    }
    if(form.password.trim().length===0){
      errors=true;
      error={...error,email:"password empty!!!"}
  }
if(errors)setFormError(error)
  else{setFormError(error);
onLoginRequest();
  }
}
  return (
    <>
      <Header/>
      <div className='row p-2 m-2'>
      <div class="card mx-auto">
  <h5 class="card-header bg-info text-white">Login</h5>
  <div class="card-body">
   <div className='form-group row'>
    <label className='col-4'>Email</label>
    <div className='col-8'>
      <input type='text' name='email' className='form-control' onChange={changeHandler } value={form.email}/>
      <p className='text-danger'>{formError.email}</p>
    </div>
   </div>
   <div className='form-group row'>
    <label className='col-4'>Password</label>
    <div className='col-8'>
      <input type='password' name='password' className='form-control' onChange={changeHandler } value={form.password}/>
      <p className='text-danger'>{formError.password}</p>
    </div>
   </div>
   <button className='btn btn-info' onClick={()=>{
    submitLoginRequest();
   }}>Login</button>
  </div>
</div>
      </div>
    </>
  )
}

export default Login
