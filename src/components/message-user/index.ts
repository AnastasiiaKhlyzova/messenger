import Block from "../../tools/Block";
import "./message-user.css";

import MessageUserRaw from "./message-user.hbs";

interface Props {
  [key: string]: unknown;
}

export class MessageUser extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => console.log("event"),
      },
    });
  }

  override render() {
    return this.compile(MessageUserRaw, this.props);
  }
}
