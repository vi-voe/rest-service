const { Users } = require('../../utils/pseudoDb');

/**
 * Returns all users
 * @returns {array} Returns list of all users
 */
const getAll = async () => Users

/**
 * Returns user by his id
 * @param {string} userId the id of user to find him
 * @returns {object} Returns the asked user
 */
const getUser = async(userId) => Users.find(obj => obj.id === userId)

/**
 * Create new users in repo
 * @param {object} newUser object with data of new user
 * @returns {object} Returns new created user without password
 */
const saveUser = async(newUser) => {
  Users.push(newUser)
  return newUser;
}

/**
 * Update user info by user id in repo
 * @param {string} userId the id of user to find him
 * @param {object} userInfo object with new data of user
 * @returns {object} Returns updated user without password
 */
const updateUser = async(userId, userInfo) => {
  const user = await getUser(userId);
  user.name = userInfo.name;
  user.login = userInfo.login;
  user.password = userInfo.password;
  // user = {...user, ...userInfo}
  return user;
}

/**
 * Delete user by id
 * @param {string} userId the id of user to find him and delete
 * @returns {} status code
 */
const deleteUser = async(userId) => {
  const indexOfUser = Users.findIndex(obj => obj.id === userId)
  Users.splice(indexOfUser, 1);
}

module.exports = { getAll, saveUser, getUser, updateUser, deleteUser };