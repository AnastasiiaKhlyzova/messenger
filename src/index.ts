import * as Pages from "./pages";
import Block from "./tools/Block";
import { withStore } from "./tools/Store";
import router from "./tools/router";

interface PageStructure {
  [key: string]: [typeof Block];
}

function navigate(page: string): void {
  // const [NewPage] = pages[page];
  // const block = new NewPage({});
  // const container = document.getElementById('app')!;
  // container.replaceChildren(block.getContent()!);
}

window.navigate = navigate;

// const block = new Pages.LoginPage({});
// const container = document.getElementById('app')!;

// container.append(block.getContent()!);

// document.addEventListener('DOMContentLoaded', () => {
//   const changePasswordBtn = document.getElementById('changePasswordBtn');
//   const settingsPasswordDiv = document.querySelector('.settings-password') as HTMLElement;

//   changePasswordBtn?.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopImmediatePropagation();

//     console.log(changePasswordBtn, settingsPasswordDiv);

//     if (settingsPasswordDiv && (
//       settingsPasswordDiv.style.display === 'none'
//     || settingsPasswordDiv.style.display === ''
//     )) {
//       console.log('da');
//       settingsPasswordDiv.style.display = 'flex';
//       console.log(settingsPasswordDiv.style.display);
//     } else if (settingsPasswordDiv) {
//       settingsPasswordDiv.style.display = 'none';
//     }
//   });
// });

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
