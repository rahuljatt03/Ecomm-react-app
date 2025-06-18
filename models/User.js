import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
     lastName:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true,
     },
     profilePic:{
        type:String,
     },
     role:{
        type:String,
        default:"User",
     },
},{timestamps:true});
const userModel=mongoose.model('user',UserSchema);
export default userModel;
