import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import axios from "axios";
import {useLocation, useNavigate}from "react-router-dom";
import ROUTES from '../../../navigation/Routes';


function useQuery(){
  const {search}=useLocation();
  return React.useMemo(()=>new URLSearchParams(search),[search]);
}

function Department() {
  const query=useQuery()
  const navigate=useNavigate();
  const [departments,setDepartments]=useState(null);
  const[departmentId,setDepartmentId]=useState(null);
  const[form,setForm]=useState({
    name:"",
    image:null,
    university:query.get("id"),
  });
  const[formError,setFormError]=useState({
    name:"",
    image:"",
  });

  // function getDepartmentsByUniversity(){
  //   try {
  //     axios.get("http://localhost:8081/department?universityId="+query.get("id")).then((d)=>{
  //       setDepartments(d.data.depData);
  //     });
  //   } catch (error) {
  //     alert("unable to access API!!");
  //   }
  // }


   // Refactor: Convert getDepartmentsByUniversity to use async/await for better readability and error handling
   const getDepartmentsByUniversity = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8082/department?universityId=' + query.get('id')
      );
      setDepartments(response.data.depData); // Update state with fetched departments
    } catch (error) {
      alert('Unable to access API!!');
    }
  };


  useEffect(()=>{
    getDepartmentsByUniversity();
  },[]);

  function saveDepartment(){
try {
  let formData=new FormData(); 
  formData.append("universityId",query.get("id"));
  formData.append("name",form.name);
  formData.append("image",form.image,form.image.name);
  axios.post("http://localhost:8082/department",formData,{
    "content-type":"multipart/form-data",
  }).then((d)=>{
    alert(d.data.message);
    getDepartmentsByUniversity();
    resetForm();
  });
} catch (error) {
  alert("unable to access API!!!");
}
  }

  function resetForm(){
    setForm({name:"",image:null,university:query.get("id")});
  }

  function updateDepartment(){
    try {
      let fromData=new FormData();
      fromData.append("name",form.name)
      fromData.append("image",form.image,form.image.name);
      fromData.append("university",query.get("id"));
      fromData.append("id",departmentId);
      axios.put("http://localhost:8082/department",fromData,{
        "content-type":"multipart/form-data",
      }).then((d)=>{
        alert(d.data.message);
        getDepartmentsByUniversity();
        resetForm();
      });
    } catch (error) {
      alert("unable to access API!!!");
    }
      }

      function deleteDepartment(id){
        try {
          let ans=window.confirm("want to delete data?");
          if(!ans) return;
          axios.delete("http://localhost:8082/department",{data:{id:id}}).
          then((d)=>{
            alert(d.data.message);
            getDepartmentsByUniversity();
            resetForm();
          });
        } catch (error) {
          alert("unable to acces API!!");
        }
      }

      function onDepartmentSubmit(){
        let errors=false;
        let error={name:"",image:""}
        if(form.name.trim().length==0){
          errors=true;
          error={...error,name:"Department Name Empty!!!"}
        }
        if(form.image==null){
          errors=true;
          error={...error,image:"Please select department image !!!"};
        }
        if(errors) setFormError(error)
          else{
        setFormError(error);
      departmentId? updateDepartment():saveDepartment();
      }
      }
      const changeHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
      };
    
function renderDepartments(){
  return departments?.map((item)=>{
    return(
      <tr>
        <td>
          <img src={"http://localhost:8082/"+item.image} height="150px" width="150px"/>
        </td>
        <td>
          {item.name}
        </td>
        <td>
          <button className='btn btn-info' onClick={()=>{
            navigate(ROUTES.productAdmin.name+"?id="+item._id+"&name="+item.name);
          }}>Add Product </button>

        </td>
        <td>
          <button className='btn btn-primary' onClick={()=>{
            setDepartmentId(item._id);  
            setForm({...form,name:item.name});
          }}>Edit</button>
        </td>
        <td>
          <button className='btn btn-danger' onClick={()=>{
            deleteDepartment(item._id);
          }}>Delete</button>
        </td>
      </tr>
    )
  })
}

  return (
    <>
      <Header/>
      <div className='row p-2 m-2'>
      <div class="card text-center mx-auto">
  <div class="card-header bg-info text-white">
    {departmentId? "Edit Department":"New Department"}
  </div>
  <div class="card-body">
   <div className='form-group row'>
    <label className='col-4'>University Name</label>
    <div className='col-8'>
    <input 
  type="text"  
  value={query.get("name")} 
  disabled 
  className='form-control' 
/>
    </div>
   </div>
   <div className='form-group row'>
    <label className='col-4'>Department Name</label>
    <div className='col-8'>
      <input type="text" value={form.name} name="name" className='form-control' onChange={changeHandler}/>
      <p className='text-danger'>{formError.name}</p>
    </div>
   </div>
   <div className='form-group row'>
    <label className='col-4'>University Image</label>
    <div className='col-8'>
      <input type="file" onChange={(e)=>{
        let file=e.target.files[0];
        setForm({...form,image:file});
      }} className='form-control'/>
    </div>
   </div>
  </div>
  <div class="card-footer text-muted">
   <button className='btn btn-success' onClick={()=>{
    onDepartmentSubmit();
   }}>
    {departmentId? "Update":"Save"}
   </button>
  </div>
</div>
      </div>
      <div className='border rounded p-2 m-2'>
        <table className='table table-bordered table-striped table-hover'>
          <thead>
            <tr>
              <th>Department Image</th>
              <th>Department Name</th>
              <th>Add Product</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {renderDepartments()}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Department



