import Block, { Props } from "../../tools/Block";
import { ChatItem } from "../chat-item";
import "./chat-sidebar.css";
import store, { StoreEvents } from "../../tools/Store";

import ChatSidebarRaw from "./chat-sidebar.hbs";
import UserController from "../../controllers/user-controller";
import MyWebSocket from "../../tools/webSocket";
import { MessageItem } from "../message-item";
import { Button } from "../button";
import { ModalCreateChat } from "../modalCreateChat";
import ChatController from "../../controllers/chat-controller";

interface Props {
  [key: string]: unknown;
}

export class ChatSidebar extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });

    ChatController.getUsersChats();

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }
  override init() {
    const openCreateChatModal = () => {
      console.log("rrr", this);
      this.children.modalCreatechat.setProps({ isOpen: true });
    };
    const closeCreateChatModal = () => {
      // this.children.modal = new Fragment({});
      this.children.modalCreatechat.setProps({ isOpen: false });
      console.log("srabotalo");
    };

    this.children.modalCreatechat = new ModalCreateChat({
      closeModal: closeCreateChatModal,
    });
    this.children.button_create_chat = new Button({
      text: "Create chat",
      page: "chat",
      openModal: openCreateChatModal,
    });
  }
  override render() {
    return this.compile(ChatSidebarRaw, this.props);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (newProps.chats) {
      this.children.chatsList = newProps.chats?.map(
        chat =>
          new ChatItem({
            name: chat.title,
            lastMessage: chat.last_message?.content,
            unreadCount: chat.unread_count,
            click: async () => {
              store.dispatch("currentChat", chat.id);
              const token = await ChatController.ChatTokenId(chat.id);

              store.dispatch(
                "currentChatToken",
                JSON.parse(token.response).token
              );

              const userInfo = await UserController.getUserInfo();
              store.dispatch("user", JSON.parse(userInfo.response));

              const currentStore = store.getState();
              const socket = new MyWebSocket(
                `wss://ya-praktikum.tech/ws/chats/${currentStore.user.id}/${currentStore.currentChat}/${currentStore.currentChatToken}`
              );
              store.dispatch("currentSocket", socket);

              socket.on("messages", data => {
                if (Array.isArray(data)) {
                  store.dispatch("messages", data.reverse());
                } else {
                  const lastMessages = store.getState().messages;
                  const newMessagesToDispatch = [...lastMessages, data];
                  if (lastMessages) {
                    store.dispatch("messages", newMessagesToDispatch);
                  }
                }
              });

              setTimeout(() => {
                socket.getOldMessages();
              }, 2000);

              socket.recieveMessages();

              // store.dispatch("messages")
              const currentState = store.getState();
              console.log("nnn", currentState);
              ChatController.getChatUsers(currentState.currentChat);
            },
          })
      );
    }

    return true;
  }
}
