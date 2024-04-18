import HTTP from "../tools/HTTPTransport";
import {
  AddUsersRequest,
  CreateChatRequest,
  DeleteUserFromChatRequest,
} from "./types";

const chatAPIInstance = new HTTP();

export default class ChatAPI {
  static createChat(data: CreateChatRequest) {
    return chatAPIInstance.post("https://ya-praktikum.tech/api/v2/chats", {
      data,
    });
  }

  static AddUsers(data: AddUsersRequest) {
    return chatAPIInstance.put("https://ya-praktikum.tech/api/v2/chats/users", {
      data,
    });
  }

  static getChats() {
    return chatAPIInstance.get("https://ya-praktikum.tech/api/v2/chats");
  }
  static getChatToken(id: number): Promise<XMLHttpRequest> {
    return chatAPIInstance.post(
      `https://ya-praktikum.tech/api/v2/chats/token/${id}`
    );
  }

  static getChatUsers(id: number) {
    return chatAPIInstance.get(
      `https://ya-praktikum.tech/api/v2/chats/${id}/users`
    );
  }
  static DeleteUserFromChat(data: DeleteUserFromChatRequest) {
    return chatAPIInstance.delete(
      `https://ya-praktikum.tech/api/v2/chats/users`,
      { data }
    );
  }
}
