import {
  ProfileSettings,
  InputSearch,
  ChatSidebar,
  MessageUser,
  MessageList,
  InputMessage,
  Button,
  ChatItem,
} from "../../components";
import Block from "../../tools/Block";
import { submit } from "../../tools/formUtils";
import { ComponentsName } from "../../tools/validationRules";
import "./chat-page.css";
import ChatPageRaw from "./chat-page.hbs";
import UserController from "../../controllers/user-controller";
import store, { StoreEvents } from "../../tools/Store";
import router from "../../tools/router";
import { MessageBlock } from "../../components/messageBlock";
import { MessageBlockEmpty } from "../../components/messageListEmpty";
import ChatController from "../../controllers/chat-controller";

interface Props {
  [key: string]: unknown;
}

interface ChatItem {
  title: string;
  last_message: Record<string, string>;
  unread_count: number;
}

export class ChatPage extends Block {
  constructor() {
    super({
      children: {},
      profile: [
        new ProfileSettings({
          className: "profile-settings",
          navigate: () => {
            router.go("/settings");
          },
        }),
      ],
      inputsearch: [
        new InputSearch({
          className: "search-container",
        }),
      ],
      sidebar: new ChatSidebar({}),
      messageBlock: new MessageBlock({}),
      user: [
        new MessageUser({
          userName: "Петя",
        }),
      ],
      // list: [new MessageList({})],
      // inputmessage: [
      //   new InputMessage({
      //     type: "submit",
      //     submit,
      //     name: ComponentsName.MESSAGE,
      //   }),
      // ],
      button_primary: new Button({
        text: "chatbutton",
        page: "login",
        className: "button-primary",
        type: "button",
        createChat: e => {
          // ChatController.createChats({ title: 'namechat' });
        },
        addUser: e => {
          ChatController.addUsersToChat({
            users: [83],
            chatId: 703,
          });
        },
        id: "chat-button",
      }),
      button_info: new Button({
        text: "info",
        page: "login",
        className: "button-primary",
        type: "button",
        getInfo: () => {
          UserController.getUserInfo();
        },

        id: "chat-button",
      }),
      button_token: new Button({
        text: "token",
        page: "login",
        className: "button-primary",
        type: "button",
        getToken: () => {
          ChatController.ChatTokenId(703);
        },

        id: "chat-button",
      }),
    });
    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  init() {
    // if (this.props.currentChat) {
    //   this.children.messageBlock = new MessageBlock({});
    // } else {
    //   this.children.messageBlock = new MessageBlockEmpty({});
    // }
    // this.children.sidebar = new ChatSidebar({ chats: store.getState().chats });
    // this.children.inputsearch = new InputSearch({});
    // this.children.profile = new ProfileSettings({});
    // this.children.Messenger = new Messenger();
  }
  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    // if (newProps.currentChat) {
    //   this.children.messageBlock = new MessageBlock({});
    // } else {
    //   this.children.messageBlock = new MessageBlockEmpty({});
    // }
    return true;
  }

  render() {
    return this.compile(ChatPageRaw, this.props);
  }
}
