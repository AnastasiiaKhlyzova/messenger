import AuthAPI from "../api/auth-api";
import { SignInRequest, SignUpRequest } from "../api/types";

export default class AuthController {
  public static createUser(data: SignUpRequest) {
    return AuthAPI.create(data);
  }

  public static signinUser(data: SignInRequest) {
    return AuthAPI.signin(data);
  }

  public static signoutUser() {
    AuthAPI.signout();
  }
}
