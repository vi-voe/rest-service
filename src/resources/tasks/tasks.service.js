const taskRepo = require('./tasks.memory.repository');

/**
 * Returns all tasks
 * @param {string} boardId the id of board with task
 * @returns {array} Returns list of all tasks
 */
const getAllTasks = (boardId) => taskRepo.getAll(boardId);

/**
 * Returns user by his id
 * @param {string} boardId the id of board with task
 * @param {string} taskId the id of task to find him
 * @returns {object} Returns the asked user
 */
const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);

/**
 * Create new users in repo
 * @param {string} boardId the id of board with task
 * @param {object} taskInfo object with data of new task
 * @returns {object} Returns new created task
 */
const saveTask = (boardId, taskInfo) => taskRepo.saveTask(boardId, taskInfo);

/**
 * Update task info by task id in repo
 * @param {string} boardId the id of board with task
 * @param {string} taskId the id of task to find him
 * @param {object} taskInfo object with new data of task
 * @returns {object} Returns updated task
 */
const updateTask = (boardId, taskId, taskInfo) => taskRepo.updateTask(boardId, taskId, taskInfo);

/**
 * Delete task by id
 * @param {string} boardId the id of board with task
 * @param {string} taskId the id of task to find him and delete 
 * @returns {} status code
 */
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId);

module.exports = { getAllTasks, saveTask, getTask, updateTask, deleteTask };
