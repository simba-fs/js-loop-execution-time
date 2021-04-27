import * as Time from './time.js';
import { json2csv } from './json2csv.js';

let max = 8;
let result = {
	'c-like-for-loop': <number[]>[],
	'c-like-for-loop(write)': <number[]>[],
	'for-in': <number[]>[],
	'for-of': <number[]>[],
	'array.map': <number[]>[],
	'array.forEach': <number[]>[]
}

for(let i = 0; i < max; i++){
	let end = Math.pow(10, i);
	let bigArray = Array(end).fill(0);

	// c-like-for-loop
	Time.time(`1e${i}`);
	for(let i = 0; i < end; i++);
	result['c-like-for-loop'].push(Time.timeEnd(`1e${i}`));

	// c-like-for-loop(write)
	Time.time(`1e${i}`);
	for(let i = 0; i < end; i++)bigArray[i] = i;
	result['c-like-for-loop(write)'].push(Time.timeEnd(`1e${i}`));

	// for-in
	Time.time(`1e${i}`);
	for(let i in bigArray);
	result['for-in'].push(Time.timeEnd(`1e${i}`));

	// for-of
	Time.time(`1e${i}`);
	for(let i of bigArray);
	result['for-of'].push(Time.timeEnd(`1e${i}`));
	
	// array.map
	Time.time(`1e${i}`);
	bigArray.map(i => i);
	result['array.map'].push(Time.timeEnd(`1e${i}`));

	// array.forEach
	Time.time(`1e${i}`);
	bigArray.forEach(i => i);
	result['array.forEach'].push(Time.timeEnd(`1e${i}`));
}
console.log(json2csv(result));
// console.log(result);
