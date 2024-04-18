import Block from "../../tools/Block";

import { MessageList } from "../message-list";

import MessageBlockRaw from "./messageBlock.hbs";

interface Props {
  [key: string]: unknown;
}

export class MessageBlock extends Block {
  constructor(props: Props) {
    super({
      ...props,
      list: new MessageList({}),
    });
  }

  override render() {
    return this.compile(MessageBlockRaw, this.props);
  }
}
