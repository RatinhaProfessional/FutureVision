import  mongoose from "mongoose";
const {Schema} = mongoose;

let userSchema = new Schema(
    {
        name: { type: String, required: true,min: 6, max:255},
        email: {type: String, required: true},
        password: {type: String, required: true, min: 8, max: 255},
        role: {type: String, default: "user"}  
    }
);

export default mongoose.model("user", userSchema);