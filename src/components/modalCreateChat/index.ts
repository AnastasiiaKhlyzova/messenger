import Block from "../../tools/Block";
import { Button } from "../button";
import { Fragment } from "../fragment";
import ModalCreateChattRaw from "./modalCreateChat.hbs";
import "./modalCreateChat.css";
import { InputField } from "../input-field";
import store, { SearchAddUser, StoreEvents } from "../../tools/Store";
import { UserItem } from "../searchUserItem";
import ChatController from "../../controllers/chat-controller";
import { ComponentsName } from "../../tools/validationRules";

interface Props {
  closeModal: () => void;
}

export class ModalCreateChat extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_close: new Button({
        onClick: props.closeModal,
        text: "close",
      }),
      fragment: new Fragment({}),
      button_create: new Button({
        text: "Create Chat",
        onClick: () => {
          const input = document.querySelector(
            "#chat-title"
          ) as HTMLInputElement;

          ChatController.createChats({ title: input.value }).then(() => {
            ChatController.getUsersChats();
          });
        },
      }),
      input_title_chat: new InputField({
        onChange: () => {},
        id: "chat-title",
        type: "input",
        name: ComponentsName.MESSAGE,
      }),
    });
    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(ModalCreateChattRaw, this.props);
  }

  componentDidUpdate(
    oldProps: Props,
    newProps: { usersSearchResult: SearchAddUser[] }
  ): boolean {
    if (newProps.usersSearchResult) {
      const currentState = store.getState();
      this.children.usersList = newProps.usersSearchResult?.map(user => {
        const handler = () => {
          ChatController.addUsersToChat({
            users: [user.id],
            chatId: currentState.currentChat!,
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
