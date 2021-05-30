const { Tasks } = require('../../utils/pseudoDb');
const Task = require('./task.model');

/**
 * Returns all tasks
 * @param {string} boardId the id of board with task
 * @returns {array} Returns list of all tasks
 */
const getAll = async (boardId) => Tasks.filter(obj => obj.boardId === boardId);

/**
 * Returns user by his id
 * @param {string} boardId the id of board with task
 * @param {string} taskId the id of task to find him
 * @returns {object} Returns the asked user
 */
const getTask = async(boardId, taskId) => Tasks.find(obj => {
    if(obj.id === taskId && obj.boardId === boardId) {
      return obj
    }
    return false
  })

  /**
 * Create new users in repo
 * @param {string} boardId the id of board with task
 * @param {object} taskInfo object with data of new task
 * @returns {object} Returns new created task
 */
const saveTask = async(boardId, taskInfo) => {
  const newTask = new Task({ ...taskInfo, boardId })
  Tasks.push(newTask);
  return newTask;
}

/**
 * Update task info by task id in repo
 * @param {string} boardId the id of board with task
 * @param {string} taskId the id of task to find him
 * @param {object} taskInfo object with new data of task
 * @returns {object} Returns updated task
 */
const updateTask = async(boardId, taskId, taskInfo) => {
  const task = await getTask(boardId, taskId);
  task.title = taskInfo.title;
  task.order = taskInfo.order;
  task.description = taskInfo.description;
  task.userId = taskInfo.userId;
  task.boardId = taskInfo.boardId;
  task.columnId = taskInfo.columnId;
  return task;
}

/**
 * Delete task by id
 * @param {string} boardId the id of board with task
 * @param {string} taskId the id of task to find him and delete 
 * @returns {} status code
 */
const deleteTask = async(boardId, taskId) => {
  const indexOfUser = Tasks.findIndex(obj => obj.id === taskId)
  Tasks.splice(indexOfUser, 1);
}

/**
 * Delete task by id from board
 * @param {string} boardId the id of board with task
 * @returns {} status code
 */
const deleteTasksFromBoard = async(boardId) => {
  const allTasks = await getAll(boardId);
  allTasks.map(task => deleteTask(boardId, task.id));    
}

/**
 * Unassign User from task
 * @param {string} userId the id of user
 * @returns {object} current task with unassigned User
 */
const unassignUser = async(userId) => {
  Tasks.map(task => {
    const currentTask = task
    if (currentTask.userId === userId) currentTask.userId = null;
    return currentTask;
  })
}

module.exports = { getAll, saveTask, getTask, updateTask, deleteTask, deleteTasksFromBoard, unassignUser };