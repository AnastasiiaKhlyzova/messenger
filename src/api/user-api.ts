import HTTP from "../tools/HTTPTransport";
import {
  ChangePasswordRequest,
  UpdateProfileRequest,
  UserSearchRequest,
} from "./types";

import { BASE_URL } from "./apiConfig";

const userAPIInstance = new HTTP();

export default class UserAPI {
  static baseURL: string = BASE_URL;
  static updateProfile(data: UpdateProfileRequest) {
    return userAPIInstance.put(`${this.baseURL}/user/profile`, { data });
  }

  static updateAvatar(data: FormData) {
    return userAPIInstance.put(`${this.baseURL}/user/profile/avatar`, { data });
  }

  static changePassword(data: ChangePasswordRequest) {
    return userAPIInstance.put(`${this.baseURL}/user/password`, { data });
  }

  static UserInfo() {
    return userAPIInstance.get(`${this.baseURL}/auth/user`);
  }

  static userSearch(data: UserSearchRequest) {
    return userAPIInstance.post(`${this.baseURL}/user/search`, { data });
  }
}
