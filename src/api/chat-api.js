import HTTP from "../tools/HTTPTransport";
import { BaseAPI } from "./base-api";

const chatAPIInstance = new HTTP();

export default class ChatAPI extends BaseAPI {
  static createChat(data) {
    return chatAPIInstance.post("https://ya-praktikum.tech/api/v2/chats", {
      data,
    });
  }

  static AddUsers(data) {
    return chatAPIInstance.put("https://ya-praktikum.tech/api/v2/chats/users", {
      data,
    });
  }

  static getChats() {
    return chatAPIInstance.get("https://ya-praktikum.tech/api/v2/chats");
  }
  static getChatToken(id) {
    return chatAPIInstance.post(
      `https://ya-praktikum.tech/api/v2/chats/token/${id}`
    );
  }

  static getChatUsers(id) {
    return chatAPIInstance.get(
      `https://ya-praktikum.tech/api/v2/chats/${id}/users`
    );
  }
  static DeleteUserFromChat(data) {
    return chatAPIInstance.delete(
      `https://ya-praktikum.tech/api/v2/chats/users`,
      { data }
    );
  }
}
