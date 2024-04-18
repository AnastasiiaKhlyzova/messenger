import InputRaw from "./input.hbs";
import Block from "../../tools/Block";
import { validate } from "../../tools/validate";
import { ComponentsName } from "../../tools/validationRules";
import "./input.css";

interface Props {
  name: ComponentsName;
  onChange: (arg: boolean) => void;
  type: string;
  id: string | number;
  title?: string;
  className?: string;
}

export class Input extends Block {
  constructor(props: Props) {
    super({
      ...props,

      events: {
        blur: (e: FocusEvent) => {
          const target = e.target as HTMLInputElement;
          const name = props.name;
          const onChange = props.onChange;

          const isValid = validate(name, target.value);
          if (isValid) {
            onChange(false);
          } else {
            onChange(true);
          }
        },
      },
    });
  }

  override render() {
    return this.compile(InputRaw, this.props);
  }
}
