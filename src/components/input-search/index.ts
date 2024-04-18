import Block from "../../tools/Block";
import "./input-search.css";

import InputSearchRaw from "./input-search.hbs";

interface Props {
  [key: string]: unknown;
}

export class InputSearch extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => console.log("event"),
      },
    });
  }

  override render() {
    return this.compile(InputSearchRaw, this.props);
  }
}
