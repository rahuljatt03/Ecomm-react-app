// import React, { useEffect, useState } from 'react'
// import Header from '../../../components/Header'
// import axios from "axios";
// import{ useNavigate, usenavigate} from 'react-router-dom';
// import ROUTES from '../../../navigation/Routes';

// function University() {
//   const [Universities,setUniversities]=useState(null);
//   const [UniversityId,setUniversityId]=useState(null);
//   const[form,setForm]=useState({name:"",image:null});
//   const[formError,setFormError]=useState({name:"",image:""});
//   const navigate=useNavigate();

//   function GetAlluniversities(){
// try {
//   axios.get("http://localhost:8082/university").then((d)=>{
//     setUniversities(d.data.univData);
//   });
// } catch (error) {
//   alert("unable to access API!!!!");
// }
//   }
//   useEffect(()=>{
// GetAlluniversities();
//   },[]);

//   function  renderUniversities(){
//     return Universities?.map((item)=>{
//       return(
//         <tr>
//           <td>
//             <img src={"http://localhost:8082/"+item.image}/>
//           </td>
//           <td>
//             {item.name}
//           </td>
//           <td>
//             <button className='btn  btn-success' onClick={()=>{
//               navigate(ROUTES.departmentAdmin.name+"?id="+item._id+"&name"+item.name);
//             }}>Add department</button>
//           </td>
//           <td>  <button className='btn btn-success' onClick={()=>{
//             setUniversityId(item._id)
//             setForm({...form,name:item.name});
//           }}>Edit</button>
//           </td>
//         <td>
//         <button className='btn btn-danger'onClick={()=>{
//               DeleteUniversity(item._id);
//             }} >Delete</button>
//         </td>
//         </tr>
//       )
//     })
//   }
//   const changeHandler=(e)=>{
//     setForm({...form,[e.target.name]:e.target.value});
//   };

//   function saveUniversity(){
//     try{
//     let formData=new FormData();
//     FormData.append("name",form.name)
//       FormData.append("image",form.image,form.image.name);
//       axios.post("http://localhost:8081/university",formData,{"content-type":"multipart/form-data",}).then((d)=>{
//         alert(d.data.message)
//         GetAlluniversities();
//         resetForm();
//       });
//     } catch (error) {
//       alert('unable to access API');
//     }
//   }
//   function UpdateUniversity(){
//     try{
//     let formData= new FormData();
//     formData.append("id",UniversityId);
//     formData.append("name",form.name)
//     formData.append("image",form.image);
//     axios.put("http://localhost:8081/university",formData,{
//       "content-type":"multipart/form-data",
//     })
//     .then((d)=>{  
//       alert(d.data.message)
//       GetAlluniversities();
//       resetForm();
//     });
//   } catch (error) {
//     alert('unable to access API');
// }
//   }
//   function DeleteUniversity(id){
//     try {
//       let ans=window.confirm("want to delete data?");
//       if(!ans)return;
//       axios.delete("http://localhost:8081/university",{data:{id:id}}).
//       then((d)=>{
//         alert(d.data.message)
//         GetAlluniversities();
//       });
//     } catch (error) {
//       alert("unable to access api");
//     }
//   }
//   function onUniversitySubmit(){
//     let errors=false;
//     let error={name:"",image:""};
//     if(form.name.trim().length==0){
//       error=true;
//       error={...error,name:"university name empty!!"}
//     }
//     if(form.image==null){
//       errors=true;
//       error={...error,image:"Please Select Image!!"};
//     }
//     if(errors)setFormError(error)
//       else{
//     setFormError(error);
//     {
//       alert("Success");
//       UniversityId?UpdateUniversity():saveUniversity();
//     }
//   }
//   }
//   function resetForm(){
//     setForm({image:"",image:null});
//   }
//   return (
//     <>
//       <Header/>
//       <div className='row'>
//       <div class="card text-center mx-auto">
//   <div class="card-header bg-info text-white">
//     {UniversityId?"Edit university":"New university"}
//   </div>
//   <div class="card-body mx-auto ">
//     <div className='form-group row'>
//       <label className='col-4'>university Name</label>
//       <div className='col-8'>
//         <input type="text" name='name' placeholder='university Name' className='form-control' onChange={changeHandler}
//         value={form.name}/>
//         <p className='text-danger'>{formError.name}</p>
//       </div>
//     </div>
//     <div className='form-group row'>
//       <label className='col-4'>university image</label>
//       <div className='col-8'>
//         <input type="file" name='file' placeholder='' className='form-control' onChange={(e)=>{
//           let file=e.target.files[0]
//           setForm({...form,image:file});
//         }}/>
//         <p className='text-danger'>{formError.name}</p>
//       </div>
//     </div>
//   </div>
//   <div class="card-footer text-muted">
//    < button className='btn btn-info' onClick={()=>{
//     onUniversitySubmit();
//    }}
//    >
//     {UniversityId?"Update":"Save"}
//    </button>
//   </div>
// </div>
//       </div>
//       <div className='row bordered p-2 m-2'>
//         <table className='table table-bordered table-striped table-hover'>
//           <thead>
//             <tr>
//               <th>University Image</th>
//               <th>University Name</th>
//               <th>Add Department</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>{renderUniversities()}</tbody>
//         </table>
//       </div>
//     </>
//   )
// }
  


// export default University


import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../navigation/Routes';

function University() {
  const [Universities,setUniversities]=useState(null);
  const[universityId,setuniversityId]=useState(null);
  const [form,setForm]=useState({name:"",image:null});
  const [formError,setFormError]=useState({name:"",image:null});
  const navigate=useNavigate();
  
  function GetAlluniversities(){
    try {
      axios.get("http://localhost:8082/university").then((d)=>{
        setUniversities(d.data.univData);
      });
    } catch (error) {
      alert("unable to access api!!");
    }
  }
  useEffect(()=>{
    GetAlluniversities();
  },[]);

  function renderUniversities(){
    return Universities?.map((item)=>{
      return(
        <tr>
          <td>
            <img src={"http://localhost:8082/"+item.image}/>
          </td>
          <td>{item.name}</td>
          <td>
            <button className='btn btn-info'onClick={()=>{
              navigate(ROUTES.departmentAdmin.name+"?id="+item._id+"&name="+item.name);
            }}>Add Department</button>
          </td>
          <td>
            <button className='btn btn-success' onClick={()=>{
              setuniversityId(item._id)
              setForm({...form,name:item.name});
            }}>Edit</button>
          </td>
          <td>
            <button className='btn btn-danger'onClick={()=>{
              DeleteUniversity(item._id);
            }} >Delete</button>
          </td>
        </tr>
      )
    })
  }
  const changeHandler=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };
  
  function saveUniversity(){
    try {
      let formData= new FormData();
      formData.append("name",form.name)
      formData.append("image",form.image,form.image.name);
      axios.post("http://localhost:8082/university",formData,{"content-type":"multipart/form-data",}).then((d)=>{
        alert(d.data.message)
        GetAlluniversities();
        resetForm();
      });
    } catch (error) {
      alert('unable to access API');
    }
  }
  function updateUniversity(){
    try {
      let formData= new FormData();
      formData.append("id",universityId);
      formData.append("name",form.name)
      formData.append("image",form.image);
      axios.put("http://localhost:8082/university",formData,{
        "content-type":"multipart/form-data",
      })
      .then((d)=>{  
        alert(d.data.message)
        GetAlluniversities();
        resetForm();
      });
    } catch (error) {
      alert('unable to access API');
    }
  }
  function DeleteUniversity(id){
    try {
      let ans=window.confirm("want to delete data?");
      if(!ans)return;
      axios.delete("http://localhost:8082/university",{data:{id:id}}).
      then((d)=>{
        alert(d.data.message)
        GetAlluniversities();
      });
    } catch (error) {
      alert("unable to access api");
    }
  }
  function onUniversitySubmit(){
    let errors=false;
    let error={name:"",image:""};
    if(form.name.trim().length==0){
      error=true;
      error={...error,name:"university name empty!!"}
    }
    if(form.image==null){
      errors=true;
      error={...error,image:"Please Select Image!!"};
    }
    if(errors)setFormError(error)
      else{
    setFormError(error);
    {
      alert("Success");
    universityId?updateUniversity():saveUniversity();
    }
  }
  }
  function resetForm(){
    setForm({name:"",image:null});
  }
  return (
    <>
      <Header/>
      <div className='row'>
      <div class="card text-center mx-auto">
  <div class="card-header bg-info text-white">
    {universityId?"Edit university":"New university"}
  </div>
  <div class="card-body mx-auto ">
    <div className='form-group row'>
      <label className='col-4'>university Name</label>
      <div className='col-8'>
        <input type="text" name='name' placeholder='university Name' className='form-control' onChange={changeHandler}
        value={form.name}/>
        <p className='text-danger'>{formError.name}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-4'>university image</label>
      <div className='col-8'>
        <input type="file" name='file' placeholder='' className='form-control' onChange={(e)=>{
          let file=e.target.files[0]
          setForm({...form,image:file});
        }}/>
        <p className='text-danger'>{formError.name}</p>
      </div>
    </div>
  </div>
  <div class="card-footer text-muted">
   < button className='btn btn-info' onClick={()=>{
    onUniversitySubmit();
   }}
   >
    {universityId?"Update":"Save"}
   </button>
  </div>
</div>
      </div>
      <div className='row bordered p-2 m-2'>
        <table className='table table-bordered table-striped table-hover'>
          <thead>
            <tr>
              <th>University Image</th>
              <th>University Name</th>
              <th>Add Department</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{renderUniversities()}</tbody>
        </table>
      </div>
    </>
  )
}

export default University

