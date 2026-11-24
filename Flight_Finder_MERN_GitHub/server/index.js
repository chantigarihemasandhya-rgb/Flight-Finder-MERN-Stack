import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {Flight} from './db.js';
import {flights} from './data.js';
import {search} from './search.js';
const app=express(); app.use(cors({origin:process.env.CLIENT_ORIGIN||'http://localhost:5173'})); app.use(express.json({limit:'16kb'}));
const mongo=process.env.MONGO_URI;
if(mongo) await mongoose.connect(mongo);
app.get('/api/health',(_,res)=>res.json({status:'ok',mode:mongo?'mongodb':'demo'}));
app.post('/api/searchFlights',async(req,res)=>{
 let rows; try {rows=mongo?await Flight.find({}, {_id:0}).lean():flights;} catch {return res.status(503).json({error:'Database unavailable'});}
 try {res.json(search(rows,req.body||{}));} catch(e){res.status(400).json({error:e.message});}
});
app.listen(process.env.PORT||5000,()=>console.log('Flight Finder API ready'));
