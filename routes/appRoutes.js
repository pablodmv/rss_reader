'use strict';

module.exports = function(app) {
	var appController = require('../controller/appController');

	// todoList Routes
	app.route('/')
		.get(appController.home);

	// app.route('/tasks/:taskId')
	// 	.get(todoList.read_a_task)
	// 	.put(todoList.update_a_task)
	// 	.delete(todoList.delete_a_task);
};
