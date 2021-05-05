'use strict';
const db = uniCloud .database();

exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {uid = '', dailyForm = {}} = event;
	
	await db.collection('daily').add({
		title: dailyForm.title,
		content: dailyForm.content,
		mood: dailyForm.mood,
		date: dailyForm.date,
		uid: uid
	})
	//返回数据给客户端
	return {
		code: 200,
		msg: '日记上传成功'
	};
};
