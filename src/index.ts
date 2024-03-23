/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import Block from './tools/Block';
import { SettingsPage } from './pages/settings-page';
import { ChatPage } from './pages/chat-page';
import { LoginPage } from './pages/login-page';
import { RegistrationPage } from './pages/registration-page';
// import {
//   LoginPage, RegistrationPage, SettingsPage, Error500Page, Error404Page, ChatPage,
// } from './pages';

// interface PageStructure {
//   [key: string]: [() => string, unknown?];
// }

// const pages: PageStructure = {
//   chat: [Pages.ChatPage],
//   login: [Pages.LoginPage],
//   '500-error': [Pages.Error500Page],
//   '404-error': [Pages.Error404Page],
//   registration: [Pages.RegistrationPage],
//   settings: [Pages.SettingsPage],
// };

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, component);
// });

// function navigate(page: string): void {
//   const [source, args] = pages[page];
//   const handlebarsFunct = Handlebars.compile(source);
//   document.body.innerHTML = handlebarsFunct(args);
// }

// window.navigate = navigate;

// document.addEventListener('DOMContentLoaded', () => navigate('login'));

// document.addEventListener('click', (e) => {
//   const target = e.target as HTMLElement;
//   const page = target.getAttribute('page');
//   if (page) {
//     navigate(page);
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const changePasswordBtn = document.getElementById('changePasswordBtn');
  const settingsPasswordDiv = document.querySelector('.settings-password') as HTMLElement;

  changePasswordBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    if (settingsPasswordDiv && (
      settingsPasswordDiv.style.display === 'none'
    || settingsPasswordDiv.style.display === ''
    )) {
      settingsPasswordDiv.style.display = 'flex';
    } else if (settingsPasswordDiv) {
      settingsPasswordDiv.style.display = 'none';
    }
  });
});

const data = [
  {
    id: 5,
    avatar: { size: 'medium', image: '' },
    name: 'John Doe',
    date: 'Su',
    message: 'Чекаво? Вася!',
    count: '9+',
  },
  {
    id: 7,
    avatar: { size: 'medium', image: '' },
    name: 'Samanta Smith',
    date: '10:59',
    message: 'Алло, на!',
    count: '7',
  },
];

// class ChatItem extends Block {
//   constructor({ ...props }) {
//     super({
//       ...props,
//     });
//   }

//   render() {
//     return `
//       <div>
//         <div>{{ name }}</div>
//         <div>{{ message }}</div>
//       </div>`;
//   }
// }

// class Page2 extends Block {
//   constructor(props) {
//     super({
//       ...props, // {buttonText: 'Button'}
//       button: new Button({ text: props.buttonText }),
//       lists: [
//         new ChatItem({ name: 'Samanta Smith', message: 'Алло, на!' }),
//         new ChatItem({ name: 'John Dow', message: 'What1?' }),
//         new ChatItem({ name: 'John Dow', message: 'What2?' }),
//         new ChatItem({ name: 'John Dow', message: 'What3?' }),
//         new ChatItem({ name: 'John Dow', message: 'What4?' }),
//         new ChatItem({ name: 'John Dow', message: 'What?' }),
//         new ChatItem({ name: 'John Dow', message: 'What?' }),
//         new ChatItem({ name: 'John Dow', message: 'What?' }),
//         new ChatItem({ name: 'John Dow', message: 'What?' }),
//         new ChatItem({ name: 'John Dow', message: 'What?' }),
//         new ChatItem({ name: 'John Dow', message: 'What?' }),
//       ],
//     });
//   }

//   override render() {
//     return `<div>{{{ lists }}}
//       {{{ button }}}
//         </div>`;
//   }
// }

const block = new RegistrationPage({});
const container = document.getElementById('app')!;

container.append(block.getContent()!);
