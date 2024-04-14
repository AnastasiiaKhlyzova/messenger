// chat-api.js
import HTTP from '../tools/HTTPTransport';
import { BaseAPI } from './base-api';

const userAPIInstance = new HTTP();

export default class UserAPI extends BaseAPI {
  static create(data) {
    console.log('create', data);
    return userAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signup', { data });
  }

  static signin(data) {
    return userAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signin', { data });
  }

  static signout(data) {
    return userAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/logout', { data });
  }

  static updateProfile(data) {
    return userAPIInstance.put('https://ya-praktikum.tech/api/v2/user/profile', { data });
  }

  static updateAvatar(data) {
    return userAPIInstance.put(
      'https://ya-praktikum.tech/api/v2/user/profile/avatar',
      { data },
    );
  }

  static changePassword(data) {
    return userAPIInstance.put('https://ya-praktikum.tech/api/v2/user/password', { data });
  }

  static createChat(data) {
    return userAPIInstance.post('https://ya-praktikum.tech/api/v2/chats', { data });
  }

  static AddUsers(data) {
    return userAPIInstance.put('https://ya-praktikum.tech/api/v2/chats/users', { data });
  }

  static UserInfo(data) {
    return userAPIInstance.get('https://ya-praktikum.tech/api/v2/auth/user', { data });
  }

  static getChats() {
    return userAPIInstance.get('https://ya-praktikum.tech/api/v2/chats');
  }
}
