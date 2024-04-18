import store from "../tools/Store";
import UserAPI from "../api/user-api.js";

export default class UserController {


  public static updateUserProfile(data) {
    UserAPI.updateProfile(data).then(data => console.log(data));
  }

  public static updateUserAvatar(data) {
    return UserAPI.updateAvatar(data);
  }

  public static changeUserPassword(data) {
    UserAPI.changePassword(data).then(data => console.log(data));
  }

  public static getUserInfo() {
    return UserAPI.UserInfo();
  }

  public static userSearch(data) {
    return UserAPI.userSearch(data).then(data =>
      store.dispatch("usersSearchResult", JSON.parse(data.response))
    );
  }
}
