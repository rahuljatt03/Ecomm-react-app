import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import axios  from 'axios';
import ROUTES from '../../../navigation/Routes';

function useQuery(){
  const {search}=useLocation();
  return React.useMemo(()=>new URLSearchParams(search),[search]);
}
function DepartmentUser(){
  const [departments,setDepartments]=useState(null)
  const navigate=useNavigate();
  const query=useQuery();

  function getDepartmentsByUniversity(){
    try {
      axios.get("http://localhost:8082/department?universityId="+query.get("id"))
      .then((d)=>{
        setDepartments(d.data.depData);
      });
    } catch (error) {
      alert("unable to access API!!!");
    }
  }
  useEffect(()=>{
    getDepartmentsByUniversity();
  },[]);

  function renderDepartments(){
return departments?.map((item) => { 
  return (
    <div className='col-3'>
      <div className="card">
        <img className="card-img-top" src={"http://localhost:8082/" + item.image} alt="Card image cap" height="150px" width="150px"/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
           <a onClick={() => {
            navigate(ROUTES.productUser.name+"?id="+item._id); 
          }} className="btn btn-primary text-white">View products</a> 

        

        </div>
      </div>
    </div>
  );
});
}

  return (
    <>
      <Header/>
      <div className='row p-2 m-2'>
        {renderDepartments()}
      </div>
    </>
  );
}

export default DepartmentUser;




