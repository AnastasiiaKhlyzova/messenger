import UserController from "../../controllers/user-controller";
import Block from "../../tools/Block";
import store, { StoreEvents } from "../../tools/Store";
import { submit } from "../../tools/formUtils";
import { ComponentsName } from "../../tools/validationRules";
import MyWebSocket from "../../tools/webSocket";
import { Button } from "../button";
import { ChatItem } from "../chat-item";
import { Fragment } from "../fragment";
import { InputMessage } from "../input-message";
import { MessageItem } from "../message-item";
import { MessageListEmpty } from "../messageListEmpty";
import { Modal } from "../modalUserAdd";
import { ModalUserDelete } from "../modalUserDelete";
import "./message-list.css";

import MessageListRaw from "./message-list.hbs";

interface Props {
  [key: string]: unknown;
}

export class MessageList extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(MessageListRaw, this.props);
  }

  init() {
    const closeModal = () => {
      // this.children.modal = new Fragment({});
      this.children.modal.setProps({ isOpen: false });
      console.log("srabotalo");
    };
    const closeModalDeleteUser = () => {
      // this.children.modal = new Fragment({});
      this.children.modal.setProps({ isOpen: false });
      console.log("srabotalo");
    };
    this.children.messageItems = [new MessageListEmpty({})];
    this.children.modal = new Modal({ closeModal: closeModal });
    this.children.modalUserDelete = new ModalUserDelete({
      closeModal: closeModal,
    });
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (newProps.messages && newProps.messages.length >= 0) {
      const currentStore = store.getState();
      console.log("fff", newProps.messages);
      this.children.messageItems = newProps.messages.map(message => {
        const isMessageFromCurrentUser =
          currentStore.user.id == message.user_id;
        return new MessageItem({
          text: message.content,
          timestamp: message.timestamp,
          isUserMessage: isMessageFromCurrentUser,
        });
      });

      const openModal = () => {
        console.log("rrr", this);
        this.children.modal.setProps({ isOpen: true });
      };
      const openModalDeleteUser = () => {
        console.log("rrr", this);
        this.children.modalUserDelete.setProps({ isOpen: true });
      };

      this.children.button_primary = new Button({
        text: "Add user",
        page: "chat-page",
        className: "button-primary",
        type: "button",
        openModal: openModal,
      });
      this.children.button_delete_user = new Button({
        text: "Delete user",
        page: "chat-page",
        className: "button-primary",
        type: "button",
        openModal: openModalDeleteUser,
      });

      this.children.inputmessage = new InputMessage({
        type: "submit",

        name: ComponentsName.MESSAGE,
      });
    }

    return true;
  }
}
