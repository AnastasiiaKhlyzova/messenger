import HTTP from "../tools/HTTPTransport";
import { BaseAPI } from "./base-api";

const userAPIInstance = new HTTP();

export default class UserAPI extends BaseAPI {
  static updateProfile(data) {
    return userAPIInstance.put(
      "https://ya-praktikum.tech/api/v2/user/profile",
      { data }
    );
  }

  static updateAvatar(data) {
    return userAPIInstance.put(
      "https://ya-praktikum.tech/api/v2/user/profile/avatar",
      { data }
    );
  }

  static changePassword(data) {
    return userAPIInstance.put(
      "https://ya-praktikum.tech/api/v2/user/password",
      { data }
    );
  }

  static UserInfo(data) {
    return userAPIInstance.get("https://ya-praktikum.tech/api/v2/auth/user", {
      data,
    });
  }

  static userSearch(data) {
    return userAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/user/search",
      { data }
    );
  }
}
