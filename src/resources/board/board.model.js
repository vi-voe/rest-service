const uuid = require('uuid').v4;

/** Class representing a Board. */
class Board {
  /**
     * Create a Board.
     * @param {string} id - id of Board.
     * @param {string} title - title of Board.
     * @param {object} columns - columns on Board.
     */
  constructor({
    id = uuid(),
    title = 'board title',
    columns = [{ order: 1, title: 'to do' }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(obj => ({id: uuid(), ...obj}))
  }
}

module.exports = Board;
