import Block from "../../tools/Block";
import { Button } from "../button";
import { Fragment } from "../fragment";

import ModalUserDeletetRaw from "./modalUserDelete.hbs";
import "./modalUserDelete.css";
import { InputField } from "../input-field";
import UserController from "../../controllers/user-controller";
import store, { StoreEvents } from "../../tools/Store";
import { UserItem } from "../searchUserItem";
import ChatController from "../../controllers/chat-controller";

interface Props {
  [key: string]: unknown;
}

export class ModalUserDelete extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_close: new Button({
        closeModal: props.closeModal,
        text: "close",
      }),
      fragment: new Fragment({}),
      users_list: new UserItem({}),
    });

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(ModalUserDeletetRaw, this.props);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (newProps.usersInCurrentChat) {
      const currentState = store.getState();
      this.children.usersList = newProps.usersInCurrentChat?.map(user => {
        const handler = () => {
          ChatController.DeleteUserFromChat({
            users: [user.id],
            chatId: currentState.currentChat,
          });
        };
        return new UserItem({
          login: user.login,
          handler: handler,
          text: "Delete user",
        });
      });
    }

    return true;
  }
}
