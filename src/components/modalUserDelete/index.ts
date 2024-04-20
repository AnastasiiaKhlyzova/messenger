import Block from "../../tools/Block";
import { Button } from "../button";
import { Fragment } from "../fragment";
import ModalUserDeletetRaw from "./modalUserDelete.hbs";
import "./modalUserDelete.css";
import store, { StoreEvents, User } from "../../tools/Store";
import { UserItem } from "../searchUserItem";
import ChatController from "../../controllers/chat-controller";

interface Props {
  closeModal: () => void;
}

export class ModalUserDelete extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_close: new Button({
        onClick: props.closeModal,
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

  componentDidUpdate(
    _oldProps: Props,
    newProps: { usersInCurrentChat: User[] }
  ): boolean {
    if (newProps.usersInCurrentChat) {
      const currentState = store.getState();
      this.children.usersList = newProps.usersInCurrentChat?.map(user => {
        const handler = () => {
          ChatController.DeleteUserFromChat({
            users: [user.id],
            chatId: currentState.currentChat!,
          }).then(() => {
            const currentState = store.getState();
            ChatController.getUsersInChat(currentState.currentChat!);
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
