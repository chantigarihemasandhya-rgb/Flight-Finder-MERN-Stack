import mongoose from 'mongoose';
export const Flight=mongoose.model('Flight',new mongoose.Schema({id:{type:String,unique:true},from:String,to:String,airline:String,departure:String,arrival:String,duration:Number,price:Number,seats:Number},{versionKey:false}));
