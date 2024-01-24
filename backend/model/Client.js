import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true,
        match: /^[A-Z]{3}-[0-9]{3}$/ // Example: ABC-123
    },
   
})
export default mongoose.model("Client",clientSchema);