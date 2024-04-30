import Block from "../../tools/Block";

import FragmentRaw from "./fragment.hbs";

interface Props {
  [key: string]: unknown;
}

export class Fragment extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  override render() {
    return this.compile(FragmentRaw, this.props);
  }
}
