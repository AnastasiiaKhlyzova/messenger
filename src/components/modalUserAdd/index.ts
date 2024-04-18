import Block from "../../tools/Block";
import { Button } from "../button";
import { Fragment } from "../fragment";

import ModaltRaw from "./modalUserAdd.hbs";
import "./modalUserAdd.css";
import { InputField } from "../input-field";
import UserController from "../../controllers/user-controller";
import store, { StoreEvents } from "../../tools/Store";
import { UserItem } from "../searchUserItem";

interface Props {
  [key: string]: unknown;
}

export class Modal extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_close: new Button({
        closeModal: props.closeModal,
        text: "close",
      }),
      fragment: new Fragment({}),
      button_search: new Button({
        text: "search",
        click: (e: MouseEvent) => {
          const input = document.querySelector("#find-user");
          console.log(input.value);
          UserController.userSearch({ login: input.value });
        },
      }),
      input_find_user: new InputField({ onChange: () => {}, id: "find-user" }),
    });
    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(ModaltRaw, this.props);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (newProps.usersSearchResult) {
      const currentState = store.getState();
      this.children.usersList = newProps.usersSearchResult?.map(user => {
        const handler = () => {
          ChatController.addUsersToChat({
            users: [user.id],
            chatId: currentState.currentChat,
          });
        };

        return new UserItem({
          login: user.login,
          handler: handler,
          text: "Add user",
        });
      });
    }

    return true;
  }
}
