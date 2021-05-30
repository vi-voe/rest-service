const boardRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/tasks.memory.repository');

/**
 * Returns all boards
 * @returns {array} Returns list of all boards
 */
const getAllBoards = () => boardRepo.getAll();

/**
 * Returns board by his id
 * @param {string} boardId the id of board to find him
 * @returns {object} Returns the asked board
 */
const getBoard = (boardId) => boardRepo.getBoard(boardId);

/**
 * Create new board in repo
 * @param {object} newBoard object with data of new board
 * @returns {object} Returns new created board
 */
const saveBoard = (newBoard) => boardRepo.saveBoard(newBoard);

/**
 * Update board info by board id in repo
 * @param {string} boardId the id of board to find him
 * @param {object} boardInfo object with new data of board
 * @returns {object} Returns updated board without password
 */
const updateBoard = (boardId, boardInfo) => boardRepo.updateBoard(boardId, boardInfo);

/**
 * Delete board by id, delete tasks from board
 * @param {string} boardId the id of board to find him and delete
 * @returns {} status code
 */
const deleteBoard = (boardId) => {
  boardRepo.deleteBoard(boardId);
  taskRepo.deleteTasksFromBoard(boardId);
};

module.exports = { getAllBoards, saveBoard, getBoard, updateBoard, deleteBoard };
