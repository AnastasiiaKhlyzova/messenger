import Block from "../../tools/Block";
import { Button } from "../button";
import searchUserItemRaw from "./searchUserItem.hbs";

interface SearchUserItemProps {
  handler?: () => void;
  login?: string;
  text?: string;
}

export class UserItem extends Block {
  constructor(props: SearchUserItemProps) {
    const { handler, text } = props;

    super({
      ...props,

      button_add_user: new Button({
        text: text,
        onClick: handler,
      }),
    });
  }

  override render() {
    return this.compile(searchUserItemRaw, this.props);
  }
}
