import InputRaw from "./input.hbs";
import Block from "../../tools/Block";
import { validate } from "../../tools/validate";
import { ComponentsName } from "../../tools/validationRules";
import "./input.css";

interface InputProps {
  name: ComponentsName;
  onChange: (arg: boolean) => void;
  type: string;
  id: string | number;
  title?: string;
  className?: string;
  value?: string;
}

export class Input extends Block {
  constructor(inputProps: InputProps) {
    super({
      ...inputProps,

      events: {
        blur: (e: FocusEvent) => {
          const target = e.target as HTMLInputElement;
          const name = inputProps.name;
          const onChange = inputProps.onChange;

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
