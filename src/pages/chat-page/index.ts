import { ProfileSettings, ChatSidebar, Button } from "../../components";
import Block from "../../tools/Block";

import "./chat-page.css";
import ChatPageRaw from "./chat-page.hbs";
import UserController from "../../controllers/user-controller";
import store, { StoreEvents, User } from "../../tools/Store";
import router from "../../tools/router";
import { MessageBlock } from "../../components/messageBlock";

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
      profile: new ProfileSettings({
        className: "profile-settings",
        navigate: () => {
          router.go("/settings");
        },
      }),

      sidebar: new ChatSidebar({}),
      messageBlock: new MessageBlock({}),
    });
    UserController.getUserInfo();

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  init() {}
  override componentDidUpdate(oldProps: Props, newProps: { user: User }) {
    if (newProps.user) {
      this.children.profile.setProps({ url: newProps.user.avatar });
    }
    return true;
  }

  render() {
    return this.compile(ChatPageRaw, this.props);
  }
}
