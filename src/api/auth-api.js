import HTTP from "../tools/HTTPTransport";
import { BaseAPI } from "./base-api";

const authAPIInstance = new HTTP();

export default class AuthAPI extends BaseAPI {
  static create(data) {
    console.log("create", data);
    return authAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/auth/signup",
      { data }
    );
  }

  static signin(data) {
    return authAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/auth/signin",
      { data }
    );
  }

  static signout(data) {
    return authAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/auth/logout",
      { data }
    );
  }
}
