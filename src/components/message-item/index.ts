import Block from "../../tools/Block";
import "./message-item.css";

import MessageItemRaw from "./message-item.hbs";

interface Props {
  [key: string]: unknown;
}

export class MessageItem extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  override render() {
    return this.compile(MessageItemRaw, this.props);
  }
}
