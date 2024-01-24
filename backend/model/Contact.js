import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    action:{
        type: String,
        required: true,
        match: /^(ftp|http|https):\/\/[^ "]+$/
    },
   
   
    
    
})
export default mongoose.model("Contact",contactSchema);