import Block from "../../tools/Block";
import "./500error.css";

import Error500PageRaw from "./500error.hbs";

export class Error500Page extends Block {
  constructor() {
    super({});
  }

  override render() {
    return this.compile(Error500PageRaw, this.props);
  }
}
