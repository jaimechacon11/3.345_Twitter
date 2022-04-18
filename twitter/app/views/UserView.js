const User = require("./../models/user");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      const aux = {
        error: "payload no existe",
      };
      return aux;
    } else if (payload.name || payload.username || payload.id === null) {
      const aux = {
        error: "necesitan tener un valor válido",
      };
      return aux;
    } else if (payload.name || payload.username || payload.id === undefined) {
      const aux = {
        error: "necesitan tener un valor válido",
      };
      return aux;
    } 
  }

  static createUser_1(payload){
    return new User(payload.id, payload.username, payload.name, "Sin bio");

  }
}
module.exports = UserView;
