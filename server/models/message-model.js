import Sequelize from 'sequelize';
import db from './_db';
const User = db.model('user');

const Message = db.define('message', {
	subject: {
		type: Sequelize.STRING,
		defaultValue: 'No Subject'
	},
	body: {
		type: Sequelize.STRING,
		allowNull: false
	} 
});

Message.getAllWhereSender = function(id){
	return Message.findAll({
		where: {fromId: id},
		include: [{
			model: User,
			as: 'to'
		}, {
			model: User,
			as: 'from'
		}]
	})
	.then(messages => messages);
};

Message.getAllTo = function(id){
	return Message.findAll({
		where: {toId: id},
		include: [{
			model: User,
			as: 'to'
		}, {
			model: User,
			as: 'from'
		}]
	})
	.then(messages => messages);
};

Message.prototype.truncateSubject = function(length, elipse){
	const truncated = this.subject.slice(0,length);
	let obj = {
		body: this.body,
		subject: elipse ? truncated + "..." : truncated
	};
	return obj;
};

export default Message;