import 'dotenv/config'; import mongoose from 'mongoose'; import {Flight} from './db.js'; import {flights} from './data.js';
if(!process.env.MONGO_URI) throw new Error('Set MONGO_URI first');
await mongoose.connect(process.env.MONGO_URI); try {await Flight.bulkWrite(flights.map(f=>({updateOne:{filter:{id:f.id},update:{$set:f},upsert:true}}))); console.log('Seeded demo flights');} finally {await mongoose.disconnect();}
