import HTTP from "../tools/HTTPTransport";

import { SignInRequest, SignUpRequest } from "./types";

const authAPIInstance = new HTTP();

export default class AuthAPI {
  static create(data: SignUpRequest) {
    console.log("create", data);
    return authAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/auth/signup",
      { data }
    );
  }

  static signin(data: SignInRequest) {
    return authAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/auth/signin",
      { data }
    );
  }

  static signout() {
    return authAPIInstance.post("https://ya-praktikum.tech/api/v2/auth/logout");
  }
}
