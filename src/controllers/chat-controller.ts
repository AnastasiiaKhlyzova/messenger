import store from "../tools/Store";
import ChatAPI from "../api/chat-api.js";

export default class ChatController {
  public static createChats(data) {
    return ChatAPI.createChat(data).then(data => console.log(data));
  }
  public static addUsersToChat(data) {
    ChatAPI.AddUsers(data).then(data => console.log(data));
  }
  public static ChatTokenId(id) {
    return ChatAPI.getChatToken(id);
  }

  public static getUsersChats() {
    return ChatAPI.getChats().then(data =>
      store.dispatch("chats", JSON.parse(data.response))
    );
  }
  public static getChatUsers(id) {
    return ChatAPI.getChatUsers(id).then(data =>
      store.dispatch("usersInCurrentChat", JSON.parse(data.response))
    );
  }
  public static DeleteUserFromChat(data) {
    return ChatAPI.DeleteUserFromChat(data);
  }
}
