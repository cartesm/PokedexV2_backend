import mongoose from 'mongoose'
export const connectDB =async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/pokedex")
        console.log("conexion a db exitosa")
    }
    catch(err){
        console.log(err)
    }
}