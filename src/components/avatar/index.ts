import Block from "../../tools/Block";
import AvatarRaw from "./avatar.hbs";

interface Props {
  [key: string]: unknown;
}
export class Avatar extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => {
          console.log("clicked");
          if (props.download) {
            const download = props.download as () => void;
            download();
          }
        },
      },
    });
  }

  render() {
    return this.compile(AvatarRaw, this.props);
  }
}
