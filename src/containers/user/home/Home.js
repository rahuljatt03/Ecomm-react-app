import React, { useEffect,useState } from 'react'
import Header from '../../../components/Header'
import { Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ROUTES from '../../../navigation/Routes';
import University from '../../admin/university/University';
import Product from '../../admin/product/Product';


function Home() {
  const [universities,setUniversities]=useState(null);
  const navigate=useNavigate();
  function getUniversities(){
    try {
      axios.get("http://localhost:8082/university").then((d)=>{
        setUniversities(d.data.univData);
      });
    } catch (error) {
      alert("Unable to access API!!");
    }
  }
  useEffect(()=>{
    getUniversities();
  },[]);
  function renderUniversities(){
    return universities?.map((item)=>{
      return(
        <div className='col-3'>
          <div className='card'>
          <div class="card">
    <img class="card-img-top" src={"http://localhost:8082/"+item.image} alt="Card image cap" height="200px" width="100px"/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <a onClick={()=>{
        navigate(ROUTES.departmentUser.name+"?id="+item._id);
      }} class="btn btn-primary text-white">View Department</a>
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
      <div className='row p-2 m-2'>{renderUniversities()}</div>
    </>
  )
}

export default Home;
