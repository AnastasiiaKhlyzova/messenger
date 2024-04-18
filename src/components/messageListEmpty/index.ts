import Block from "../../tools/Block";

import MessageBlockRaw from "./messageBlockEmpty.hbs";

interface Props {
  [key: string]: unknown;
}

export class MessageListEmpty extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  override render() {
    return this.compile(MessageBlockRaw, this.props);
  }
}
