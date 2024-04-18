import Block from "../../tools/Block";

import MessageBlockRaw from "./messageBlockEmpty.hbs";
import "./messageBlockEmpty.css";

interface Props {
  [key: string]: unknown;
}

export class MessageBlockEmpty extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  override render() {
    return this.compile(MessageBlockRaw, this.props);
  }
}
