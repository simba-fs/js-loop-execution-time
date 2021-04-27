export function json2csv(data: { [name: string]: number[] }): string{
	let result = '';
	let keys: string[] = Object.keys(data);
	let largest: number = 0;
	for(let i = 0; i < keys.length; i++){
		if(data[keys[i]].length > largest) largest = data[keys[i]].length;
	}

	result = keys.join(',') + '\n';
	for(let i = 0; i < largest; i++){
		for(let j = 0; j < keys.length; j++){
			result += `${j == 0 ? '' : ','}${data[keys[j]][i] || ''}`;
		}
		result += '\n';
	}

	return result;
}

// console.log(json2csv({
//     a: [1,2,3,4],
//     b: [5,6,7]
// }))
