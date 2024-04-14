import store from '../tools/Store.js';
import UserAPI from '../api/user-api.js';

export default class UserController {
  // public getUser() {
  //   UserAPI.getUser()
  //            .then(data => store.dispatch('user', data));
  // }

  public static createUser(data) {
    console.log('allo');
    UserAPI.create(data)
      .then((data) => console.log(data)); // nтут можно писать в стор: в сторе надо еще сделать редьюсер
  }

  public static signinUser(data) {
    console.log('login attempt');
    UserAPI.signin(data)
      .then((data) => console.log(data)); // Тут можно обновить стор или обработать данные пользователя
  }

  public static signoutUser() {
    console.log('logout');
    UserAPI.signout()
      .then((data) => console.log(data));
  }

  public static updateUserProfile(data) {
    UserAPI.updateProfile(data)
      .then((data) => console.log(data));
  }

  // Обновление аватара пользователя
  public static updateUserAvatar(data) {
    return UserAPI.updateAvatar(data)
      .then((data) => console.log(data));
  }

  // Изменение пароля пользователя
  public static changeUserPassword(data) {
    UserAPI.changePassword(data)
      .then((data) => console.log(data));
  }

  //  Создание чата
  public static createChats(data) {
    UserAPI.createChat(data)
      .then((data) => console.log(data));
  }

  //  Добавление юзера в чат
  public static addUsersToChat(data) {
    UserAPI.AddUsers(data)
      .then((data) => console.log(data));
  }

  public static getUserInfo() {
    UserAPI.UserInfo()
      .then((data) => console.log(data));
  }

  public static ChatTokenId(id) {
    UserAPI.ChatToken(id)
      .then((data) => console.log(data));
  }

  public static getUsersChats() {
    return UserAPI.getChats()
      .then((data) => JSON.parse(data.response));
  }
}
