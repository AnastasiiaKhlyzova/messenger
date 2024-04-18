import Block from "../../tools/Block";
import { InputMessage } from "../input-message";
import { MessageList } from "../message-list";

import MessageBlockRaw from "./messageBlock.hbs";
import { submit } from "../../tools/formUtils";
import { ComponentsName } from "../../tools/validationRules";

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
