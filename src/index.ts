import * as Pages from "./pages";
import Block from "./tools/Block";
import { withStore } from "./tools/Store";
import router from "./tools/router";

interface PageStructure {
  [key: string]: [typeof Block];
}

function navigate(page: string): void {}

window.navigate = navigate;

const connect = withStore(state => ({ ...state }));

const connectedLoginPage = connect(Pages.LoginPage);
const connectedRegistrationPage = connect(Pages.RegistrationPage);
const connectedSettingsPage = connect(Pages.SettingsPage);
const connectedChatPage = connect(Pages.ChatPage);

router
  .use("/", connectedLoginPage)
  .use("/sign-up", connectedRegistrationPage)
  .use("/settings", connectedSettingsPage)
  .use("/messenger", connectedChatPage)
  .start();
