import HTTP from "../tools/HTTPTransport";
import {
  ChangePasswordRequest,
  UpdateProfileRequest,
  UserSearchRequest,
} from "./types";

const userAPIInstance = new HTTP();

export default class UserAPI {
  static updateProfile(data: UpdateProfileRequest) {
    return userAPIInstance.put(
      "https://ya-praktikum.tech/api/v2/user/profile",
      { data }
    );
  }

  static updateAvatar(data: FormData) {
    return userAPIInstance.put(
      "https://ya-praktikum.tech/api/v2/user/profile/avatar",
      { data }
    );
  }

  static changePassword(data: ChangePasswordRequest) {
    return userAPIInstance.put(
      "https://ya-praktikum.tech/api/v2/user/password",
      { data }
    );
  }

  static UserInfo() {
    return userAPIInstance.get("https://ya-praktikum.tech/api/v2/auth/user");
  }

  static userSearch(data: UserSearchRequest) {
    return userAPIInstance.post(
      "https://ya-praktikum.tech/api/v2/user/search",
      { data }
    );
  }
}
