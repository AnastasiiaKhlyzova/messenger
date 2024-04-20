import { ProfileSettings, ChatSidebar } from "../../components";
import Block from "../../tools/Block";

import "./chat-page.css";
import ChatPageRaw from "./chat-page.hbs";
import UserController from "../../controllers/user-controller";
import store, { StoreEvents, User } from "../../tools/Store";
import router from "../../tools/router";
import { MessageBlock } from "../../components/messageBlock";
import isBlock from "../../tools/BlockGuard";
import { BASE_URL } from "../../api/apiConfig";

interface Props {
  [key: string]: unknown;
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
        baseUrl: BASE_URL,
      }),

      sidebar: new ChatSidebar({}),
      messageBlock: new MessageBlock({}),
    });
    UserController.getUserInfo();

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override componentDidUpdate(_oldProps: Props, newProps: { user?: User }) {
    if (newProps.user && isBlock(this.children.profile)) {
      this.children.profile.setProps({ url: newProps.user.avatar });
    }
    return true;
  }

  render() {
    return this.compile(ChatPageRaw, this.props);
  }
}
