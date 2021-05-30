const { Boards } = require('../../utils/pseudoDb');

/**
 * Returns all boards
 * @returns {array} Returns list of all boards
 */
const getAll = async () => Boards

/**
 * Returns board by his id
 * @param {string} boardId the id of board to find him
 * @returns {object} Returns the asked board
 */
const getBoard = async(boardId) => Boards.find(obj => obj.id === boardId)

/**
 * Create new board in repo
 * @param {object} newBoard object with data of new board
 * @returns {object} Returns new created board
 */
const saveBoard = async(newBoard) => {
  Boards.push(newBoard)
  return newBoard;
}

/**
 * Update board info by board id in repo
 * @param {string} boardId the id of board to find him
 * @param {object} boardInfo object with new data of board
 * @returns {object} Returns updated board without password
 */
const updateBoard = async(boardId, boardInfo) => {
  const board = await getBoard(boardId);
  board.title = boardInfo.title;
  board.columns = boardInfo.columns;
  return board;
}

/**
 * Delete user by id
 * @param {string} boardId the id of user to find him and delete
 * @returns {} status code
 */
const deleteBoard = async(boardId) => {
  const indexOfUser = Boards.findIndex(obj => obj.id === boardId);
  Boards.splice(indexOfUser, 1);
}

module.exports = { getAll, saveBoard, getBoard, updateBoard, deleteBoard };