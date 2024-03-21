import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

interface PageStructure {
  [key: string]: [() => string, unknown?];
}

const pages: PageStructure = {
  chat: [Pages.ChatPage],
  login: [Pages.LoginPage],
  '500-error': [Pages.Error500Page],
  '404-error': [Pages.Error404Page],
  registration: [Pages.RegistrationPage],
  settings: [Pages.SettingsPage],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string): void {
  const [source, args] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

window.navigate = navigate;

document.addEventListener('DOMContentLoaded', () => navigate('chat'));

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

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
