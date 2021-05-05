'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
	const collection = db.collection('daily');
	
	let res = await collection.where({
		uid: event.uid,
		date: event.date
	}).get();
	console.log(JSON.stringify(res));
	
	return {
		code: 200,
		data: res.data
	};
};
