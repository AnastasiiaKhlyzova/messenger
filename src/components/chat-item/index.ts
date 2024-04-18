import Block from "../../tools/Block";
import "./chat-item.css";

import ChatItemRaw from "./chat-item.hbs";

interface Props {
  [key: string]: unknown;
}

export class ChatItem extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => {
          if (props.click) {
            const click = props.click as () => void;
            click();
          }
        },
      },
    });
  }

  override render() {
    return this.compile(ChatItemRaw, this.props);
  }
}
