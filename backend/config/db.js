import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://fooddelivery:fooddelivery@cluster0.2xond9r.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
