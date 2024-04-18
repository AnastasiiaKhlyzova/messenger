import store from "../tools/Store";
import AuthAPI from "../api/auth-api.js";

export default class AuthController {
  public static createUser(data) {
    console.log("allo");
    return AuthAPI.create(data);
  }

  public static signinUser(data) {
    console.log("login attempt");
    return AuthAPI.signin(data);
  }

  public static signoutUser() {
    console.log("logout");
    AuthAPI.signout().then(data => console.log(data));
  }
}
