import Block from "../../tools/Block";
import "./chat-item.css";

import ChatItemRaw from "./chat-item.hbs";

interface Props {
  click: () => void;
  name: string;
  lastMessage?: string;
  unreadCount: number;
}

export class ChatItem extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => {
          props.click();
        },
      },
    });
  }

  override render() {
    return this.compile(ChatItemRaw, this.props);
  }
}
