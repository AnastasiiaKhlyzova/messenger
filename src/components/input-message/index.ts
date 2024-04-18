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
        submit: e => {
          e.preventDefault();
          const currentStore = store.getState();
          const currentSocket = currentStore.currentSocket;

          console.log("tut");

          const inputElement = e.target.elements["message"];
          const message = inputElement.value;
          console.log("tuta", message);
          currentSocket?.sendMessage(message);
        },
      },
    });
  }

  override render() {
    return this.compile(InputMessageRaw, this.props);
  }
  // for future
  // validate(e) {
  //   e.preventDefault();
  //   const { name, value } = this.props;
  //   console.log(name);
  //   const rule = validationRules[name];
  //   if (!rule.test(value)) {
  //     console.error(`Ошибка: значение поля ${name} невалидно.`);
  //   } else {
  //     console.log(`Поле ${name} валидно.`);
  //   }
  // }
}
