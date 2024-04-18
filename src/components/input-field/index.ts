import Block from "../../tools/Block";
import "./input-field.css";

import InputFieldRaw from "./input-field.hbs";
import { Input } from "../input";

interface Props {
  [key: string]: unknown;
}

export class InputField extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        type: props.type,
        id: props.id,
        name: props.name,
        onChange: props.onChange,
      }),
    });
  }

  override render() {
    return this.compile(InputFieldRaw, this.props);
  }
}
