import * as Pages from "./pages";

import { withStore } from "./tools/Store";
import router from "./tools/router";

const connect = withStore(state => ({ ...state }));

const connectedLoginPage = connect(Pages.LoginPage);
const connectedRegistrationPage = connect(Pages.RegistrationPage);
const connectedSettingsPage = connect(Pages.SettingsPage);
const connectedChatPage = connect(Pages.ChatPage);
const connected500Page = connect(Pages.Error500Page);
const connected404Page = connect(Pages.Error404Page);

router
  .use("/", connectedLoginPage)
  .use("/sign-up", connectedRegistrationPage)
  .use("/settings", connectedSettingsPage)
  .use("/messenger", connectedChatPage)
  .use("/500", connected500Page)
  .use("/404", connected404Page)
  .start();
