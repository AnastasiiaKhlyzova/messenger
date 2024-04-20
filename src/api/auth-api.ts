import HTTP from "../tools/HTTPTransport";

import { SignInRequest, SignUpRequest } from "./types";
import { BASE_URL } from "./apiConfig";

const authAPIInstance = new HTTP();

export default class AuthAPI {
  static baseURL: string = BASE_URL;
  static create(data: SignUpRequest) {
    return authAPIInstance.post(`${this.baseURL}/auth/signup`, { data });
  }

  static signin(data: SignInRequest) {
    return authAPIInstance.post(`${this.baseURL}/auth/signin`, { data });
  }

  static signout() {
    return authAPIInstance.post(`${this.baseURL}/auth/logout`);
  }
}
