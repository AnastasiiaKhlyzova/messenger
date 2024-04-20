import Block from "../../tools/Block";
import AvatarRaw from "./avatar.hbs";
import "./avatar.css";

interface Props {
  download: () => void;
  baseUrl: string;
}

export class Avatar extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => {
          props.download();
        },
      },
    });
  }

  render() {
    return this.compile(AvatarRaw, this.props);
  }
}
