const usersRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/tasks.memory.repository');

/**
 * Returns all users
 * @returns {array} Returns list of all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Returns user by his id
 * @param {string} userId the id of user to find him
 * @returns {object} Returns the asked user
 */
const getUser = (userId) => usersRepo.getUser(userId);

/**
 * Create new users in repo
 * @param {object} newUser object with data of new user
 * @returns {object} Returns new created user without password
 */
const saveUser = (newUser) => usersRepo.saveUser(newUser);

/**
 * Update user info by user id in repo
 * @param {string} userId the id of user to find him
 * @param {object} userInfo object with new data of user
 * @returns {object} Returns updated user without password
 */
const updateUser = (userId, userInfo) => usersRepo.updateUser(userId, userInfo);

/**
 * Delete user by id and Unassign User from tasks
 * @param {string} userId the id of user to find him and delete
 * @returns {} status code
 */
const deleteUser = (userId) => {
  usersRepo.deleteUser(userId);
  taskRepo.unassignUser(userId)
};

module.exports = { getAll, saveUser, getUser, updateUser, deleteUser };
