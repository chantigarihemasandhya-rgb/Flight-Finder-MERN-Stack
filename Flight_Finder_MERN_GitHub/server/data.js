export const airports = ['HYD','DEL','BLR','BOM','MAA'];
export const flights = airports.flatMap((from,i)=>airports.filter(to=>to!==from).flatMap((to,j)=>['IndiGo','Air India','Akasa Air'].map((airline,k)=>({id:`${from}-${to}-${k}`,from,to,airline,departure:['07:00','12:30','18:15'][k],arrival:['09:00','14:30','20:15'][k],duration:120,price:3200+i*300+j*200+k*850,seats:9}))));
