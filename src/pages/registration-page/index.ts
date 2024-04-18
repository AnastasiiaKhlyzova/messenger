import { Button, InputField } from "../../components";
import Block from "../../tools/Block";
import { ComponentsName } from "../../tools/validationRules";
import "./registration-page.css";

import RegistrPageRaw from "./registration-page.hbs";
import UserController from "../../controllers/user-controller";
import router from "../../tools/router";
import AuthController from "../../controllers/auth-controller";
import { SignUpRequest } from "../../api/types";
import isBlock from "../../tools/BlockGuard";

interface Props {
  [key: string]: unknown;
}

export class RegistrationPage extends Block {
  constructor(props: Props) {
    super({
      ...props,

      input_first_name: new InputField({
        title: "First name",
        name: ComponentsName.FIRST_NAME,
        id: "first_name",
        type: "text",
        onChange: (value: boolean) => {
          this.setProps({ isFirstNameError: value });
        },
      }),
      input_second_name: new InputField({
        title: "Second name",
        name: ComponentsName.SECOND_NAME,
        type: "text",
        id: "second_name",
        onChange: (value: boolean) => {
          this.setProps({ isSecondNameError: value });
        },
      }),
      input_email: new InputField({
        title: "Email",
        name: ComponentsName.EMAIL,
        id: "email",
        type: "text",
        onChange: (value: boolean) => {
          this.setProps({ isEmailError: value });
        },
      }),
      input_phone: new InputField({
        title: "Phone",
        name: ComponentsName.PHONE,
        id: "phone",
        type: "text",
        onChange: (value: boolean) => {
          this.setProps({ isPhoneError: value });
        },
      }),
      input_login: new InputField({
        title: "Login",
        name: ComponentsName.LOGIN,
        id: "login",
        type: "text",
        onChange: (value: boolean) => {
          this.setProps({ isLoginError: value });
        },
      }),
      input_password: new InputField({
        title: "Password",
        name: ComponentsName.PASSWORD,
        id: "password",
        type: "password",
        onChange: (value: boolean) => {
          this.setProps({ isPasswordError: value });
        },
      }),

      button: new Button({
        text: "Sign up",
        page: "chat",
        className: "button-primary",
        type: "submit",
        onClick: e => {
          const target = e!.target as HTMLInputElement;
          const formData = new FormData(target.form!);

          const userObj = {} as SignUpRequest;

          Array.from(formData.entries()).forEach(
            ([key, value]: [string, string]) => {
              userObj[key] = value;
            }
          );

          AuthController.createUser(userObj)
            .then(() => UserController.getUserInfo())
            .then(() => {
              router.go("/messenger");
            })
            .catch(error => {
              console.error("Ошибка при регистрации пользователя:", error);
            });
        },
      }),
    });
  }

  override render() {
    return this.compile(RegistrPageRaw, this.props);
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (
      oldProps.isFirstNameError !== newProps.isFirstNameError &&
      isBlock(this.children.input_first_name)
    ) {
      this.children.input_first_name.setProps({
        isError: newProps.isFirstNameError,
      });
    }
    if (
      oldProps.isSecondNameError !== newProps.isSecondNameError &&
      isBlock(this.children.input_second_name)
    ) {
      this.children.input_second_name.setProps({
        isError: newProps.isSecondNameError,
      });
    }
    if (
      oldProps.isEmailError !== newProps.isEmailError &&
      isBlock(this.children.input_email)
    ) {
      this.children.input_email.setProps({ isError: newProps.isEmailError });
    }
    if (
      oldProps.isPhoneError !== newProps.isPhoneError &&
      isBlock(this.children.input_phone)
    ) {
      this.children.input_phone.setProps({ isError: newProps.isPhoneError });
    }
    if (
      oldProps.isLoginError !== newProps.isLoginError &&
      isBlock(this.children.input_login)
    ) {
      this.children.input_login.setProps({ isError: newProps.isLoginError });
    }
    if (
      oldProps.isPasswordError !== newProps.isPasswordError &&
      isBlock(this.children.input_password)
    ) {
      this.children.input_password.setProps({
        isError: newProps.isPasswordError,
      });
    }
    return true;
  }
}
