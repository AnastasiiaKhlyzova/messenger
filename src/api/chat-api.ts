import HTTP from "../tools/HTTPTransport";
import {
  AddUsersRequest,
  CreateChatRequest,
  DeleteUserFromChatRequest,
} from "./types";
import { BASE_URL } from "./apiConfig";

const chatAPIInstance = new HTTP();

export default class ChatAPI {
  static baseURL: string = BASE_URL;
  static createChat(data: CreateChatRequest) {
    return chatAPIInstance.post(`${this.baseURL}/chats`, {
      data,
    });
  }

  static addUsers(data: AddUsersRequest) {
    return chatAPIInstance.put(`${this.baseURL}/chats/users`, {
      data,
    });
  }

  static getChats() {
    return chatAPIInstance.get(`${this.baseURL}/chats`);
  }
  static getChatToken(id: number): Promise<XMLHttpRequest> {
    return chatAPIInstance.post(`${this.baseURL}/chats/token/${id}`);
  }

  static getChatUsers(id: number) {
    return chatAPIInstance.get(`${this.baseURL}/chats/${id}/users`);
  }
  static DeleteUserFromChat(data: DeleteUserFromChatRequest) {
    return chatAPIInstance.delete(`${this.baseURL}/chats/users`, { data });
  }
}
