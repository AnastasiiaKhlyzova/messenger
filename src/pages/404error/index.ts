import Block from "../../tools/Block";
import "./404error.css";

import Error404PageRaw from "./404error.hbs";

export class Error404Page extends Block {
  constructor() {
    super({});
  }

  override render() {
    return this.compile(Error404PageRaw, this.props);
  }
}
