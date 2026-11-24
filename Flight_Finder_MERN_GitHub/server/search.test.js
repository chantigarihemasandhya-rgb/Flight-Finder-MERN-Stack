import test from 'node:test'; import assert from 'node:assert/strict'; import {search} from './search.js'; import {flights} from './data.js';
const query={from:'HYD',to:'DEL',date:'2099-01-01',passengers:2};
test('matching route and total',()=>{const rows=search(flights,query);assert.equal(rows.length,3);assert.ok(rows.every(f=>f.from==='HYD'&&f.to==='DEL'&&f.totalPrice===2*f.price));});
test('invalid route',()=>assert.throws(()=>search(flights,{...query,to:'HYD'})));
test('invalid date',()=>assert.throws(()=>search(flights,{...query,date:'2099-02-30'})));
test('invalid passengers',()=>assert.throws(()=>search(flights,{...query,passengers:0})));
test('empty inventory',()=>assert.deepEqual(search([],query),[]));
