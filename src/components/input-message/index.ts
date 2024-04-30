import Block from "../../tools/Block";
import store from "../../tools/Store";
import { validate } from "../../tools/validate";
import { ComponentsName } from "../../tools/validationRules";
import "./input-message.css";

import InputMessageRaw from "./input-message.hbs";

interface Props {
  [key: string]: unknown;
}
export class InputMessage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const inputElement = form.elements.namedItem(
            "message"
          ) as HTMLInputElement;
          const message = inputElement.value;
          if (!validate(ComponentsName.MESSAGE, message)) {
            alert("Сообщение не должно быть пустым");
            return;
          }

          const currentStore = store.getState();
          const currentSocket = currentStore.currentSocket;

          currentSocket?.sendMessage(message);
        },
      },
    });
  }

  override render() {
    return this.compile(InputMessageRaw, this.props);
  }
}
