const User = require("./../models/user");
class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(user) {
    return [user.id, user.username, user.name, user.bio];
  }

  static updateUserUsername(user, new_user) {
    user.setUsername = new_user;
  }
  
  static getAllUsernames(list) {
    return [list[0].username, list[1].username, list[2].username];
  }
}
module.exports = UserService;
