import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pranaygupta1608:Pranaydb2000@cluster0.yylhrrj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}