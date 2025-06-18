import mongoose from "mongoose";
import multer from "multer";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { CreateUniversity, DeleteUniversity, GetUniversities, UpdateUniversity } from "./controller/University.js";
import { CreateDepartment, DeleteDepartment, GetDepartmentByUniversity, UpdateDepartment } from "./controller/Department.js";
import { CreateProduct, DeleteProduct, GetProductDetails, GetProductsByDepartment, UpdateProduct, UpdateProductQty } from "./controller/Product.js";
import { addToCart, updateCart, removeFromCart, getCartDetails, clearCart } from "./controller/Cart.js";
import { Login, Register } from "./controller/User.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());


// University module
const StorageUniv=multer.diskStorage({
    destination:"uploadsUniv/",
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`);
    },
});
const uploadUniv=multer({
    storage:StorageUniv,
});
//http://localhost:8082/university
app.post("/university",uploadUniv.single("image"),CreateUniversity);
app.put("/university",uploadUniv.single("image"),UpdateUniversity);
app.delete("/university",DeleteUniversity);
app.get("/university",GetUniversities);

//Department Module

const StorageDep=multer.diskStorage({
    destination:"uploadDep/",
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`);
    },
});
const uploadDep=multer({
    storage:StorageDep,
});
//http://local:8082/department
app.post("/department",uploadDep.single("image"),CreateDepartment);
app.put("/department",uploadDep.single("image"),UpdateDepartment);
app.delete("/department",DeleteDepartment);
app.get("/department",GetDepartmentByUniversity);

//Product Modeule

const StoragePrd=multer.diskStorage({
    destination:"uploadsPrd/",
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`);
    },
});
const uploadPrd=multer({
    storage:StoragePrd,
});
// http:localhost:8082/department
app.post("/product",uploadPrd.array("images"),CreateProduct);
app.put("/product",uploadPrd.array("images"),UpdateProduct);
app.delete("/product",DeleteProduct);
app.get("/product",GetProductsByDepartment);
app.get("/productDetail",GetProductDetails);
app.put("/updateProductQty",UpdateProductQty);

//User Module

app.post("/register",Register);
app.post("/login",Login);


// Cart Routes (Add the cart routes here)
app.post("/addToCart", addToCart); // Add item to cart
app.put("/updateCart", updateCart); // Update item quantity in cart
app.delete("/removeFromCart", removeFromCart); // Remove item from cart
app.get("/getCart", getCartDetails); // Get the cart details for a user
app.delete("/clearCart", clearCart); // Clear the entire cart


//Image Access
app.use(express.static("uploadsUniv/"));
app.use(express.static("uploadsDep/"));
app.use(express.static("uploadsPrd/"));


mongoose.connect(process.env.DB_URL).then((d)=>{
    console.log('database connected');
    app.listen(process.env.PORT,()=>{
        console.log("server running at port:"+process.env.PORT);
    });
})
.catch((error)=>{
    console.log("database connection error!!!");
});