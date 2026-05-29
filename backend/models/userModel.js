import mongoose from "mongoose";

const adminModel = mongoose.Schema({
    name : {type : String},
    email : {type : String, required : true},
    password : {type : String, required : true, unique : true}
})

const Admin = mongoose.model('Admin', adminModel)

export default Admin