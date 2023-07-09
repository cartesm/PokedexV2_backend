import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    favorites:[
        {
            id:Number,
            name:String,
        }
    ]
}, {
    collection: "users",
})

export default mongoose.model("users",userSchema)