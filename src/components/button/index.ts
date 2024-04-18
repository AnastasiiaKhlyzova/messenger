import Block from "../../tools/Block";
import "./button.css";

import ButtonRaw from "./button.hbs";

interface Props {
  onClick?: (e?: SubmitEvent) => void;
  text?: string;
  page?: string;
  className?: string;
  type?: string;
  id?: string;
}
export class Button extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (e: SubmitEvent) => {
          e.preventDefault();
          if (props.onClick) {
            props.onClick(e);
          }
        },
      },
    });
  }

  override render() {
    return this.compile(ButtonRaw, this.props);
  }
}
