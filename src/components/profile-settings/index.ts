import Block from "../../tools/Block";
import "./profile-settings.css";

import ProfileSettingsRaw from "./profile-settings.hbs";

interface Props {
  [key: string]: unknown;
}
export class ProfileSettings extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (e: SubmitEvent) => {
          e.preventDefault();

          if (props.navigate) {
            const navigate = props.navigate as () => void;
            navigate();
          }
        },
      },
    });
  }

  override render() {
    return this.compile(ProfileSettingsRaw, this.props);
  }
}
