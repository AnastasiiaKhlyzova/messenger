import Block from "../../tools/Block";
import store from "../../tools/Store";
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
          const currentStore = store.getState();
          const currentSocket = currentStore.currentSocket;

          const inputElement = e.target?.elements["message"];
          const message = inputElement.value;

          currentSocket?.sendMessage(message);
        },
      },
    });
  }

  override render() {
    return this.compile(InputMessageRaw, this.props);
  }
}
