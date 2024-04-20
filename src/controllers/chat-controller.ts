import store from "../tools/Store";
import ChatAPI from "../api/chat-api";
import {
  AddUsersRequest,
  CreateChatRequest,
  DeleteUserFromChatRequest,
} from "../api/types";

export default class ChatController {
  public static createChats(data: CreateChatRequest) {
    return ChatAPI.createChat(data);
  }
  public static addUsersToChat(data: AddUsersRequest) {
    return ChatAPI.addUsers(data);
  }
  public static chatTokenId(id: number) {
    return ChatAPI.getChatToken(id).then((token: XMLHttpRequest) => {
      return store.dispatch(
        "currentChatToken",
        JSON.parse(token.response).token
      );
    });
  }

  public static getUsersChats() {
    return ChatAPI.getChats().then((data: XMLHttpRequest) => {
      store.dispatch("chats", JSON.parse(data.response));
    });
  }
  public static getUsersInChat(id: number) {
    return ChatAPI.getChatUsers(id).then((data: XMLHttpRequest) =>
      store.dispatch("usersInCurrentChat", JSON.parse(data.response))
    );
  }
  public static DeleteUserFromChat(data: DeleteUserFromChatRequest) {
    return ChatAPI.DeleteUserFromChat(data);
  }
}
