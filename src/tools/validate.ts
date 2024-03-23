import { ComponentsName, validationRules } from './validationRules';

export function validate(name: ComponentsName, value: string, onChange: (a: boolean) => void) {
  const rule = validationRules[name];
  if (!rule.test(value)) {
    onChange(true);
  } else {
    onChange(false);
  }
}
