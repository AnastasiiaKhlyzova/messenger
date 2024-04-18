import Block from "../../tools/Block";
import { ChatItem } from "../chat-item";
import "./chat-sidebar.css";
import store, { ChatInfo, StoreEvents } from "../../tools/Store";

import ChatSidebarRaw from "./chat-sidebar.hbs";
import UserController from "../../controllers/user-controller";
import MyWebSocket from "../../tools/webSocket";

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
      this.children.modalCreatechat.setProps({ isOpen: true });
    };
    const closeCreateChatModal = () => {
      this.children.modalCreatechat.setProps({ isOpen: false });
    };

    this.children.modalCreatechat = new ModalCreateChat({
      closeModal: closeCreateChatModal,
    });
    this.children.button_create_chat = new Button({
      text: "Create chat",
      page: "chat",
      className: "button-primary",
      onClick: openCreateChatModal,
    });
  }
  override render() {
    return this.compile(ChatSidebarRaw, this.props);
  }

  componentDidUpdate(
    oldProps: Props,
    newProps: { chats: ChatInfo[] }
  ): boolean {
    if (newProps.chats) {
      this.children.chatsList = newProps.chats?.map(
        chat =>
          new ChatItem({
            name: chat.title,
            lastMessage: chat.last_message?.content,
            unreadCount: chat.unread_count,
            click: async () => {
              store.dispatch("currentChat", chat.id);
              await ChatController.ChatTokenId(chat.id);

              await UserController.getUserInfo();

              const currentStore = store.getState();
              console.log("user id", currentStore.user.id);
              const socket = new MyWebSocket(
                `wss://ya-praktikum.tech/ws/chats/${currentStore.user.id}/${currentStore.currentChat}/${currentStore.currentChatToken}`
              );
              store.dispatch("currentSocket", socket);

              socket.on("messages", data => {
                if (Array.isArray(data)) {
                  store.dispatch("messages", data);
                } else {
                  const lastMessages = store.getState().messages;
                  const newMessagesToDispatch = [data, ...lastMessages!];
                  if (lastMessages) {
                    store.dispatch("messages", newMessagesToDispatch);
                  }
                }
              });

              setTimeout(() => {
                socket.getOldMessages();
              }, 2000);

              socket.recieveMessages();

              const currentState = store.getState();
              console.log("nnn", currentState);
              ChatController.getUsersInChat(currentState.currentChat!);
            },
          })
      );
    }

    return true;
  }
}
