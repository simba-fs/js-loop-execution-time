type time = [number, number];

let timeRecord = new Map<string, time>();

export function time(lebel:string): time{
	if(timeRecord.has(lebel)) throw new Error(`${lebel} has exist in list`);
	let start: time = process.hrtime();
	timeRecord.set(lebel, start);
	return start;
}

export function timeEnd(lebel: string): number{
	let end: time | undefined = timeRecord.get(lebel);
	if(!end) return 0;
	timeRecord.delete(lebel);

	let endTime: time = process.hrtime(end);
	return endTime[0] + endTime[1] / 1e9;
}
