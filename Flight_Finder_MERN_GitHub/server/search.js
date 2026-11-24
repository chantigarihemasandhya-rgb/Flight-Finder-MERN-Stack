import {airports} from './data.js';
export function search(flights, input){
 const {from,to,date,passengers=1}=input;
 const n=Number(passengers);
 if(!airports.includes(from)||!airports.includes(to)||from===to) throw new Error('Choose different supported airports.');
 if(typeof date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date||date<new Date().toISOString().slice(0,10)) throw new Error('Choose a valid current or future date.');
 if(!Number.isInteger(n)||n<1||n>9) throw new Error('Choose 1–9 passengers.');
 return flights.filter(f=>f.from===from&&f.to===to&&f.seats>=n).map(f=>({...f,date,totalPrice:f.price*n}));
}
