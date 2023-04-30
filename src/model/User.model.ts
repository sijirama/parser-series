
import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserSchema = new Schema({    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    }
})

export const UserModel = mongoose.model("user" , UserSchema)
