import UniversityModel from "../models/University.js"

export const CreateUniversity=async(req,res)=>{
    try{
  const univData=await UniversityModel.create({
    name:req.body.name,
    image:req?.file?.filename,
  });
  if(univData) res.status(201).send({message:"University Created"});
  else res.status(404).send({message:"Unable to create university!!!"});
    }catch(error){
  console.log("Fail to submit data!!!");
    }
};
export const UpdateUniversity=async(req,res)=>{
    try{
  const univData=await UniversityModel.findByIdAndUpdate(
    {_id:req.body.id},
    {
    name:req.body.name,
    image:req?.file?.filename,
  });
  if(univData) res.status(200).send({message:"University Updated"});
  else res.status(404).send({message:"Unable to update university!!!"});
    }catch(error){
  console.log("Fail to submit data!!!");
    }
};
export const DeleteUniversity=async(req,res)=>{
    try{
    const univData=await UniversityModel.deleteOne({_id:req.body.id});
    if(univData.deletedCount==1) res.status(200).send({message:"University deleted!!"});
    else res.status(404).send({message:"unable to delete University!!"});    
    }catch(error){
    console.log("Fail to submit data!!!");
    }
};
export const GetUniversities= async(req,res)=>{
    try{
  const univData=await UniversityModel.find();
  res.status(200).send({univData});
    }catch(error){
   console.log("Fail to submit Data!!!");
    }
};