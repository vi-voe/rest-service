const uuid = require('uuid').v4;

/** Class representing a User. */
class User {
  /**
     * Create a task.
     * @param {string} id - id of User.
     * @param {string} name - name of User.
     * @param {string} login - login of User.
     * @param {string} password - password  of User.
     */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
