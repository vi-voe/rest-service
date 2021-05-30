const uuid = require('uuid').v4;

/** Class representing a task. */
class Task {
  /**
     * Create a task.
     * @param {string} id - id of task.
     * @param {string} title - title.
     * @param {number} order - order on board.
     * @param {string} description - task description.
     * @param {string} userId - id of assigned user .
     * @param {string} boardId - id of task board.
     * @param {string} columnId - id of column on board.
     */
  constructor({
    id = uuid(),
    title = 'task title',
    order = 1,
    description = 'task description',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
